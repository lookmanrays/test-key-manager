import React from 'react';
import {
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import KeyList from '../keyList/KeyList';
import KeyCreationModal from '../keyCreation/KeyCreationModal';
import config from '../../config';

class KeyManager extends React.Component {
  state = {
    keyList: [],
    searchPhrase: '',
    loadingKeys: false,
    fetchError: null,
  };

  componentDidMount() {
    this.handleFetchKeys();
  }

  handleChangeInput = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleFetchKeys = () => {
    this.setState({ loadingKeys: true });
    fetch(`${config.apiUrl}?hide_token=1`)
      .then((res) => res.json())
      .then(data => {
        this.setState({
          loadingKeys: false,
          keyList: [...data],
          fetchError: null,
        })
      })
      .catch((err) => this.setState({
        loadingKeys: false,
        fetchError: typeof err === 'string' ? err : err.message,
      }));
  };

  render() {
    const { searchPhrase, keyList, fetchError, loadingKeys } = this.state;

    return (
      <Container maxWidth="lg" style={{ padding: '20px 0', height: '100vh' }}>
        <header>
          <Typography variant="h4" style={{ marginBottom: '20px' }}>Key Manager</Typography>
          <Grid container>
            <Grid item xs={3}>
              <TextField
                id="standard-search"
                label="Search"
                type="search"
                name="searchPhrase"
                fullWidth
                size="small"
                onChange={this.handleChangeInput}
              />
            </Grid>
            <Grid item xs={9} style={{ textAlign: 'right' }}>
              <KeyCreationModal onSuccessfulCreation={this.handleFetchKeys} />
            </Grid>
          </Grid>
          {!fetchError && <KeyList searchPhrase={searchPhrase} list={keyList} loading={loadingKeys} />}
          {fetchError && (
            <Alert severity="error" style={{ marginTop: 20 }}>{fetchError}</Alert>
          )}
        </header>
      </Container>
    );
  }
}

export default KeyManager;
