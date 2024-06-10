function fetchEntryRequirements() {
    var universityName = document.getElementById('universityName').value.trim().toLowerCase();
    var studyLevel = document.getElementById('studyLevel').value;
    var apiKey = 'AIzaSyC8YT34WTuyFrRROTOX7RlCfmBZ1pLaLiw';  // Replace with your actual API key
    var sheetId = '1OyNArgJ928IuNvYMT602KT1HW1WKXGX7uZwkNPKfRyM';  // Replace with your actual sheet ID
    var range = studyLevel === 'undergraduate' ? 'Undergraduate Entry Requirements!A:J' : 'Postgraduate Entry Requirements!A:J';
    var url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

    if (universityName) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                var rows = data.values;
                var headers = rows[0];
                var found = false;
                for (var i = 1; i < rows.length; i++) {
                    if (rows[i][0].trim().toLowerCase() === universityName) {
                        var resultHTML = `<h2>${rows[i][0]} ${studyLevel === 'undergraduate' ? 'Undergraduate' : 'Postgraduate'} Entry Requirements</h2>`;
                        for (var j = 1; j < headers.length; j++) {
                            resultHTML += `<p><strong>${headers[j]}:</strong> ${rows[i][j]}</p>`;
                        }
                        document.getElementById('results').innerHTML = resultHTML;
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    document.getElementById('results').innerHTML = '<p>No entry found for the specified university.</p>';
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    } else {
        alert("Please enter a university name.");
    }
}
