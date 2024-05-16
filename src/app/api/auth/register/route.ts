import { returnErrorResponse } from "@/utils/errorhandler";
import axios from "axios";
import { NextResponse } from "next/server";



export async function POST(request: Request) {
  try {
    
    const userData = await request.json();
    console.log(userData);
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(userData),
    });

    const data = await res.json();
    console.log(data);

    if (!res.ok) {
      return returnErrorResponse(data, res.status, res.statusText);
    } else {
      return NextResponse.json(data);
    }
  } catch (error) {
    console.log(error);
    return returnErrorResponse(null, 500, "Internal Server Error");
  }
}
