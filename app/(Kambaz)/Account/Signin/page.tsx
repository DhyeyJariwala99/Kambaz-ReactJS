'use client'

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Form, Button } from "react-bootstrap"

export default function Signin() {
  const router = useRouter()
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    // Navigate to Dashboard on signin
    router.push("/Dashboard")
  }

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <Form onSubmit={handleSignIn}>
        <Form.Control
          id="wd-username"
          placeholder="username"
          className="mb-2"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <Form.Control
          id="wd-password"
          placeholder="password"
          type="password"
          className="mb-2"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <Button
          id="wd-signin-btn"
          type="submit"
          variant="primary"
          className="w-100 mb-2"
        >
          Sign in
        </Button>
        <Link href="/Account/Signup" id="wd-signup-link">
          Sign up
        </Link>
      </Form>
    </div>
  )
}