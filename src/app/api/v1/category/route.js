import { CategoryContreoller } from "../../controllers/categoryController";

export async function POST(req) {
  return await CategoryContreoller.CREATE(req);
}

export async function GET() {
  return await CategoryContreoller.GETALL();
}

export async function DELETE(req) {
  return await CategoryContreoller.DELETE(req);
}
