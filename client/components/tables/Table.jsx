// Table Component
// args: 
//   title: Chart's title
//   headers: array of headers objects: [ { name: "...", dataName: "..."}, {...}]
//   rows: array of rows, each row is and array containing values

Table = React.createClass({
  
  renderHeader() {

    let headerNodes = this.props.headers.map( (header) => {
      return (
        <TableHeaderCell name={ header.name } key={ header.dataName } />
      );
    });

    return (
      <tr className="active">
        { headerNodes }
      </tr>
    )
  },

  renderRows() {
    let tableRows = this.props.rows.map( (row) => {
      return (
        <TableRow row={ row } key={ row[0] }/>
      )
    });

    return (
      { tableRows }
    )
  },

  render() {
    return (
      <div>
        <h1>{ this.props.title }</h1>

        <table className="table">
          <thead>
            { this.renderHeader() }
          </thead>
          
          <tbody>
            { this.renderRows() }
          </tbody>
        </table>
      </div>

    )
  }
  
});
