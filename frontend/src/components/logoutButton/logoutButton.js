import { useAuth0 } from '@auth0/auth0-react';
import './logout.css';

const LogOutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button className="logOut" onClick={() => logout()}>
        Log Out
      </button>
    )
  );
};

export default LogOutButton;
