import { z } from "zod";

const FLOWRSIZE = z.enum(["M", "L", "XL"]);

export class FlowerValidation {
  static ID = z.object({
    id: z.string().uuid(),
  });

  static CREATE = z.object({
    name: z.string().min(1),
    price: z.number(),
    description: z.string().min(1),
    size: z.enum(FLOWRSIZE),
    description: z.string().min(1),
  });
}
