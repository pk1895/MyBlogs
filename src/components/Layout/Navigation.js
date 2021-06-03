import classes from './Navigation.module.css';
import { Link, useHistory } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
// import { authActions } from '../../store/auth-slice';

const MainHeader = (props) => {
  const history = useHistory();
//   const dispatch = useDispatch();
  const isLoggedIn = true;

  const [isLogout, setIsLogout] = useState(false);
  const [cartDropdown, setCartDropdown] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);

  const onHome = () => {
    history.push('/');
  }

  const onConfirmHandler = () => {
    setIsLogout(false);
    // localStorage.removeItem('token');
    // dispatch(authActions.setUserData({
    //   userId: '',
    //   isLoggedIn: false
    // }));
    // history.push('/login');
  }

  const onCancelHandler = () => {
    setIsLogout(false);
  }

  const onLogOut = () => {
    setIsLogout(true);
  }

  const onCartDropDown = () => {
    setCartDropdown(!cartDropdown);
  }

  const onCheckout = () => {
    setCartDropdown(false);
    setIsCheckout(true);
  }

  const onCancelCheckout = () => {
    setIsCheckout(false);
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
          {/* {isLogout && <Logout onCancel={onCancelHandler} onConfirm={onConfirmHandler} />}
          {isLoggedIn && cartDropdown && <CartDropdown onGoToCheckout={onCheckout} />}
          {isCheckout && <Checkout onCancel={onCancelCheckout} />} */}
        </nav>
      </header>
    </div>
  );
};

export default MainHeader;
