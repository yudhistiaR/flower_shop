import { Validation } from "../validation/validation";
import { CategoryValidation } from "../validation/category-validation";
import { CategoryService } from "../services/categoryService";
import { errorResponse } from "../helpers/errorResponse";
import { NextResponse } from "next/server";

export class CategoryContreoller {
  static async GETALL() {
    try {
      const response = await CategoryService.GETALL();
      return NextResponse.json(response, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async CREATE(req) {
    try {
      const request = await req.json();
      Validation.Validate(CategoryValidation.CREATE, request);

      const response = await CategoryService.CREATE(request);

      return NextResponse.json(response, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async DELETE(req) {
    try {
      const request = await req.json();
      Validation.Validate(CategoryValidation.ID, request);
      await CategoryService.DELETE(request);

      return NextResponse.json({ message: "OK" }, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }
}
