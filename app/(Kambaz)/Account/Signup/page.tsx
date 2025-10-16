'use client'

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Form, Button } from "react-bootstrap"

export default function Signup() {
  const router = useRouter()
  const [user, setUser] = useState({
    username: "",
    password: "",
    verifyPassword: "",
  })

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    if (user.password !== user.verifyPassword) {
      alert("Passwords do not match!")
      return
    }
    router.push("/Account/Profile")
  }

  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <Form onSubmit={handleSignUp}>
        <Form.Control
          placeholder="username"
          className="wd-username mb-2"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <Form.Control
          placeholder="password"
          type="password"
          className="wd-password mb-2"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Form.Control
          placeholder="verify password"
          type="password"
          className="wd-password-verify mb-2"
          value={user.verifyPassword}
          onChange={(e) =>
            setUser({ ...user, verifyPassword: e.target.value })
          }
        />
        <Button type="submit" variant="primary" className="w-100 mb-2">
          Sign up
        </Button>
        <Link href="/Account/Signin">Sign in</Link>
      </Form>
    </div>
  )
}