document.getElementById('validatePersonalDetails').addEventListener('click', function() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const dob = document.getElementById('dob').value;

    // Validate personal details
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!phoneRegex.test(phoneNumber)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    if (!emailRegex.test(emailAddress)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!dobRegex.test(dob)) {
        alert('Please enter a valid date of birth (YYYY-MM-DD).');
        return;
    }

    // Show educational details section
    document.getElementById('educationalDetails').style.display = 'block';

    // Add event listener for programme selection
    document.getElementById('programme').addEventListener('change', function() {
        const programme = this.value;
        const educationFields = document.getElementById('educationFields');
        educationFields.innerHTML = ''; // Clear previous fields

        if (programme === 'btech') {
            educationFields.innerHTML = `
                <label for="btechStream">B.Tech Stream:</label>
                <select id="stream" name="stream" required>
                    <option value="">Select Stream</option>
                    <option value="cse">CSE</option>
                    <option value="it">IT</option>
                    <option value="ece">ECE</option>
                    <option value="aiml">AI-ML</option>
                    <option value="ds">Data Science</option>
                    <option value="iot">IOT</option>
                    <option value="cs">Cyber Security</option>
                </select><br>
                <label for="tenthSchoolName">10th School Name:</label>
                <input type="text" id="tenthSchoolName" name="tenthSchoolName" required><br>
                <label for="tenthPercentage">10th Percentage:</label>
                <input type="number" step="0.1" id="tenthPercentage" name="tenthPercentage" required><br>
                <label for="interCollegeName">Inter/Diploma College Name:</label>
                <input type="text" id="interCollegeName" name="interCollegeName" required><br>
                <label for="interPercentage">Inter/Diploma Percentage:</label>
                <input type="number" step="0.1" id="interPercentage" name="interPercentage" required><br>
            `;
        } else if (programme === 'mtech') {
            educationFields.innerHTML = `
                <label for="mtechStream">M.Tech Stream:</label>
                <select id="stream" name="stream" required>
                    <option value="">Select Stream</option>
                    <option value="cse">CSE</option>
                    <option value="it">IT</option>
                    <option value="ds">Data Science</option>
                    <option value="ai">Artificial Intelligence</option>
                    <option value="cne">Computer Networking Engineering</option>
                </select><br>
                <label for="tenthSchoolName">10th School Name:</label>
                <input type="text" id="tenthSchoolName" name="tenthSchoolName" required><br>
                <label for="tenthPercentage">10th Percentage:</label>
                <input type="number" step="0.1" id="tenthPercentage" name="tenthPercentage" required><br>
                <label for="interCollegeName">Inter/Diploma College Name:</label>
                <input type="text" id="interCollegeName" name="interCollegeName" required><br>
                <label for="interPercentage">Inter/Diploma Percentage:</label>
                <input type="number" step="0.1" id="interPercentage" name="interPercentage" required><br>
                <label for="btechCollegeName">B.Tech/Degree College Name:</label>
                <input type="text" id="btechCollegeName" name="btechCollegeName" required><br>
                <label for="btechPercentage">B.Tech/Degree Percentage:</label>
                <input type="number" step="0.1" id="btechPercentage" name="btechPercentage" required><br>
            `;
        } else if (programme === 'mba') {
            educationFields.innerHTML = `
                <label for="mbaStream">MBA Stream:</label>
                <select id="stream" name="stream" required>
                    <option value="">Select Stream</option>
                    <option value="hr">Human Resources</option>
                    <option value="finance">Finance</option>
                    <option value="marketing">Marketing</option>
                    <option value="operations">Operations</option>
                    <option value="it">Information Technology</option>
                </select><br>
                <label for="tenthSchoolName">10th School Name:</label>
                <input type="text" id="tenthSchoolName" name="tenthSchoolName" required><br>
                <label for="tenthPercentage">10th Percentage:</label>
                <input type="number" step="0.1" id="tenthPercentage" name="tenthPercentage" required><br>
                <label for="interCollegeName">Inter/Diploma College Name:</label>
                <input type="text" id="interCollegeName" name="interCollegeName" required><br>
                <label for="interPercentage">Inter/Diploma Percentage:</label>
                <input type="number" step="0.1" id="interPercentage" name="interPercentage" required><br>
                <label for="degreeCollegeName">Degree College Name:</label>
                <input type="text" id="degreeCollegeName" name="degreeCollegeName" required><br>
                <label for="degreePercentage">Degree Percentage:</label>
                <input type="number" step="0.1" id="degreePercentage" name="degreePercentage" required><br>
            `;
        }
    });
});

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Gather form data
    const formData = {
        applicationDate: document.getElementById('applicationDate').value,
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        gender: document.getElementById('gender').value,
        dob: document.getElementById('dob').value,
        fatherName: document.getElementById('fatherName').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        emailAddress: document.getElementById('emailAddress').value,
        permanentAddress: document.getElementById('permanentAddress').value,
        presentAddress: document.getElementById('presentAddress').value,
        programme: document.getElementById('programme').value,
        stream: document.getElementById('stream').value,
        tenthSchoolName: document.getElementById('tenthSchoolName')?.value,
        tenthPercentage: parseFloat(document.getElementById('tenthPercentage')?.value),
        interCollegeName: document.getElementById('interCollegeName')?.value,
        interPercentage: parseFloat(document.getElementById('interPercentage')?.value),
        btechCollegeName: document.getElementById('btechCollegeName')?.value,
        btechPercentage: parseFloat(document.getElementById('btechPercentage')?.value),
        degreeCollegeName: document.getElementById('degreeCollegeName')?.value,
        degreePercentage: parseFloat(document.getElementById('degreePercentage')?.value),
    };

    // Submit form data to the server
    fetch('http://localhost:3028/api/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        document.getElementById('studentForm').reset();
        document.getElementById('educationalDetails').style.display = 'none'; // Hide educational details after submission    

        // Check if the user wants to download a copy

        if (data.seatAllocated) {
            // Generate PDF if user opted to download a copy and seats were allocated
            if (formData.downloadCopy === 'yes') {
                generatePDF(formData);
            }
        } 
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});


