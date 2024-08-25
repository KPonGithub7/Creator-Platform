"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";
import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Home() {
    const [user, loading, error] = useAuthState(auth);
    const [ytData, setYtData] = useState<any>(null);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log("Signed out successfully");
            })
            .catch((error) => {
                // An error happened.
            });
    };

    useEffect(() => {
        const youtubeData = async () => {
            try {
                const response = await fetch("/api/youtube/fetchData");
                const data = await response.json();
                console.log("Yt data:", data);
                setYtData(data);
            } catch (error) {
                console.error("Couldn't get the yt data to client");
            }
        };
        youtubeData();
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center  justify-between text-center p-24">
            {/* <div>
                <button onClick={signIn}>LogIn</button>
            </div> */}
            hello
            <br />
            {user?.email}
            {/* <div>{ytData ? <div>{ytData}</div> : <div>No data</div>}</div> */}
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </main>
    );
}
