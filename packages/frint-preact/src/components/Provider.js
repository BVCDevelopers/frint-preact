/* eslint-disable import/no-extraneous-dependencies */
import Preact, { h } from 'preact';
import PropTypes from 'prop-types';

export default class Provider extends Preact.Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired
  };

  static childContextTypes = {
    app: PropTypes.object.isRequired
  };

  getChildContext() {
    return {
      app: this.app
    };
  }

  constructor(props, context) {
    super(props, context);

    this.app = props.app;
  }

  render() {
    return Children.only(this.props.children);
  }
}
