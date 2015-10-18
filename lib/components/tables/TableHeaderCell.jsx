// Table Header Cell Component
// args:
//   name: String displayed as header

TableHeaderCell = React.createClass({

  render() {
    return (
      <td>
        { this.props.name }
      </td>
    )
  }
  
});
