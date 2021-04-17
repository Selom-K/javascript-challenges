console.log("app.js loaded")

// from data.js
var tableData = data;

// YOUR CODE HERE!

// Display UFO Events
function tableDisplay(ufoEvents) {
    var tbody = d3.select("tbody");
    ufoEvents.forEach((ufoRecord) => {
      var row = tbody.append("tr");
      Object.entries(ufoRecord).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.html(value);
      });
    });
  };

  // Remove data from the table
  function deleteTbody() {
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };

  // Show UFO Events
  console.log(tableData);
  tableDisplay(tableData);

  // Filter button
  var button = d3.select("#filter-btn");

  // Display Events
  button.on("click", function(event) {
    d3.event.preventDefault();
    deleteTbody();
    var dateInput = d3.select("#datetime").property("value");
    
    if (dateInput.trim() === "" ) {
      var filteredData = tableData;
    } else {  
      var filteredData = tableData.filter(ufoEvents => 
        ufoEvents.datetime === dateInput.trim());
    };

    // If there is no record, display message
    if (filteredData.length == 0) {
        d3.select("tbody")
          .append("tr")
          .append("td")
            .attr("colspan", 7)
            .html("<h4>No Records</h4>");
      };

      // Show table records
      console.log(filteredData);
    tableDisplay(filteredData);
  });
