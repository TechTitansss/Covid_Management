document.getElementById('patientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('patientName').value;
    const age = document.getElementById('patientAge').value;
    const gender = document.getElementById('patientGender').value;
    const covidDate = document.getElementById('covidDate').value;

    const patientList = document.getElementById('patientList');
    patientList.innerHTML += `<p>${name}, Age: ${age}, Gender: ${gender}, COVID Positive Date: ${covidDate}</p>`;
    this.reset();
});

document.getElementById('staffForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('staffName').value;
    const age = document.getElementById('staffAge').value;
    const gender = document.getElementById('staffGender').value;
    const post = document.getElementById('staffPost').value;
    const salary = document.getElementById('staffSalary').value;

    const staffList = document.getElementById('staffList');
    staffList.innerHTML += `<p>${name}, Age: ${age}, Gender: ${gender}, Post: ${post}, Salary: ${salary}</p>`;
    this.reset();
});

document.getElementById('generateReport').addEventListener('click', function() {
    const reportOutput = document.getElementById('reportOutput');
    reportOutput.innerHTML = '<p>Report generated successfully!</p>';
});
