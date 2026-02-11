import prisma from "../lib/prisma.js";

async function main() {
  await prisma.product.createMany({
    data: [
      { name: "Clavier", price: 79.9 },
      { name: "Souris", price: 29.9 },
      { name: "Écran", price: 4444449.0 },
    ],
  });

  console.log("Seed done!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
