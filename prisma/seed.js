const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const FLOWERSIZE = ["M", "L", "XL"];

const userSeed = async () => {
  for (let i = 0; i <= 1000; i++) {
    const randomSize = Math.floor(Math.random() * FLOWERSIZE.length);

    const flower = await prisma.flower.create({
      data: {
        name: `Flower ${i}`,
        price: 311024 + i,
        description: "Seed flowers testing",
        size: FLOWERSIZE[randomSize],
        category_id: "03655edd-0c2d-493b-8344-76d9e8a44224",
        image:
          "https://imgs.search.brave.com/02Tisvr94fpeLLGnYUuvUgOIBPtIxs6t0H_UxR8yc3c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4Lzg2Lzc0LzEz/LzM2MF9GXzg4Njc0/MTMxMV96ckFiYjdD/NUFiYTIzRm1qZzhF/Y29oVTVIaFBpd0lP/Mi5qcGc",
      },
    });

    console.log(`Create Flower : ${flower.name}`);
    console.log(`Flower Count : ${i}`);
  }
};

userSeed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
