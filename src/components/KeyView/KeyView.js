import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const KeyView = (props) => {
  const { name, token } = props;

  return (
    <div>
      <Typography style={{ marginBottom: 10 }}>Name: {name}</Typography>
      <Typography style={{ marginBottom: 10 }}>Key: <strong>{token}</strong></Typography>
      <Typography>
        <strong>This key will show only now.</strong>
      </Typography>
      <Typography style={{ marginBottom: 10 }}>
        Please store this key somewhere safe.We will not be able to restore or regenerate this key.
      </Typography>
    </div>
  );
};

KeyView.propTypes = {
  name: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

export default KeyView;
