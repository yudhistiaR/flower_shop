import { AuthController } from "@/app/api/controllers/AuthController";

export async function POST(req) {
  return await AuthController.REGISTER(req);
}
