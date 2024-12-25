import { z } from "zod";

export class CategoryValidation {
  static ID = z.object({
    id: z.string().uuid(),
  });

  static CREATE = z.object({
    name: z.string().min(1),
  });

  static DELETE = z.object({
    id: z.string().min(1),
  });
}
