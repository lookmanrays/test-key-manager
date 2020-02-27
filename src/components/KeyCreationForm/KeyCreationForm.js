import React from 'react';
import PropTypes from 'prop-types';
import {
  Checkbox,
  FormControl,
  FormGroup,
  FormLabel,
  Grid,
  TextField,
  FormControlLabel,
} from '@material-ui/core';

const rolesList = ['user'];

const KeyCreationForm = (props) => {
  const { fields, onChange, onChangeRole } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          id="new-key-name"
          label="Name*"
          type="text"
          name="name"
          value={fields.name}
          fullWidth
          size="small"
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={6}>
        <FormControl>
          <FormLabel>Roles*</FormLabel>
          <FormGroup>
            {rolesList.map((role) => (
              <FormControlLabel
                key={`label-${role}`}
                control={
                  <Checkbox
                    checked={fields.roles.includes(role)}
                    onChange={onChangeRole(role)}
                    value={role}
                    disabled={role === 'user'}
                  />
                }
                label={role}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};

KeyCreationForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onChangeRole: PropTypes.func.isRequired,
};

export default KeyCreationForm;
