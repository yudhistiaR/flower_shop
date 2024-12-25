import { z } from "zod";

export class AuthValidation {
  static LOGIN = z.object({
    email: z.string().email(),
    password: z.string().min(1),
  });

  static REGISTER = z.object({
    username: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(1),
  });
}
