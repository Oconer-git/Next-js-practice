import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400});
    
    const validatedBody = validation.data;

    const emailExists = await prisma.user.findUnique({
        where: {email: validatedBody.email}
    })
    if(emailExists)
        return NextResponse.json({error: 'email aready exsits'}, {status: 400})

    const createdUser = await prisma.user.create({data: validatedBody})
    return NextResponse.json(createdUser);
}
