import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors.js';
import { logoutThunk } from '../../redux/auth/operations.js';
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      {user.name && <h4 className={s.email}>{user.email}</h4>}
      <nav className={s.nav}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink className={buildLinkClass} to="/register">
              Ragister
            </NavLink>
            <NavLink className={buildLinkClass} to="/login">
              Log In
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <button className={s.button} onClick={() => dispatch(logoutThunk())}>
            Log Out
          </button>
        )}
      </nav>
    </div>
  );
};

export default AppBar;
