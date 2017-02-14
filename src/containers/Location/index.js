import React, { Component } from 'react';
import styles from './styles.css';
import classnames from 'classnames';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import TextInput from '../../components/TextInput';
import BarList from '../../components/BarList';
import { BackIcon, LocationIcon } from '../../components/Icons';
import { debounce } from '../../common/utils';

import { selectBar, clearBars, fetchBarsByPattern, 
         fetchBarsByLocation, fetchProducts, fetchHistory } from '../../actions';
import barsData from '../../../barsData';

export class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };
    this.handleLocationSearch = this.handleLocationSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemSelect = this.handleItemSelect.bind(this);
    this.debouncedFetchByPattern = debounce(this.debouncedFetchByPattern, 200);
  }

  componentDidMount() {
    this.props.dispatch(clearBars());
  }

  handleLocationSearch() {
    const location = {
      lat: 55.9444068,
      long: -3.1968645
    };
    this.props.dispatch(fetchBarsByLocation(location.lat, location.long));
  }

  debouncedFetchByPattern(text) {
    this.props.dispatch(fetchBarsByPattern(text));
  }

  handleInputChange(text) {
    if (text.length) {
      this.debouncedFetchByPattern(text);
    } else {
      this.props.dispatch(clearBars());
    }
    this.setState({
      inputText: text
    });
  }

  handleItemSelect(item) {
    this.props.dispatch(selectBar(item));
    this.props.dispatch(fetchProducts(item.id));
    this.props.dispatch(fetchHistory(item.id));

    if (this.props.location.action !== 'REPLACE' &&
        this.props.location.action !== 'POP') {
      browserHistory.goBack();
    } else {
      browserHistory.replace('/products');
    }
  }

  render() {
    return (
      <div className={styles.Location}>
        <div className={styles.Header}>
          <div onClick={browserHistory.goBack}><BackIcon /></div>
          <TextInput
            placeholder='Enter a bar name'
            autoFocus={true}
            onChange={this.handleInputChange} />
        </div>
        { !this.state.inputText && <div className={classnames(styles.Header, styles.UseLocation)} onClick={this.handleLocationSearch}>
          <LocationIcon />
          <div>Use my location</div>
        </div>}
        <div className={styles.ListWrapper}>
          <BarList items={this.props.matchedItems} onSelect={this.handleItemSelect}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    matchedItems: state.reducer.bars
  }
}

export default connect(mapStateToProps)(Location);