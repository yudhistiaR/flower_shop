import { UserController } from "@/app/api/controllers/userController";

export async function GET(_, { params }) {
  const { user_id } = await params;
  return await UserController.GETME(user_id);
}
