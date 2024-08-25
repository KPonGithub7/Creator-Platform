"use client";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth, provider } from "../firebase/config";
import { sendTokenToServer } from "@/utils/sendToken";

const GoogleSignIn = () => {
    const router = useRouter();

    const signInWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider);
            const user = response.user;

            if (user) {
                const credentials =
                    GoogleAuthProvider.credentialFromResult(response);
                const token = credentials?.accessToken;
                if (credentials && token) {
                    sendTokenToServer(token);
                    router.push("/");
                }
            }
        } catch (error) {
            console.error("Sign-In error", error);
        }
    };

    return (
        <button onClick={signInWithGoogle} className="btn btn-primary">
            Sign in with Google
        </button>
    );
};

export default GoogleSignIn;
