// script.js

function createTable() {
    // Prompt for the number of rows
    const numRows = prompt("Input number of rows:");

    // Prompt for the number of columns
    const numColumns = prompt("Input number of columns:");

    // Reference to the table element
    const table = document.getElementById("myTable");

    // Clear existing table content
    table.innerHTML = "";

    // Create rows and cells based on user input
    for (let i = 0; i < numRows; i++) {
        const row = table.insertRow(i);

        for (let j = 0; j < numColumns; j++) {
            const cell = row.insertCell(j);
            cell.textContent = `Row ${i + 1}, Col ${j + 1}`;
        }
    }
}
