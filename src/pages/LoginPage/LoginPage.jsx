import { useState } from 'react';
import { Link } from 'react-router-dom';

const FirstPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h1>LoginPage</h1>
      <form>
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
