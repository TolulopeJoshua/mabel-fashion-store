import classes from './ProductsSummary.module.css';

const ProductsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Fashion Products for You</h2>
      <p>
        Choose your favorite fashion product from our broad selection of available outfits
        and have blissful moments in your outings.
      </p>
      <p>
        All our fashion products are made with high-quality materials, affordable and
        of course by top brands!
      </p>
    </section>
  );
};

export default ProductsSummary;
