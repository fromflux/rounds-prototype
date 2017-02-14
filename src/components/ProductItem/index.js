import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './styles.css';
import { currencyGBP } from '../../common/formats';
import { PlusIcon, ErrorIcon } from '../../components/Icons';

export default class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleAddClick() {
    this.props.onAdd(this.props.id);
  }

  handleRemoveClick() {
    this.props.onRemove(this.props.id);
  }
  
  render() {
    const { id, name, imgUrl, price, quantity } = this.props;
    return (
      <div className={styles.ProductItem}>
        <img className={styles.Image} src={imgUrl}/>
        {quantity != null && quantity > 0 && <div className={styles.Quantity}>{quantity}</div>}
        <div className={styles.Info}>
          <div className={styles.Name}>{name}</div>
          <div className={styles.Price}>{currencyGBP.format(price)}</div>
        </div>
        {this.props.onRemove && <div className={styles.RemoveBtn} onClick={this.handleRemoveClick}><ErrorIcon /></div>}
        {this.props.onAdd && <div className={styles.AddBtn} onClick={this.handleAddClick}><PlusIcon /></div>}
      </div>
    );
  }
}

ProductItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  imgUrl: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  quantity: React.PropTypes.number,
  onRemove: React.PropTypes.func,
  onAdd: React.PropTypes.func
};
