import Link from "next/link";

export default function Profile() {
  const formCardStyle = { background: 'white', border: '1px solid #C7CDD1', borderRadius: '4px', padding: '40px', maxWidth: '500px', margin: '40px auto', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' };
  const formGroupStyle = { marginBottom: '20px' };
  const formLabelStyle = { display: 'block', fontSize: '14px', fontWeight: 600, color: '#2D3B45', marginBottom: '6px' };
  const formInputStyle = { width: '100%', padding: '10px 12px', border: '1px solid #C7CDD1', borderRadius: '4px', fontSize: '14px' };
  const btnStyle = { padding: '12px 24px', border: '1px solid #C7CDD1', borderRadius: '4px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', textDecoration: 'none', display: 'inline-block' };

  return (
    <div style={formCardStyle} id="wd-profile-screen">
      <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#2D3B45', marginBottom: '30px', textAlign: 'center' }}>Profile</h3>
      
      <div style={formGroupStyle}>
        <label htmlFor="wd-username-profile" style={formLabelStyle}>Username</label>
        <input id="wd-username-profile" defaultValue="Dhyey" placeholder="username" style={formInputStyle} className="wd-username" />
      </div>

      <div style={formGroupStyle}>
        <label htmlFor="wd-password-profile" style={formLabelStyle}>Password</label>
        <input id="wd-password-profile" defaultValue="123" placeholder="password" type="password" style={formInputStyle} className="wd-password" />
      </div>

      <div style={formGroupStyle}>
        <label htmlFor="wd-firstname" style={formLabelStyle}>First Name</label>
        <input id="wd-firstname" defaultValue="dhyey" placeholder="First Name" style={formInputStyle} />
      </div>

      <div style={formGroupStyle}>
        <label htmlFor="wd-lastname" style={formLabelStyle}>Last Name</label>
        <input id="wd-lastname" defaultValue="dj" placeholder="Last Name" style={formInputStyle} />
      </div>

      <div style={formGroupStyle}>
        <label htmlFor="wd-dob" style={formLabelStyle}>Date of Birth</label>
        <input id="wd-dob" defaultValue="2002-01-09" type="date" style={formInputStyle} />
      </div>

      <div style={formGroupStyle}>
        <label htmlFor="wd-email" style={formLabelStyle}>Email</label>
        <input id="wd-email" defaultValue="dj@google.com" type="email" style={formInputStyle} />
      </div>

      <div style={formGroupStyle}>
        <label htmlFor="wd-role" style={formLabelStyle}>Role</label>
        <select id="wd-role" defaultValue="FACULTY" style={formInputStyle}>
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginTop: '30px' }}>
        <Link href="Signin" style={{ ...btnStyle, background: 'white', color: '#333', flex: 1, textAlign: 'center' }}>Sign out</Link>
        <button style={{ ...btnStyle, background: '#0374B5', color: 'white', border: 'none', flex: 1 }}>Save</button>
      </div>
    </div>
  );
}