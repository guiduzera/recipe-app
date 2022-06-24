import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './Login.css';
import { saveEmailToLocalStorage, saveMealsTokenToLocalStorage,
  saveCocktailsTokenToLocalStorage } from '../../helpers/localStorage';

function Login() {
  const history = useHistory();
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

  const handleButtonSubmit = (event) => {
    event.preventDefault();

    saveEmailToLocalStorage(loginState.EmailInput);
    saveMealsTokenToLocalStorage(1);
    saveCocktailsTokenToLocalStorage(1);

    history.push('/foods');
  };

  useEffect(() => {
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
  }, [loginState]);

  return (
    <Form className="vh-100 FormLoginPage">
      <form onSubmit={ handleButtonSubmit } className="d-flex flex-column p-4">
        <Form.Label htmlFor="EmailInput">
          Email
          <Form.Control
            type="email"
            name="EmailInput"
            id="EmailInput"
            value={ loginState.EmailInput }
            onChange={ handleInputChange }
            data-testid="email-input"
          />
        </Form.Label>
        <Form.Label htmlFor="PasswordInput">
          Password
          <Form.Control
            type="password"
            name="PasswordInput"
            id="PasswordInput"
            value={ loginState.PasswordInput }
            onChange={ handleInputChange }
            data-testid="password-input"
          />
        </Form.Label>
        <Button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ disable }
        >
          Login
        </Button>
      </form>
    </Form>
  );
}

export default Login;
