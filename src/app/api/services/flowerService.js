import { prisma } from "@/lib/db";
import { ErrorResponse } from "../error/ErrorResponse";

export class FlowerService {
  static async GETALL() {
    return prisma.flower.findMany();
  }

  static async GETBYID(id) {
    return await prisma.flower.findUnique({
      where: { id: id },
    });
  }

  static async PAGINATION(req) {
    const { page = 1, limit = 10, size, price } = req;

    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);

    let filters = {};

    const totalItems = await prisma.flower.count({
      where: filters,
    });

    if (price === "low") {
      filters.price = {
        lte: 311024,
      };
    } else if (price === "middle") {
      filters.price = {
        gte: 211928,
      };
    } else if (price === "high") {
      filters.price = {
        gte: 311926,
      };
    }

    if (size) {
      const sizeArray = size.split(",").map((size) => size.toUpperCase());
      filters.size = {
        in: sizeArray,
      };
    }

    const flowers = await prisma.flower.findMany({
      where: filters,
      skip: (pageNumber - 1) * limitNumber,
      take: limitNumber,
    });

    const totalPages = Math.ceil(totalItems / limitNumber);

    return {
      currentPage: pageNumber,
      totalPages,
      totalItems,
      data: flowers,
    };
  }

  static async CREATE(req) {
    return await prisma.flower.create({
      data: req,
    });
  }

  static async EDIT(req) {}

  static async DELETE(req) {
    const isExitingFlower = await prisma.flower.findMany();

    if (isExitingFlower.length <= 0) {
      throw new ErrorResponse(404, "Flower not found");
    }

    return await prisma.flower.delete({
      where: {
        id: req.id,
      },
    });
  }
}
