import React from 'react';
import classNames from 'classnames';

const Message = ({ message, showMessage }) => (
  <div className={classNames({ message, showMessage })}>{message}</div>
);

Message.propTypes = {
  message: React.PropTypes.string,
  showMessage: React.PropTypes.bool,
};

export default Message;
