import { setAccessToken } from "@/actions/serverActions";

export async function sendTokenToServer(token: string) {
    try {
        await setAccessToken(token);
        console.log("The token has been stored successfully.");
    } catch (error) {
        console.error("Error sending token to server:", error);
    }
}
