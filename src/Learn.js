import React from 'react';
import { Table, Col, FormControl } from 'react-bootstrap';

const TableRow = ({ values }) => {
  return (
    <tr>
      {values.map((value, index) => (
        <Col key={index}>
          <FormControl type="text" value={value} />
        </Col>
      ))}
    </tr>
  );
};

const MyTable = () => {
  const values = ['Value 1', 'Value 2', 'Value 3'];

  return (
    <Table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
      </thead>
      <tbody>
        <TableRow values={values} />
      </tbody>
    </Table>
  );
};
export default MyTable;