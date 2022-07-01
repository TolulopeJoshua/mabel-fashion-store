import { useContext } from 'react';

import ItemForm from './ItemForm';
import classes from './Item.module.css';
import CartContext from '../../../store/cart-context';

const Item = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.product}>
      <div className={classes.item}>
        <div>
          <img height='80rem' src={props.image} alt='A fashion product!' />
        </div>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
      </div>
      <div>
        <ItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Item;