// Function to generate PDF using jsPDF
function generatePDF(formData) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFont('Helvetica', 'bold');
            doc.text('Student Admission Form', 105, 10, { align: 'center' });
            doc.setLineWidth(0.5);
            doc.rect(10, 15, 190, 275); // Border for the form

    doc.setFontSize(16);
    doc.text("Student Admission Form", 20, 20);
    doc.setFontSize(12);
    doc.text(`Application Date: ${formData.applicationDate}`, 20, 30);
    doc.text(`First Name: ${formData.firstName}`, 20, 40);
    doc.text(`Last Name: ${formData.lastName}`, 20, 50);
    doc.text(`Gender: ${formData.gender}`, 20, 60);
    doc.text(`Date of Birth: ${formData.dob}`, 20, 70);
    doc.text(`Father's Name: ${formData.fatherName}`, 20, 80);
    doc.text(`Phone Number: ${formData.phoneNumber}`, 20, 90);
    doc.text(`Email Address: ${formData.emailAddress}`, 20, 100);
    doc.text(`Permanent Address: ${formData.permanentAddress}`, 20, 110);
    doc.text(`Present Address: ${formData.presentAddress}`, 20, 130);
    doc.text(`Programme: ${formData.programme}`, 20, 150);
    doc.text(`Stream: ${formData.stream}`, 20, 160);

    if (formData.programme === 'btech') {
        doc.text(`10th School Name: ${formData.tenthSchoolName}`, 20, 170);
        doc.text(`10th Percentage: ${formData.tenthPercentage}`, 20, 180);
        doc.text(`Inter/Diploma College Name: ${formData.interCollegeName}`, 20, 190);
        doc.text(`Inter/Diploma Percentage: ${formData.interPercentage}`, 20, 200);
    } else if (formData.programme === 'mtech') {
        doc.text(`10th School Name: ${formData.tenthSchoolName}`, 20, 170);
        doc.text(`10th Percentage: ${formData.tenthPercentage}`, 20, 180);
        doc.text(`Inter/Diploma College Name: ${formData.interCollegeName}`, 20, 190);
        doc.text(`Inter/Diploma Percentage: ${formData.interPercentage}`, 20, 200);
        doc.text(`B.Tech/Degree College Name: ${formData.btechCollegeName}`, 20, 210);
        doc.text(`B.Tech/Degree Percentage: ${formData.btechPercentage}`, 20, 220);
    } else if (formData.programme === 'mba') {
        doc.text(`10th School Name: ${formData.tenthSchoolName}`, 20, 170);
        doc.text(`10th Percentage: ${formData.tenthPercentage}`, 20, 180);
        doc.text(`Inter/Diploma College Name: ${formData.interCollegeName}`, 20, 190);
        doc.text(`Inter/Diploma Percentage: ${formData.interPercentage}`, 20, 200);
        doc.text(`Degree College Name: ${formData.degreeCollegeName}`, 20, 210);
        doc.text(`Degree Percentage: ${formData.degreePercentage}`, 20, 220);
    }

    doc.save('Student_Admission_Form.pdf');
}
window.onload = function() {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    const applicationDateInput = document.getElementById('applicationDate');
    applicationDateInput.setAttribute('min', today); // Set the minimum date to today
    applicationDateInput.setAttribute('value', today); // Set the default value to today
};
