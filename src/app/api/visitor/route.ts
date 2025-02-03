import { PrismaClient } from '@prisma/client';

// init prisma
const prisma = new PrismaClient();

// GET /api/visitor
export async function GET() {
  try {
    // try to get the visitor count
    const visitorCount = await prisma.visitor.findFirst();

    if (!visitorCount) {
      // no counter exists, so create one
      const newVisitor = await prisma.visitor.create({
        data: { count: 1 },
      });
      return new Response(JSON.stringify(newVisitor), { status: 200 });
    } else {
      // counter exists, so increment it
      const updatedVisitor = await prisma.visitor.update({
        where: { id: visitorCount.id },
        data: { count: visitorCount.count + 1 },
      });
      return new Response(JSON.stringify(updatedVisitor), { status: 200 });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error on getting number of visitors' }), { status: 500 });
  }
}
