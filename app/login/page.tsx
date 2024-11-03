"use client"; // Ensure this is a client component
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful");
        router.push("/");
      } else {
        setError(data.error ? data.error : "An unknown error occurred.");
      }
    } catch (err) {
      setError("An error occurred while logging in");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-96 text-black">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-gray-700 text-black"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-gray-700 text-black"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Login
          </button>
        </form>
        <div className="pt-2 text-sm text-black">
          Don't have an account?{" "}
          <Link href="/signup">
            <span className="text-blue-500 hover:underline">Signup</span>
          </Link>
        </div>
      </div>
    </div>
  );
}