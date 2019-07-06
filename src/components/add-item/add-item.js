import React, {Component} from 'react';

import './add-item.css';

export default class AddItem extends Component {
  render() {
    return (
      <div className="float-right add-item">
        <button type="button"
                className="btn btn-outline-info"
                onClick={() => this.props.onItemAdded('Hello')}>Add Item</button>
      </div>
    );
  }
}