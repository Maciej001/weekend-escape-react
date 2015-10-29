{/* Bar Time Chart Component
    props: chartId - div id to which chart will be attached <div id="myChart"></div> 
           data - object -> consists of two arrays 'time' containing dates and corressponding 'series' array
                            containing our data
           height - height in px of the chart
           width  - width in px of the chart
    eg. 
        <BarTimeChart 
          chartId ={"temp-chart"}
          data={ 
                  { 
                    time: _.pluck(this.data.forecast.list, 'timeDate'), 
                    series: _.pluck(this.data.forecast.list, 'temp') 
                  } 
                } 
          width={600} 
          height={200}
        />
*/}

BarTimeChart = React.createClass({
  propTypes: {
    chartId:  React.PropTypes.string.isRequired,
    data:     React.PropTypes.object.isRequired,
    height:   React.PropTypes.number.isRequired,
    width:    React.PropTypes.number.isRequired
  },

  componentDidMount() {
  
    let chartHeight = this.props.height,
        chartWidth  = this.props.width,
        margin =      { top: 10, right: 10, bottom: 0, left: 10 },
        height =      chartHeight - margin.top - margin.bottom,
        width  =      chartWidth  - margin.left - margin.right,

        // Find highest value in data
        seriesMax =   d3.max(this.props.data.series); 

    let svg = d3.select("#" + this.props.chartId).append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    let yScale = d3.scale.linear()
        .domain([0, seriesMax])
        .range([0, height]);

    let xScale = d3.scale.ordinal()
        .domain(this.props.data.series) 
        .rangeBands([0, width], 0.2, 0);

    svg.selectAll('rect')  
      .data(this.props.data.series)
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
      })
      .on('mouseover', function (d) {
        d3.select(this).classed('active', true);
      })
      .on('mouseout', function(d){
        d3.select(this).classed('active', false);
      })

  },

  render() {
    return (
      React.createElement("div", {id: this.props.chartId})
    )
  }
});
  
  