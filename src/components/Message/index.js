import React from 'react';
import classNames from 'classnames';

const Message = ({ message, showError }) => (
  <div className={classNames({ message, showError })}>{message}</div>
);

Message.propTypes = {
  message: React.PropTypes.string,
  showError: React.PropTypes.bool,
};

export default Message;
