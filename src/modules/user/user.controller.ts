import type { Request, Response } from "express";
import { userService } from "./user.service";

const signupUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.signupUserIntoDB(req.body);
    const user = result.rows[0];
    // console.log(user.id);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const userController = {
  signupUser,
};
