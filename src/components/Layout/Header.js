import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import productsImage from '../../assets/fashion-store.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Mabel Fashion Store</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={productsImage} alt='A fashion store!' />
      </div>
    </Fragment>
  );
};

export default Header;
