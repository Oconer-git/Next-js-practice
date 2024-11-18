import { NextResponse, NextRequest } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";


//get the id
export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
    const user = await prisma.user.findUnique({
        where: {id: Number(params.id)}
    })

    if(!user)
        return NextResponse.json({error: 'user not found'}, {status: 404})
    return NextResponse.json(user)
}

//update user
export async function PUT(request: NextRequest, {params}: {params: {id: string}}) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400})
    
    const validatedBody = validation.data;

    //check if user exists
    const user = await prisma.user.findUnique({
        where: {id: Number(params.id)}
    })

    if(!user) 
        return NextResponse.json({error: "User not exists"}, {status: 400})

    const updatedUser = await prisma.user.update({
        where: {id: Number(params.id)},
        data: {
            name: validatedBody.name,
            email: validatedBody.email
        }
    })

    return NextResponse.json(updatedUser)

}
export async function DELETE(request: NextRequest, {params}: {params: {id: string}}) {
    const user = await prisma.user.findUnique({
        where: {id: Number(params.id)}
    })

    if(!user)
        return NextResponse.json({error: "user doesn't exist"}, {status: 400})

    const deleteUser = await prisma.user.delete({
        where: {id: Number(params.id)}
    })

    return NextResponse.json(deleteUser)
}

