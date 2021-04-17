console.log("app.js loaded")

// from data.js
var tableData = data;

// YOUR CODE HERE!

// UFO Events
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
