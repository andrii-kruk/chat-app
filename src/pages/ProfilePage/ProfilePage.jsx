import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/auth/authOperations';

const HalfPage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h1>Profile page</h1>
      <button type="button" onClick={() => dispatch(signOut())}>
        Sign Out
      </button>
    </>
  );
};

export default HalfPage;
