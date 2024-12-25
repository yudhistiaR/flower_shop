import { FlowerContreoller } from "../../controllers/flowerController";

export async function POST(req) {
  return await FlowerContreoller.CREATE(req);
}

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");
  const size = searchParams.get("size");
  const price = searchParams.get("price");

  if (!page && !limit) {
    return await FlowerContreoller.GETALL();
  } else {
    return await FlowerContreoller.PAGINATION({
      page,
      limit,
      size,
      price,
    });
  }
}

export async function DELETE(req) {
  return await FlowerContreoller.DELETE(req);
}
