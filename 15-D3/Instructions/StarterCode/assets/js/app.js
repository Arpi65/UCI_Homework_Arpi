// Define SVG area dimensions
var svgWidth = 700;
var svgHeight = 600;

// Define the chart's margins as an object
var margin = {
  top: 10,
  right: 30,
  bottom: 30,
  left: 60
};

// Define dimensions of the chart area
var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;

// Select body, append SVG area to it, and set its dimensions
var svg = d3.select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);
  // Append a group area, then set its margins
var chartGroup = svg.append("g")
//.attr("transform", `translate(60, 60)`);
.attr("transform", `translate(${margin.left}, ${margin.top})`);


//Read data from data CSV file
d3.csv("./assets/data/data.csv").then(function(data) {
    console.log(data);


 // Configure a linear scale for the horizontal axis with a padding of 0.1 (10%)
var xLinearScale = d3.scaleLinear()
 .domain([d3.min(data, d=> d.age),d3.max(data, d => d.age)])
 .range([0, chartWidth]);

// Create a linear scale for the vertical axis.
var yLinearScale = d3.scaleLinear()
 .domain([12,30])
 .range([chartHeight, 0]);

console.log("A");

 var bottomAxis = d3.axisBottom(xLinearScale);
 var leftAxis = d3.axisLeft(yLinearScale);


 chartGroup.append("g")
    .call(leftAxis);

chartGroup.append("g")
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(bottomAxis);
//adding the dots
//transform element will place the x axisin the bottom, to start with 0 /otherwis would be upside down


chartGroup
.selectAll("dot")
.data(data)
.enter()
.append("circle")
.attr("cx", d => xLinearScale(d.age))
.attr("cy", d => yLinearScale(d.smokes))
.attr("r", 10)
.style("fill", "#69b3a2")


}).catch(function(error) {
    console.log(error);
  });