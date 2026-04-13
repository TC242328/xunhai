import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { initialCatalog } from "../lib/initial-catalog";

if (!process.env.DATABASE_URL) {
  console.error("请设置 DATABASE_URL，例如 file:./dev.db");
  process.exit(1);
}
const prisma = new PrismaClient();

async function main() {
  let order = 0;
  for (const p of initialCatalog) {
    await prisma.product.upsert({
      where: { slug: p.slug },
      create: {
        slug: p.slug,
        name: p.name,
        tagline: p.tagline,
        category: p.category,
        categoryLabel: p.categoryLabel,
        price: p.price,
        isNew: p.isNew ?? false,
        description: p.description,
        colors: JSON.stringify(p.colors),
        gallery: JSON.stringify(p.gallery),
        sizes: JSON.stringify(p.sizes),
        sortOrder: order++,
      },
      update: {
        name: p.name,
        tagline: p.tagline,
        category: p.category,
        categoryLabel: p.categoryLabel,
        price: p.price,
        isNew: p.isNew ?? false,
        description: p.description,
        colors: JSON.stringify(p.colors),
        gallery: JSON.stringify(p.gallery),
        sizes: JSON.stringify(p.sizes),
      },
    });
  }
  console.log(`已写入 ${initialCatalog.length} 条商品（按 slug upsert）。`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
