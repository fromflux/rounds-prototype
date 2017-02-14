import React, { Component } from 'react';
import styles from './styles.css';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(evt) {
    this.props.onChange(evt.target.value);
  }

  render() {
    return (
      <input 
        className={styles.TextInput}
        type="text" 
        autoFocus={this.props.autoFocus ? 'true' : 'false'} 
        placeholder={this.props.placeholder} 
        onChange={this.onChange}
      />
    );
  }
}

TextInput.propTypes = {
  autoFocus: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func
};

export default TextInput;