import { returnErrorResponse } from "@/utils/errorhandler";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

axios.defaults.withCredentials = true;

export async function POST(request: Request) {
  try {
  
    const userData = await request.json();
    console.log(userData);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(userData),
    });

     const data = await res.json();
    console.log(data);
    const token = data.token;

    localStorage.setItem('token', token)
    

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
