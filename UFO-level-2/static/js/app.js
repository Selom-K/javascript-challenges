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

  // Filtering
var button = d3.select("#filter-btn");

// Display
button.on("click", function(event) {
  
  d3.event.preventDefault();
  deleteTbody();
  
  var filteredData = tableData;
  var inputId = document.getElementsByClassName("form-control");

  // Input fields
  for (var i = 0; i < inputId.length; i++) {
	
	var idName = inputId[i].id;
	var field = d3.select("#" + idName).property("value");
	

	if (field.trim() !== "") {
	  var filteredData = filteredData.filter(ufoEvents =>
		ufoEvents[idName].toUpperCase().trim() ===
		field.toUpperCase().trim());
	};
  };
