import * as React from 'react';
import {Component} from 'react';

export default class Card extends Component {
  render() {
    return <div>Card-{this.props.label}</div>;
  }
}
