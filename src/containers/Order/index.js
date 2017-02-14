import React, { Component } from 'react';
import styles from './styles.css';
import { connect } from 'react-redux';
import { addProduct, removeProduct, clearOrder, postRound } from '../../actions';

import ProductList from '../../components/ProductList';
import OrderFooter from '../../components/OrderFooter';
import NavBar from '../../components/NavBar';

export class Order extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
    this.getOrderTotal = this.getOrderTotal.bind(this);
  }

  handleAdd(productId) {
    const updatedProduct = this.props.roundItems.find( item => item.id === productId);
    this.props.dispatch(addProduct(updatedProduct));
  }

  handleRemove(productId) {
    this.props.dispatch(removeProduct(productId));
  }

  handleOrder() {
    if (this.props.roundItems.length > 0) {
      const roundData = {
        bar_id: this.props.currentBar.id,
        ordered_at: Date.now(),
        total: this.props.roundItems.reduce((acc, item) => {
          return acc + item.price * item.quantity
        }, 0)
      };
      this.props.dispatch(postRound(roundData));
      this.props.dispatch(clearOrder());
    }
  }

  getOrderTotal() {
    return this.props.roundItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }

  getOrderCount() {
    return this.props.roundItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  }

  render() {
    return (
      <div className={styles.Order}>
        {this.props.roundItems.length === 0 && <div className={styles.EmptyLabel}>Round list is empty</div>}
        <ProductList products={this.props.roundItems} onAdd={this.handleAdd} onRemove={this.handleRemove} />
        <OrderFooter total={this.getOrderTotal()} onOrder={this.handleOrder} />
        <NavBar productCount={this.getOrderCount()} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentBar: state.reducer.currentBar,
    roundItems: state.reducer.roundItems
  }
}

export default connect(mapStateToProps)(Order);