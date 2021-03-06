import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import makeStyles from '@material-ui/Styles/makeStyles';
import * as React from 'react';

const useStyles = makeStyles({
  code: {
    background: '#F8F8FF',
    fontSize: 14,
  },
  root: {
    overflowX: 'auto',
    width: '100%',
  },
}));

export default () => {
  const classes = useStyles({});

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Type</TableCell>
          <TableCell>Default</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Options</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow hover={true}>
          <TableCell>
            <code className={classes.code}>Name</code>
          </TableCell>
          <TableCell>
            <code className={classes.code}>string</code>
          </TableCell>
          <TableCell>NONE</TableCell>
          <TableCell>
            This is required and represents a property of the entity which we
            are binding
          </TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow hover={true}>
          <TableCell>
            <code className={classes.code}>Aggregate</code>
          </TableCell>
          <TableCell>
            <code className={classes.code}>AggregateFunctions</code>
          </TableCell>
          <TableCell>
            <code className={classes.code}>NONE</code>
          </TableCell>
          <TableCell>
            The aggregation function that will be applied to this column
          </TableCell>
          <TableCell>
            <code className={classes.code}>NONE</code>,
            <code className={classes.code}>SUM</code>,
            <code className={classes.code}>AVERAGE</code>,
            <br />
            <code className={classes.code}>COUNT</code>,
            <code className={classes.code}>DISTINCT_COUNT</code>,
            <br />
            <code className={classes.code}>MAX</code>,
            <code className={classes.code}>MIN</code>
          </TableCell>
        </TableRow>
        <TableRow hover={true}>
          <TableCell>
            <code className={classes.code}>DataType</code>
          </TableCell>
          <TableCell>
            <code className={classes.code}>ColumnDataType</code>
          </TableCell>
          <TableCell>
            <code className={classes.code}>string</code>
          </TableCell>
          <TableCell>The column type</TableCell>
          <TableCell>
            <code className={classes.code}>STRING</code>,
            <code className={classes.code}>NUMERIC</code>,
            <code className={classes.code}>BOOLEAN</code>,
            <br />
            <code className={classes.code}>DATE</code>,
            <code className={classes.code}>DATE_TIME</code>,
            <code className={classes.code}>DATE_TIME_UTC</code>
          </TableCell>
        </TableRow>
        <TableRow hover={true}>
          <TableCell>
            <code className={classes.code}>Filterable</code>
          </TableCell>
          <TableCell>
            <code className={classes.code}>bool</code>
          </TableCell>
          <TableCell>
            <code className={classes.code}>false</code>
          </TableCell>
          <TableCell>Enables Filterable</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow hover={true}>
          <TableCell>
            <code className={classes.code}>IsKey</code>
          </TableCell>
          <TableCell>
            <code className={classes.code}>bool</code>
          </TableCell>
          <TableCell>
            <code className={classes.code}>false</code>
          </TableCell>
          <TableCell>Defines if a column is an identifier or not</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow hover={true}>
          <TableCell>
            <code className={classes.code}>Label</code>
          </TableCell>
          <TableCell>
            <code className={classes.code}>string</code>
          </TableCell>
          <TableCell>The name of the column</TableCell>
          <TableCell>Column label that will be shown</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow hover={true}>
          <TableCell>
            <code className={classes.code}>Searchable</code>
          </TableCell>
          <TableCell>
            <code className={classes.code}>bool</code>
          </TableCell>
          <TableCell>
            <code className={classes.code}>true</code>
          </TableCell>
          <TableCell>
            Indicates that a column can be used to search upon
          </TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow hover={true}>
          <TableCell>
            <code className={classes.code}>SortDirection</code>
          </TableCell>
          <TableCell>
            <code className={classes.code}>ColumnSortDirection</code>
          </TableCell>
          <TableCell>
            <code className={classes.code}>NONE</code>
          </TableCell>
          <TableCell>-</TableCell>
          <TableCell>
            <code className={classes.code}>NONE</code>,
            <code className={classes.code}>ASCENDING</code>,
            <code className={classes.code}>DESCENDING</code>
          </TableCell>
        </TableRow>
        <TableRow hover={true}>
          <TableCell>
            <code className={classes.code}>SortOrder</code>
          </TableCell>
          <TableCell>
            <code className={classes.code}>number</code>
          </TableCell>
          <TableCell>
            <code className={classes.code}>-1</code>
          </TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow hover={true}>
          <TableCell>
            <code className={classes.code}>Sortable</code>
          </TableCell>
          <TableCell>
            <code className={classes.code}>bool</code>
          </TableCell>
          <TableCell>
            <code className={classes.code}>false</code>
          </TableCell>
          <TableCell>Determines if a column can be sorted</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow hover={true}>
          <TableCell>
            <code className={classes.code}>Visible</code>
          </TableCell>
          <TableCell>
            <code className={classes.code}>bool</code>
          </TableCell>
          <TableCell>
            <code className={classes.code}>true</code>
          </TableCell>
          <TableCell>Specifies if a column should be shown</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
