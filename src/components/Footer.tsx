// Layout Footer

import { PrismaClient } from '@prisma/client'

export default async function Footer() {
  // init prisma
  const prisma = new PrismaClient();
  
  // get visitor count
  let visitorCount = await prisma.visitor.findFirst();
  
  // increment visitor count
  if (!visitorCount) {
    visitorCount = await prisma.visitor.create({
      data: { count: 1 },
    });
  } else {
    visitorCount = await prisma.visitor.update({
      where: { id: visitorCount.id },
      data: { count: visitorCount.count + 1 },
    });
  }
  
  return (
    <footer className="text-white text-center p-4">
      <hr className="pb-4" />
      Besucher: {visitorCount.count}
    </footer>
  );
}
