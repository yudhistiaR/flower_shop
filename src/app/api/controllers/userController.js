import { UserService } from "../services/userService";
import { NextResponse } from "next/server";
import { errorResponse } from "../helpers/errorResponse";

export class UserController {
  static async GETME(id) {
    try {
      const response = await UserService.GETME(id);
      return NextResponse.json(response, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }
}
