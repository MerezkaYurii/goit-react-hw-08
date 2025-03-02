import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const AuthNav = () => {
  return (
    <>
      <NavLink className={buildLinkClass} to="/register">
        Ragister
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Log In
      </NavLink>
    </>
  );
};

export default AuthNav;
