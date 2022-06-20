import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <section className="meals">
      <form>
        <label htmlFor="EmailInput">
          Email
          <input
            type="email"
            name="EmailInput"
            id="EmailInput"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="PasswordInput">
          Password
          <input
            type="password"
            name="PasswordInput"
            id="PasswordInput"
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
