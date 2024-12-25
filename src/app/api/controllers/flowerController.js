import { errorResponse } from "../helpers/errorResponse";
import { Validation } from "../validation/validation";
import { FlowerValidation } from "../validation/flower-validation";
import { FlowerService } from "../services/flowerService";
import { NextResponse } from "next/server";

export class FlowerContreoller {
  static async GETALL() {
    try {
      const response = await FlowerService.GETALL();

      return NextResponse.json(response, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async GETBYID(id) {
    try {
      const response = await FlowerService.GETBYID(id);

      return NextResponse.json(response, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async PAGINATION(req) {
    try {
      const response = await FlowerService.PAGINATION(req);

      return NextResponse.json(response, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async DELETE(req) {
    try {
      const request = await req.json();

      Validation.Validate(FlowerValidation.ID, request);

      await FlowerService.DELETE(request);

      return NextResponse.json({ message: "OK" }, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async EDIT(req) {
    try {
      const request = await req.json();
      Validation.Validate(FlowerValidation.EDIT, request);
    } catch (error) {
      return errorResponse(error);
    }
  }

  static async CREATE(req) {
    try {
      const request = await req.json();
      Validation.Validate(FlowerValidation.CREATE, request);

      const response = await FlowerService.CREATE(request);

      return NextResponse.json(response, { status: 200 });
    } catch (error) {
      return errorResponse(error);
    }
  }
}
