// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var today=d3.select("tbody");
function buildTable(data) {
    // first, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    // and add a roww and cells for each value in the row
    data.forEach((dataRow)=> {
        //Append and or add a row to the table body
        let row= tbody.append("tr");
        //Loop through each field in the dataRow and add
        //each value as a table cell(td)
        Object.values(dataRow).forEach((val)=>{
            let cell=row.append("td");
            //When we chain .text(value) to the variable, we are 
            //extracting only the text of the value.

            cell.text(val);
        });
    });
}