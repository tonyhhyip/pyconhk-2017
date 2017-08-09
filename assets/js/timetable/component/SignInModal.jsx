import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import classNames from 'classnames';
import { signOut } from '../../auth';

export default class SigninModal extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      displayName: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    user: null,
  };

  componentDidMount() {
    $('#signin-modal').modal();
  }

  // eslint-disable-next-line class-methods-use-this
  handleButtonClick(auth) {
    return auth ? signOut : () => { $('#signin-modal').modal('open'); };
  }

  render() {
    const auth = this.props.user !== null;
    const button = `Sign ${auth ? 'Out' : 'In'}`;
    const className = classNames('waves-effect', 'waves-teal');
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    return (<a data-role="auth" className={className} onClick={() => this.handleButtonClick(auth)}>{button}</a>);
  }
}
