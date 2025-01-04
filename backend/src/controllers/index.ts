import { Request, Response } from "express";
import { userModel } from "../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const registerUser = async (req: Request, res: Response) => {
  const userInfo = req.body;
  try {
    const pass = userInfo.password;
    const hash = bcrypt.hash(pass, 12);
    userInfo.password = hash;
    const user = await userModel.create({
      ...userInfo,
    });
    res
      .status(202)
      .json({ message: "Sucessfully registered the user :)", ...user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error :(" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const userInfo = req.body;
  try {
    const user = await userModel.findOne({ email: userInfo.email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Email is not registered with us :(" });
    }
    const ok = await bcrypt.compare(userInfo.password, user.password);
    if (!ok) {
      return res
        .status(401)
        .json({ message: "Wrong email password combination :(" });
    }
    const token = jwt.sign(
      {
        user: {
          id: user.Id,
          email: user.email,
          image: user.image,
          name: user.name,
        },
      },
      (process.env.JWT_SECRET as string) || "asdfas!@###@"
    );
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
    });
    res.status(200).json({ message: "Logged in sucessfully :)" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error :(" });
  }
};
