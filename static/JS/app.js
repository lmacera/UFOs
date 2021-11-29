// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody=d3.select("tbody");
function buildTable(data) {
    // first, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    // and add a row and cells for each value in the row   
    data.forEach((dataRow) => {
        //Append and or add a row to the table body
        let row = tbody.append("tr");
        //Loop through each field in the dataRow and add
        //each value as a table cell(td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            //When we chain .text(value) to the variable, we are 
            //extracting only the text of the value.
            cell.text(val);
        });
    });
}
function handleClick(){
    // find the #datetime tag in html file and find the value associated with it 
    let date = d3.select("#datetime").property("value");
    // start with the original data unfiltered
    let filteredData= tableData;
    // Add if statement to filter the data based on date selected
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
        // Rebuild the table using the filtered data
        // @NOTE: If no date was entered, then filteredData will
        // just be the original tableData.
        buildTable(filteredData);
    }
 //Attach an event to listen for the form button
 d3.selectAll("#filter-btn").on("click", handleClick);
 // Build the table when the page loads
 buildTable(tableData);
