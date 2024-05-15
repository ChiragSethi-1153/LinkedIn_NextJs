import axios from "axios";
import { NextResponse } from "next/server";

export const returnErrorResponse = (
  data: any,
  status: number,
  statusText: string
) => {
  return new Response(data ? JSON.stringify(data) : null, {
    status: status,
    statusText: statusText,
  });
};

export async function POST(request: Request) {
  try {
    // console.log(await request.json())
    const userData = await request.json();
    console.log(userData);
    // const result = registerSchema.safeParse(a)
    // console.log(result)
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
