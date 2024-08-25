"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function setAccessToken(token: string) {
    try {
        const cookieStore = cookies();
        cookieStore.set("Access_Token", token, {
            path: "/",
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24, // 1 day
        });
        const tk = cookieStore.get("Access_Token");
        console.log(tk);
        redirect("/");
    } catch (error) {
        console.error("Error setting access token cookie:", error);
        throw new Error("Failed to set access token cookie.");
    }
}
