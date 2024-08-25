"use client";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import GoogleSignIn from "../components/GoogleSignIn";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const handleSignin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await signInWithEmailAndPassword(email, password);
            console.log(res?.user);
            setEmail("");
            setPassword("");
            // sessionStorage.setItem("user", String(true));
            router.push("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 space-y-4 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white text-center">
                    Sign In
                </h2>
                <form onSubmit={handleSignin} className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-300"
                        >
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-300"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-md font-medium"
                    >
                        Sign In
                    </button>
                </form>
                <GoogleSignIn />
            </div>
        </div>
    );
};

export default Signin;
