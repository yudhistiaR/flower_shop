import { prisma } from "@/lib/db";
import bcrypt from "bcrypt";
import { ErrorResponse } from "../error/ErrorResponse";
import { cookies } from "next/headers";

export class AuthService {
  static async LOGIN(req) {
    const cookieStore = cookies();
    const isExitingUser = await prisma.user.findFirst({
      where: {
        email: req.email,
      },
    });

    if (!isExitingUser) {
      throw new ErrorResponse(400, "Email or Password is incorrect");
    }

    const isMatchPassword = bcrypt.compareSync(
      req.password,
      isExitingUser.password,
    );

    if (!isMatchPassword) {
      throw new ErrorResponse(400, "Email or Password is incorrect");
    }

    cookieStore.set("auth", isExitingUser.id, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30,
      sameSite: "strict",
      path: "/",
    });
  }

  static async REGISTER(req) {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.password, salt);

    return await prisma.user.create({
      data: {
        ...req,
        password: hashPassword,
      },
    });
  }
}
