import { FlowerContreoller } from "@/app/api/controllers/flowerController";

export async function GET(_, { params }) {
  const { flower_id } = await params;
  return FlowerContreoller.GETBYID(flower_id);
}
