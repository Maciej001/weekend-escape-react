// Table Row Component
// args: 
//   row: array[value, value, ...]

TableRow = React.createClass({

  render() {
    let rowCells = this.props.row.map( (cell) => {
      return (
        <TableCell value={ cell } key={ this.props.key } />
      )
    });


    return (
      <tr>
        { rowCells }
      </tr>
    )
  }
  
});
