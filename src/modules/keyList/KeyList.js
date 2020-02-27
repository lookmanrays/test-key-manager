import React from 'react';
import PropTypes from 'prop-types';
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell, TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import moment from 'moment';

const tableHeads = {
  name: {
    title: 'Name',
    cellWidth: 350,
  },
  mask: {
    title: 'Key',
    cellWidth: 200,
  },
  roles: {
    title: 'Roles',
    cellWidth: 200,
  },
  created_at: {
    title: 'Created at',
    cellWidth: 200,
  },
  fetchError: {
    title: null,
  },
};

class KeyList extends React.Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string,
      data: PropTypes.shape({
        name: PropTypes.string,
        mask: PropTypes.string,
        created_at: PropTypes.number,
        roles: PropTypes.arrayOf(PropTypes.string),
      })
    })).isRequired,
    loading: PropTypes.bool.isRequired,
    searchPhrase: PropTypes.string.isRequired,
  };

  state = {
    tableHeadsList: Object.keys(tableHeads),
  };

  renderTableItemRows = (items, searchPhrase) => {
    const { tableHeadsList } = this.state;
    const filteredItems = items.filter((i) => i.data.name.includes(searchPhrase));

    return (
      <>
        {filteredItems.map((item) => (
          <TableRow key={item._id} hover>
            {tableHeadsList.map((i) => this.renderTableCell(item.data[i], i))}
            <TableCell />
          </TableRow>
        ))}
      </>
    );
  };

  renderEmptyListRow = () => {
    const { tableHeadsList } = this.state;

    return (
      <TableRow key={'empty-list-table-row'}>
        <TableCell colSpan={tableHeadsList.length + 1} style={{ textAlign: 'center' }}>
          <Typography>
            The key list is empty. Create a new one or change the search phrase.
          </Typography>
        </TableCell>
      </TableRow>
    );
  };

  renderTableHead = (th) => (
    <TableCell
      key={`th-${th}`}
      variant="head"
      style={{ width: tableHeads[th].cellWidth }}
    >{tableHeads[th].title}</TableCell>
  );

  renderTableCell = (item, key) => {
    switch (key) {
      case 'created_at': {
        return (
          <TableCell key={`${key}-${item}`}>
            {moment(item).format('YYYY/MM/DD h:mm:ss a')}
          </TableCell>
        );
      }
      default: {
        return (
          <TableCell key={`${key}-${item}`}>{item}</TableCell>
        );
      }
    }
  };

  render() {
    const { list, loading, searchPhrase } = this.props;
    const { tableHeadsList } = this.state;

    return (
      <TableContainer style={{ padding: '20px 0', textAlign: 'center' }}>
        {loading && <CircularProgress />}
        {!loading && (
            <Table>
              <TableHead>
                <TableRow>
                  {tableHeadsList.map(this.renderTableHead)}
                  <TableCell key="empty-table-head-for-actions-cell" />
                </TableRow>
              </TableHead>
              <TableBody>
                {list.length > 0
                  ? this.renderTableItemRows(list, searchPhrase)
                  : this.renderEmptyListRow()
                }
              </TableBody>
            </Table>
        )}
      </TableContainer>
    )
  }
}

export default KeyList;
