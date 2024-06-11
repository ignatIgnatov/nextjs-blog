import connectToDB from "@/database";
import { NextResponse } from "next/server";
import Blog from "@/models/blog";

export async function GET() {
    try {
        connectToDB();
        const extractAllBlogsFromDb = await Blog.find({});

        if (extractAllBlogsFromDb) {
            return NextResponse.json({
                success: true,
                data: extractAllBlogsFromDb
            })
        } else {
            return NextResponse.json({
                success: false,
                message: "Something went wrong! Please try again"
            })
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong! Please try again"
        })
    }
}