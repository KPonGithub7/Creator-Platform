// import { NextApiRequest, NextApiResponse } from "next";
// import { setCookie } from "nookies";
// import { initAdmin } from "@/app/firebase/firebaseAdmin";
// import { headers } from "next/headers";

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         // await initAdmin();
//         const headersList = headers();
//         const authHeader = headersList.get("Authorization");
//         const token =
//             authHeader && authHeader.startsWith("Bearer ")
//                 ? authHeader.split("Bearer ")[1]
//                 : null;
//         if (!token) {
//             return new Response("Unauthorized!", { status: 401 });
//         }

//         console.log(token);

//         setCookie({ res }, "Access_Token", token, {
//             path: "/",
//             httpOnly: true, // Makes the cookie inaccessible to client-side JavaScript
//             secure: process.env.NODE_ENV === "production", // Ensures the cookie is only sent over HTTPS in production
//             maxAge: 60 * 60 * 24, // 1 week
//         });

//         // return new Response("Authorized", {
//         //     status: 200, // or 302 for a temporary redirect
//         //     headers: {
//         //         Location: "/", // Relative URL for the redirect
//         //     },
//         // });

//         return res.status(200).json("It's done")
//     } catch (error) {
//         console.error("OAuth callback error:", error);
//         return new Response("Internal Server Error", { status: 500 });
//     }
// }
