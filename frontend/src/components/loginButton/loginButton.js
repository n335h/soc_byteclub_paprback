import { useAuth0 } from '@auth0/auth0-react';
import './login.css';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  console.log(isAuthenticated); // Moved outside the return statement

  return (
    !isAuthenticated && (
      <button className="logIN" onClick={() => loginWithRedirect()}>
        Log In
      </button>
    )
  );
};

export default LoginButton;
