import { prisma } from "@/lib/db";

export class UserService {
  static async GETME(id) {
    return await prisma.user.findUnique({
      where: { id: id },
    });
  }
}
