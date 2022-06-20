import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  return (
    <section className="meals">
      <form>
        <label htmlFor="EmailInput">
          Email
          <input
            type="email"
            name="EmailInput"
            id="EmailInput"
            value={ user.email }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="PasswordInput">
          Password
          <input
            type="password"
            name="PasswordInput"
            id="PasswordInput"
            value={ user.password }
            data-testid="password-input"
          />
        </label>
        <button
          type="submit"
          data-testid="login-submit-btn"
        >
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
