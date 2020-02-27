import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  CircularProgress,
  Dialog, DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import KeyCreationForm from '../../components/KeyCreationForm/KeyCreationForm';
import KeyView from '../../components/KeyView/KeyView';
import config from '../../config';

class KeyCreationModal extends React.Component {
  static prpTypes = {
    onSuccessfulCreation: PropTypes.func.isRequired,
  };

  state = {
    isDialogOpen: false,
    loading: false,
    isKeyCreated: false,
    newKey: null,
    creationError: null,
    newKeyFields: {
      name: '',
      roles: ['user'],
    },
  };

  handleChangeFields = (e) => {
    const { name, value } = e.target;
    const { newKeyFields } = this.state;

    this.setState({
      newKeyFields: {
        ...newKeyFields,
        [name]: value,
      }
    })
  };

  handleToggleDialog = () => this.setState({
    isDialogOpen: true,
  });

  handleCloseDialog = () => this.setState({
    isDialogOpen: false,
    loading: false,
    isKeyCreated: false,
    newKey: null,
    creationError: null,
    newKeyFields: {
      name: '',
      roles: ['user'],
    },
  });

  handleSaveAndCloseDialog = () => {
    const { onSuccessfulCreation } = this.props;
    const { newKey } = this.state;

    onSuccessfulCreation(newKey);

    this.handleCloseDialog();
  };

  handleSubmitNewKey = () => {
    const { newKeyFields } = this.state;

    this.setState({
      creationError: null,
      loading: true,
    });
    fetch(config.apiUrl, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newKeyFields)
    })
      .then(res => res.json())
      .then(data => this.setState({
        loading: false,
        creationError: null,
        isKeyCreated: true,
        newKey: { ...data },
      }))
      .catch((err) => this.setState({
        loading: false,
        isKeyCreated: false,
        creationError: typeof err === 'string' ? err : err.message,
      }))
  };

  render() {
    const { loading, isDialogOpen, isKeyCreated, newKey, newKeyFields, creationError } = this.state;

    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleToggleDialog}>
          Create a new key
        </Button>
        <Dialog
          open={isDialogOpen}
          aria-labelledby="alert-dialog-title"
        >
          <DialogTitle id="alert-dialog-title">
            {isKeyCreated ? 'A new key successfully created' : 'Create a new key'}
          </DialogTitle>
          <DialogContent style={{ width: 550 }}>
            <div style={{ padding: '20px 34px', margin: '0 -24px', backgroundColor: '#dadada' }}>
              {loading && (
                <div style={{ textAlign: 'center' }}>
                  <CircularProgress />
                </div>
              )}
              {!loading && !isKeyCreated && (
                <KeyCreationForm
                  fields={newKeyFields}
                  onChange={this.handleChangeFields}
                  onChangeRole={() => {}}
                />
              )}
              {!loading && creationError && (
                <Alert severity="error">{creationError}</Alert>
              )}
              {!loading && isKeyCreated && (
                <KeyView name={newKey.data.name} token={newKey.data.token}/>
              )}
            </div>
          </DialogContent>
          <DialogActions>
            {!loading && isKeyCreated
              ? (
                <Button color="primary" autoFocus disabled={loading} onClick={this.handleSaveAndCloseDialog}>
                  Close
                </Button>
              )
              : (
                <>
                  <Button disabled={loading} onClick={this.handleCloseDialog}>
                    Cancel
                  </Button>
                  <Button
                    color="primary"
                    autoFocus
                    disabled={loading || !newKeyFields.name}
                    onClick={this.handleSubmitNewKey}
                  >
                    Create
                  </Button>
                </>
              )
            }
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default KeyCreationModal;
