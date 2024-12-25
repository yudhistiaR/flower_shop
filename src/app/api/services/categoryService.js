import { prisma } from "@/lib/db";
import { ErrorResponse } from "../error/ErrorResponse";

export class CategoryService {
  static async GETALL() {
    return await prisma.category.findMany();
  }

  static async CREATE(req) {
    return await prisma.category.create({
      data: req,
    });
  }

  static async DELETE(req) {
    const exitingCategory = await prisma.category.findMany();

    if (exitingCategory.length >= 0) {
      throw new ErrorResponse(404, "Category not found");
    }

    return await prisma.category.delete({
      where: {
        id: req.id,
      },
    });
  }
}
