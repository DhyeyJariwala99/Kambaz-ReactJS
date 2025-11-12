"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";
import * as client from "../client";
import { setCurrentUser } from "../reducer";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();

  const signup = async () => {
    try {
      console.log("Signing up with:", user);
      const newUser = await client.signup(user);
      console.log("Signup response:", newUser);
      dispatch(setCurrentUser(newUser));
      alert("Account created successfully! You are now signed in.");
      router.push("/");
    } catch (error: any) {
      console.error("Signup error:", error);
      alert("Signup failed: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div id="wd-signup-screen" className="p-3">
      <h1>Sign up</h1>
      <FormControl
        value={user.username || ""}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="mb-2"
        placeholder="username"
      />
      <FormControl
        value={user.password || ""}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="mb-2"
        placeholder="password"
        type="password"
      />
      <FormControl
        value={user.firstName || ""}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        className="mb-2"
        placeholder="First Name"
      />
      <FormControl
        value={user.lastName || ""}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        className="mb-2"
        placeholder="Last Name"
      />
      <FormControl
        value={user.email || ""}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="mb-2"
        placeholder="Email"
        type="email"
      />
      <Button onClick={signup} className="w-100 mb-2" variant="primary">
        Sign up
      </Button>
      <Link href="/Account/Signin">Sign in</Link>
    </div>
  );
}