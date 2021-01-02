// from data.js
var tableData = data;

// YOUR CODE HERE
var tbody=d3.select("tbody");

tableData.forEach(function(wR){
    var row=tbody.append("tr");

    Object.entries(wR).forEach(function([key,value]) {
        var cell=tbody.append("td");
        cell.text(value);
    });
    
})

var inputDate=d3.select("#filter-btn");
inputDate.on("click", function() {
    d3.event.preventDefault();
    var inputElement=d3.select("#datetime");
    var inputValue=inputElement.property("value");
    console.log(inputValue);
    var filteredData=tableData.filter(item=>item.datetime===inputValue);
    console.log(filteredData);
    
})




