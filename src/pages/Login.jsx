import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [disable, setDisable] = useState(true);
  const [loginState, setLoginState] = useState({
    EmailInput: '',
    PasswordInput: '',
  });

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setLoginState((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const loginValidation = () => {
    let validate = false;

    const EMAIL_REGEX = /^[\w.-]+@[\w.-]+\.[\w]+(\.[\w]+)?$/i;
    const MINIMUM_PASSWORD_LENGTH = 7;
    const validateEmail = EMAIL_REGEX.test(loginState.EmailInput);
    const validatePassword = loginState.PasswordInput.length >= MINIMUM_PASSWORD_LENGTH;

    if (validateEmail && validatePassword) validate = true;

    if (validate === true) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  useEffect(() => {
    loginValidation();
  }, [loginState]);

  return (
    <section className="meals">
      <form>
        <label htmlFor="EmailInput">
          Email
          <input
            type="email"
            name="EmailInput"
            id="EmailInput"
            value={ loginState.EmailInput }
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
            value={ loginState.PasswordInput }
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
