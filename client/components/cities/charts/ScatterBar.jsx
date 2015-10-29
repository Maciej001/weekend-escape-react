ScatterBar = React.createClass({
  propTypes: {
    forecast: React.PropTypes.array.isRequired,
    height:   React.PropTypes.number.isRequired,
    width:    React.PropTypes.number.isRequired
  },

  getHeaders() {
    return [
      {
        name: "Date",
        dataName: "timeDate"
      },
      {
        name: "Temperature",
        dataName: "temp"
      },
      {
        name: "Temp min",
        dataName: "temp_min"
      },
      {
        name: "Temp max",
        dataName: "temp_max"
      },
      {
        name: "Pressure",
        dataName: "pressure"
      },
      {
        name: "Humidity",
        dataName: "humidity"
      }
    ]
  },

  getRows(){
  },

  componentDidMount() {

    let forecast = {
      timeDate:   _.pluck(this.props.forecast, 'timeDate'),
      temp:       _.pluck(this.props.forecast, 'temp'),
      temp_min:   _.pluck(this.props.forecast, 'temp_min'),
      temp_max:   _.pluck(this.props.forecast, 'temp_max'),
      pressure:   _.pluck(this.props.forecast, 'pressure'),
      humidity:   _.pluck(this.props.forecast, 'humidity')
    };

    let chartHeight = this.props.height,
        chartWidth  = this.props.width,
        margin =      { top: 10, right: 10, bottom: 0, left: 10 },
        height =      chartHeight - margin.top - margin.bottom,
        width  =      chartWidth  - margin.left - margin.right,
        tempMax =     d3.max(forecast.temp);

    let svg = d3.select('#forecast-chart').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    let yScale = d3.scale.linear()
        .domain([0, tempMax])
        .range([0, height]);

    let xScale = d3.scale.ordinal()
        .domain(forecast.temp) 
        .rangeBands([0, width], 0.2, 0);

    svg.selectAll('rect')  
      .data(forecast.temp)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d, i) => {
        return xScale(d);
      })
      .attr('y', (d) => {
        return height - yScale(d);
      })
      .attr('width', xScale.rangeBand())
      .attr('height', (d) => {
        return yScale(d);
      });
  },

  render() {

    // let svg = d3.select('#forecast-chart').append('svg')
    //     .attr('width', width + margin.left + margin.right)
    //     .attr('height', height + margin.top + margin.bottom)
    //     .append('g')
    //     .attr('transform', 'transla te(' + margin.left + ',' + margin.top + ')' );



    // svg.selectAll('rect')
    //   .data(forecast.temp)
    //   .enter()
    //   .append('rect')
    //   .attr('x',(data) => { xScale(data) })
    //   .attr('y', (data) => { height - yScale(data) })
    //   .attr('class', 'bar')
    //   .attr('width', xScale.rangeBands())
    //   .attr('height', yScale)
    //   .style('fill', '$yellow')

    return (
      <div id="forecast-chart"></div>
    )
  }
});
  
  