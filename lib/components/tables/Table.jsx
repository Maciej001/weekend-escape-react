// Arguments:
// title: Chart's title
// headers: array of headers objects: [ { name: "...", dataName: "..."}, {...}]

Table = React.createClass({
  
  renderHeader() {

    let headerNodes = this.props.headers.map( (header) => {
      return (
        <TableHeaderCell name={ header.name } />
      );
    });

    return (
      <tr>
        { headerNodes }
      </tr>
    )
  },

  renderRows() {
    let rows = this.props.rows.map( (row) => {
      return (
        <TableRow row={ row } />
      )
    });

    return (
      <tr>
        { rows }
      </tr>
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
