import { Validation } from "../validation/validation";
import { AuthValidation } from "../validation/auth-validation";
import { NextResponse } from "next/server";
import { errorResponse } from "../helpers/errorResponse";
import { AuthService } from "../services/auth-service";

export class AuthController {
  static async LOGIN(req) {
    try {
      const request = await req.json();

      Validation.Validate(AuthValidation.LOGIN, request);

      await AuthService.LOGIN(request);

      return NextResponse.json({ message: "OK" }, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async REGISTER(req) {
    try {
      const request = await req.json();

      Validation.Validate(AuthValidation.REGISTER, request);

      await AuthService.REGISTER(request);

      return NextResponse.json({ message: "OK" }, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }
}
