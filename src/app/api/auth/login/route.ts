import { returnErrorResponse } from "@/utils/errorHandler";
import axios from "axios";
import { NextResponse } from "next/server";

axios.defaults.withCredentials = true;

export async function POST(request: Request) {
  try {
  
    const userData = await request.json();

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(userData),
    });

     const data = await res.json(); 
    

    if (!res.ok) {
      return returnErrorResponse(data, res.status, res.statusText);
    } else {
      return NextResponse.json(data);
    }

  } catch (err) {
    console.log(err);
    return returnErrorResponse(null, 500, "Internal Server Error");
  }
}
