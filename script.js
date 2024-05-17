function fetchEntryRequirements() {
    var universityName = document.getElementById('universityName').value;
    var studyLevel = document.getElementById('studyLevel').value;
    if (universityName) {
        // Replace the URL below with the actual URL of your Google Sheet
        var sheetUrl = 'https://docs.google.com/spreadsheets/d/e/your_spreadsheet_id/pub?output=csv';

        // Fetch data from Google Sheet
        // Process the data and display it in the #results div
        // Example:
        document.getElementById('results').innerHTML = `
            <h2>${universityName} ${studyLevel === 'undergraduate' ? 'Undergraduate' : 'Postgraduate'} Entry Requirements</h2>
            <p>USPs: ...</p>
            <p>Academic Requirement: ...</p>
            <p>English Requirements: ...</p>
            <p>Alternate English Tests: ...</p>
            <p>Initial Deposit: ...</p>
            <p>Gap Excepted: ...</p>
            <p>Fee: ...</p>
            <p>Scholarship: ...</p>
            <p>Intakes: ...</p>
        `;
    } else {
        alert("Please enter a university name.");
    }
}
