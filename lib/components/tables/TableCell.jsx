
// TableCell arguments: 
// value: value of the cell

TableCell = React.createClass({
  render() {
    return (
      <td>
        { this.props.value }
      </td>
    )
  }
});
