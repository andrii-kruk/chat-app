import { Link } from 'react-router-dom';

const SecondPage = () => {
  return (
    <div>
      <div>
        <h1>Second Page</h1>
        <Link to="/second/5">Half</Link>
      </div>
    </div>
  );
};

export default SecondPage;
