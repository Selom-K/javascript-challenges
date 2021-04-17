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