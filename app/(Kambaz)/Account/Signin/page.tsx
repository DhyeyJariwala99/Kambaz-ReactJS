import Link from "next/link";

export default function Signin() {
  const formCardStyle = {
    background: 'white',
    border: '1px solid #C7CDD1',
    borderRadius: '4px',
    padding: '40px',
    maxWidth: '500px',
    margin: '40px auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const formLabelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: 600,
    color: '#2D3B45',
    marginBottom: '6px',
  };

  const formInputStyle = {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #C7CDD1',
    borderRadius: '4px',
    fontSize: '14px',
    fontFamily: 'inherit',
  };

  const btnPrimaryStyle = {
    width: '100%',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '4px',
    background: '#0374B5',
    color: 'white',
    fontSize: '15px',
    fontWeight: 600,
    cursor: 'pointer',
    textAlign: 'center' as const,
    textDecoration: 'none',
    display: 'inline-block',
  };

  return (
    <div style={formCardStyle} id="wd-signin-screen">
      <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#2D3B45', marginBottom: '30px', textAlign: 'center' }}>
        Sign in
      </h3>
      
      <div style={formGroupStyle}>
        <label htmlFor="wd-username" style={formLabelStyle}>
          Username
        </label>
        <input 
          id="wd-username"
          placeholder="username" 
          style={formInputStyle}
          className="wd-username"
        />
      </div>

      <div style={formGroupStyle}>
        <label htmlFor="wd-password" style={formLabelStyle}>
          Password
        </label>
        <input
          id="wd-password"
          placeholder="password"
          type="password"
          style={formInputStyle}
          className="wd-password"
        />
      </div>

      <div style={{ marginTop: '30px' }}>
        <Link href="/Dashboard" id="wd-signin-btn" style={btnPrimaryStyle}>
          Sign in
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #EFEFEF' }}>
        <span style={{ fontSize: '14px', color: '#6B7780' }}>Don't have an account? </span>
        <Link href="Signup" id="wd-signup-link" style={{ color: '#0374B5', textDecoration: 'none', fontWeight: 500 }}>
          Sign up
        </Link>
      </div>
    </div>
  );
}