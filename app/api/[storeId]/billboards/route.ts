import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// create new billboard
// post: api/storeId/billboards
export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const { label, imageUrl } = body;
    if (!label) {
      return new NextResponse("Name is required", { status: 400 });
    }
    if (!imageUrl) {
      return new NextResponse("image url is required", { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse("store id is required", { status: 400 });
    }

    // make sure store belongs to user
    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const billboard = await prismadb.billboard.create({
      data: {
        label,
        imageUrl,
        storeId: params.storeId,
      },
    });
    return NextResponse.json(billboard);
  } catch (error) {
    console.log("[BILLBOARDS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

// get all billboards for a store
// get: api/storeId/billboards
export async function GET(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    if (!params.storeId) {
      return new NextResponse("store id is required", { status: 400 });
    }

    const billboards = await prismadb.billboard.findMany({
      where: {
        storeId: params.storeId,
      },
    });
    return NextResponse.json(billboards);
  } catch (error) {
    console.log("[BILLBOARDS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
