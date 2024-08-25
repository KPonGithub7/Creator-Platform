import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import { cookies } from "next/headers";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const cookieStore = cookies();
    const token = cookieStore.get("Access_Token");

    if (!token) {
        console.log("access token is needed");
        return new Response("Unauthorised!!", { status: 401 });
    }

    const access_token = token.value;

    try {
        const oAuth2Client = new google.auth.OAuth2();

        oAuth2Client.setCredentials({ access_token });

        const youtube = google.youtube({ version: "v3", auth: oAuth2Client });

        const response = await youtube.channels.list({
            mine: true,
            part: ["snippet", "contentDetails"],
        });

        return new Response(JSON.stringify(response.data));
    } catch (error) {
        console.error("YouTube API error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
