// Table Cell Component 
// args: 
//   value: value to be displayed

TableCell = React.createClass({
  render() {
    return (
      <td>
        { this.props.value }
      </td>
    )
  }
});
