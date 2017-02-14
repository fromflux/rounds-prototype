import React, { Component } from 'react';
import styles from './styles.css';

import ProductItem from '../ProductItem';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className={styles.ProductList}>
        {this.props.products.map((product) => {
          return (
            <li className={styles.ListItem} key={product.id}>
              <ProductItem
                id={product.id}
                name={product.name}
                imgUrl={product.image_url}
                price={product.price}
                quantity={product.quantity}
                onAdd={this.props.onAdd}
                onRemove={this.props.onRemove} />
            </li>
          );
        })}
      </ul>
    );
  }
}

ProductList.propTypes = {
  products: React.PropTypes.array.isRequired,
  onAdd: React.PropTypes.func,
  onRemove: React.PropTypes.func,
};
