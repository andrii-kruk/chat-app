import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signIn } from '../../redux/auth/authOperations';

const FirstPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(signIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1>LoginPage</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Sign In</button>
        <p>
          Are you don't have an account yet? <Link to="/register">Sign Up.</Link>
        </p>
      </form>
    </>
  );
};

export default FirstPage;
