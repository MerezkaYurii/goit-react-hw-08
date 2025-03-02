import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AuthNav from '../AuthNav/AuthNav';

import clsx from 'clsx';
import s from './Navigation.module.css';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

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
        {!isLoggedIn && <AuthNav />}
        {isLoggedIn && <UserMenu />}
      </nav>
    </div>
  );
};

export default Navigation;
