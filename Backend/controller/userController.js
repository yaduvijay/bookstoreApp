import { connections } from "mongoose";
import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  {
    try {
      const { fullname, email, password } = req.body;
      if (!fullname || !email || !password) {
        return res.status(400).json({
          suceess: false,
          message: "All field are required",
        });
      }
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          success: false,
          message: "User alredy exits",
        });
      }
      const hashPassword = await bcrypt.hash(password, 10);
      const createUser = await User.create({
        fullname,
        email,
        password: hashPassword,
      });

      await createUser.save();
      return res.status(201).json({
        success: true,
        message: "User register Sccesfully",
        user:{
            _id: createUser._id,
            fullname:createUser.fullname,
            email:createUser.email,

        }
      });
    } catch (error) {
      console.log("Error", error.message);
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};
export const login = async (req, res) => {
  {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({
          suceess: false,
          message: "All field are required",
        });
      }
      const user = await User.findOne({ email });
      const isMatch = await bcrypt.compare(password, user.password);
      if (!user || !isMatch) {
        return res.status(400).json({
          success: false,
          message: "Invalid username and password",
        });
      }
        else {
        return res.status(200).json({
          success: true,
          message: "Login successful",
          user: {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
          },
        });
      }
    } catch (error) {
      console.log("Error", error.message);
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};
