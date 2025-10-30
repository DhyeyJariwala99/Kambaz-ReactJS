'use client'

import { useState } from "react"
import Link from "next/link"
import { Form, Button } from "react-bootstrap"

export default function Profile() {
  const [profile, setProfile] = useState({
    username: "brew",
    password: "123",
    firstName: "Brew",
    lastName: "Cone",
    dob: "2000-01-01",
    email: "brew@cone",
    role: "FACULTY",
  })

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Form>
        <Form.Control
          defaultValue={profile.username}
          placeholder="username"
          className="wd-username mb-2"
          id="wd-username"
          onChange={(e) =>
            setProfile({ ...profile, username: e.target.value })
          }
        />
        <Form.Control
          defaultValue={profile.password}
          placeholder="password"
          type="password"
          className="wd-password mb-2"
          id="wd-password"
          onChange={(e) =>
            setProfile({ ...profile, password: e.target.value })
          }
        />
        <Form.Control
          defaultValue={profile.firstName}
          placeholder="First Name"
          className="mb-2"
          id="wd-firstname"
          onChange={(e) =>
            setProfile({ ...profile, firstName: e.target.value })
          }
        />
        <Form.Control
          defaultValue={profile.lastName}
          placeholder="Last Name"
          className="mb-2"
          id="wd-lastname"
          onChange={(e) =>
            setProfile({ ...profile, lastName: e.target.value })
          }
        />
        <Form.Control
          defaultValue={profile.dob}
          type="date"
          className="mb-2"
          id="wd-dob"
          onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
        />
        <Form.Control
          defaultValue={profile.email}
          type="email"
          className="mb-2"
          id="wd-email"
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
        <Form.Select
          defaultValue={profile.role}
          className="mb-2"
          id="wd-role"
          onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </Form.Select>
        <Link href="/Account/Signin" className="btn btn-danger w-100">
          Sign out
        </Link>
      </Form>
    </div>
  )
}