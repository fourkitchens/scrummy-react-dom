import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Message = ({ message, showMessage }) => (
  <div className={classNames({ message: true, showMessage })}>{message}</div>
);

Message.propTypes = {
  message: PropTypes.string,
  showMessage: PropTypes.bool
};

export default Message;
