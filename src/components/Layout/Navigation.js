import classes from './Navigation.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import Logout from '../../Pages/Authentication/Logout';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';

const MainHeader = (props) => {

  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = true;
  const [isLogout, setIsLogout] = useState(false);

  const onHome = () => {
    history.push('/dashboard');
  }

  const onConfirmHandler = () => {
    setIsLogout(false);
    dispatch(authActions.setUserData({
      userId: '',
      isLoggedIn: false
    }));
    history.replace('/login');
  }

  const onCancelHandler = () => {
    setIsLogout(false);
  }

  const onLogOut = () => {
    setIsLogout(true);
  }

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo} onClick={onHome}>My Blogs</div>
        <nav className={classes.nav}>
          <ul>
            <li>
              {isLoggedIn && <Link to='/new-post'>New Post</Link>}
            </li>
            <li>
              {isLoggedIn && <Link to='/sections'>Sections</Link>}
            </li>
            {isLoggedIn && <li>
              <button className={classes.logoutbutton} onClick={onLogOut} >Log Out</button>
            </li>}
            {/* {isLoggedIn && <HeaderCartButton onHandle={onCartDropDown} />} */}
          </ul>
          {isLogout && <Logout onCancel={onCancelHandler} onConfirm={onConfirmHandler} />}
          {/* {isLoggedIn && cartDropdown && <CartDropdown onGoToCheckout={onCheckout} />}
          {isCheckout && <Checkout onCancel={onCancelCheckout} />} */}
        </nav>
      </header>
    </div>
  );
};

export default MainHeader;
