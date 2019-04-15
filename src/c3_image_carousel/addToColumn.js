import React from 'react';
import { modifyData } from './utils';


// Create (or import) our react component
export default class AddToColumn extends React.Component {
  constructor () {
    // So we have access to 'this'
    super()

    // Set initial state to a loading or no data message
    this.state = {
      data: null,
      queryResponse: null
    }
  }

  // render our data
  render() {
    // const { column } = this.props;

    if (!this.state.data) {
      return (
        <div>No Data</div>
      );
    }

    // Grab the first cell of the data
    // let firstRow = this.state.data[0];
    // let firstCellValue = firstRow[queryResponse.fields.dimensions[0].name].value;

    // Get the input array:
    const firstColData = this.state.data.slice(0, 5).map((row) => {
      const val = row[this.state.queryResponse.fields.dimensions[0].name].value;
      return val ? parseFloat(val.split(',').join('')) : null;
    });

    modifyData(firstColData);

    if (firstColData.length === 0) {
      return (
        <div>No Data</div>
      );
    }

    const tableRows = firstColData.map((val, idx) => {
      // console.log('idx', idx);
      // console.log('val', val);
      // console.log('val.toString()', val ? val.toString() : null);

      return (
        <div>{val} : {val+1}</div>
        // <tr key={idx}>
        //   <td></td>
        //   <td>{val ? (val+1).toString() : null}</td>
        // </tr>
      )
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Org Column</th>
            <th>Org Column + 1</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    );
  }
}
