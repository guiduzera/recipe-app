import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [disable, setDisable] = useState(true);
  const [user, setUser] = useState({
    EmailInput: '',
    PasswordInput: '',
  });

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setUser((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  return (
    <section className="meals">
      <form>
        <label htmlFor="EmailInput">
          Email
          <input
            type="email"
            name="EmailInput"
            id="EmailInput"
            value={ user.EmailInput }
            onChange={ handleInputChange }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="PasswordInput">
          Password
          <input
            type="password"
            name="PasswordInput"
            id="PasswordInput"
            value={ user.PasswordInput }
            onChange={ handleInputChange }
            data-testid="password-input"
          />
        </label>
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ disable }
        >
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
