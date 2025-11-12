"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { FormControl, Button } from "react-bootstrap";
import * as client from "../client";
import { setCurrentUser } from "../reducer";

export default function Profile() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      setProfile(currentUser);
    }
  }, [currentUser]);

  const updateProfile = async () => {
    try {
      const updatedProfile = await client.updateUser(profile);
      dispatch(setCurrentUser(updatedProfile));
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update profile");
    }
  };

  const signout = async () => {
    try {
      await client.signout();
      dispatch(setCurrentUser(null));
      router.push("/Account/Signin");
    } catch (error) {
      console.error("Signout error:", error);
    }
  };

  if (!currentUser) {
    router.push("/Account/Signin");
    return null;
  }

  return (
    <div id="wd-profile-screen" className="p-3">
      <h3>Profile</h3>
      <FormControl
        id="wd-username"
        className="mb-2"
        value={profile.username || ""}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
        placeholder="Username"
      />
      <FormControl
        id="wd-password"
        className="mb-2"
        type="password"
        value={profile.password || ""}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        placeholder="Password"
      />
      <FormControl
        id="wd-firstname"
        className="mb-2"
        value={profile.firstName || ""}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
        placeholder="First Name"
      />
      <FormControl
        id="wd-lastname"
        className="mb-2"
        value={profile.lastName || ""}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
        placeholder="Last Name"
      />
      <FormControl
        id="wd-dob"
        className="mb-2"
        type="date"
        value={profile.dob || ""}
        onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
      />
      <FormControl
        id="wd-email"
        className="mb-2"
        type="email"
        value={profile.email || ""}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        placeholder="Email"
      />
      <select
        className="form-control mb-2"
        id="wd-role"
        value={profile.role || "USER"}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <Button onClick={updateProfile} className="w-100 mb-2" variant="primary">
        Update Profile
      </Button>
      <Button onClick={signout} className="w-100" variant="danger" id="wd-signout-btn">
        Sign out
      </Button>
    </div>
  );
}