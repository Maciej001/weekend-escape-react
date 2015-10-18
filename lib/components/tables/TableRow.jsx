// Table Row Component
// args: 
//   row: array[value, value, ...]

TableRow = React.createClass({

  render() {
    let rowCells = this.props.row.map( (cell) => {
      return (
        <TableCell value={ cell } />
      )
    });


    return (
      <tr>
        { rowCells }
      </tr>
    )
  }
  
});
