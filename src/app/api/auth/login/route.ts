import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

axios.defaults.withCredentials = true;

export async function POST(request: Request) {
  try {
    // console.log(await request.json())
    const a = await request.json();
    console.log(a);

    
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`,
      a,
    );
    console.log(res)
    const token = res.data.token;

    localStorage.setItem('token', token)
    

    if (!res) {
      alert("submitting form failed");
      return;
    }
    return NextResponse.json(res.data.user)

  } catch (err) {
    console.log(err);
    alert("submitting form failed");
      return;
  }
}
