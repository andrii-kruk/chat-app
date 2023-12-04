import { useState } from 'react';
import { Link } from 'react-router-dom';

const SecondPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h1>RegisterPage</h1>
      <form>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
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

        <button type="submit">Sign Up</button>
        <p>
          Are you already have an account? <Link to="/login">Sign In.</Link>
        </p>
      </form>
    </>
  );
};

export default SecondPage;
