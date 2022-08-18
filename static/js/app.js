// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");
function buildTable(data) {
    tbody.html("");
}

data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });

  // Adding a user click function
  function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

  // adding an if statement to check for a date filter
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  };

  // Rebuild the table using filtered data
  buildTable(filter);
};

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);