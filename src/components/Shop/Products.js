import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const DUMMY_ITEMS = [
    {
      id : '1', 
      price : 6,
      title : 'First Book', 
      description : 'my first book lol 1',
    },
    {
      id : '2', 
      price : 4,
      title : 'Second Book', 
      description : 'my seoncd book lol 2',
    }
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      { DUMMY_ITEMS.map(item => {
        return (
          <ProductItem
          title= {item.title}
          price={item.price}
          description={item.description}
          key = {item.id}
          id ={item.id}
        />
        )
      })}
        
      </ul>
    </section>
  );
};

export default Products;
