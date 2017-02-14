import React, { Component } from 'react';
import styles from './styles.css';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { addProduct  } from '../../actions';

import ProductList from '../../components/ProductList';
import NavBar from '../../components/NavBar';

export class Products extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(productId) {
    const product = this.props.products.find(item => item.id === productId);
    this.props.dispatch(addProduct(product));
  }

  getOrderCount() {
    return this.props.roundItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  }

  render() {
    return (
      <div className={styles.Products}>
        {this.props.products.length === 0 && <div className={styles.EmptyLabel}>Select a location to begin</div>}
        <ProductList className={styles.ProductList} products={this.props.products} onAdd={this.handleAdd} />
        <NavBar productCount={this.getOrderCount()} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.reducer.products,
    roundItems: state.reducer.roundItems
  }
}

export default connect(mapStateToProps)(Products);