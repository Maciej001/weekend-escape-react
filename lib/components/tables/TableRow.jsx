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
