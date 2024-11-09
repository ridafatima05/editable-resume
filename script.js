var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion for form fields
    var nameField = document.getElementById('nameField');
    var emailField = document.getElementById('emailField');
    var phoneField = document.getElementById('phoneNum');
    var educationField = document.getElementById('education');
    var experienceField = document.getElementById('experience');
    var skillsField = document.getElementById('skills');
    var instaField = document.getElementById('instalink');
    var fbField = document.getElementById('fblink');
    var linkedinField = document.getElementById('linkedinlink');
    if (nameField && emailField && phoneField && educationField && experienceField && skillsField) {
        var name_1 = nameField.value;
        var email = emailField.value;
        var phone = phoneField.value;
        var education = educationField.value;
        var experience = experienceField.value;
        var skills = skillsField.value;
        var instagram = (instaField === null || instaField === void 0 ? void 0 : instaField.value) || '';
        var facebook = (fbField === null || fbField === void 0 ? void 0 : fbField.value) || '';
        var linkedin = (linkedinField === null || linkedinField === void 0 ? void 0 : linkedinField.value) || '';
        // Resume Output HTML
        var resumeOutput_1 = "\n            <h1>Resume:</h1>\n            <h3>Name:</h3>\n            <p><span class=\"editable\" data-field=\"name\">".concat(name_1, "</span></p>\n            <h3>Email:</h3>\n            <p><span class=\"editable\" data-field=\"email\">").concat(email, "</span></p>\n            <h3>Phone Number:</h3>\n            <p><span class=\"editable\" data-field=\"phone\">").concat(phone, "</span></p>\n            <h3>Education:</h3>\n            <p><span class=\"editable\" data-field=\"education\">").concat(education, "</span></p>\n            <h3>Experience:</h3>\n            <p><span class=\"editable\" data-field=\"experience\">").concat(experience, "</span></p>\n            <h3>Skills:</h3>\n            <p><span class=\"editable\" data-field=\"skills\">").concat(skills, "</span></p>\n            <h2>Social Media Links:</h2>\n            <ul>\n                ").concat(instagram ? "<li><strong>Instagram:</strong> <a href=\"".concat(instagram, "\" target=\"_blank\">").concat(instagram, "</a></li>") : '', "\n                ").concat(facebook ? "<li><strong>Facebook:</strong> <a href=\"".concat(facebook, "\" target=\"_blank\">").concat(facebook, "</a></li>") : '', "\n                ").concat(linkedin ? "<li><strong>LinkedIn:</strong> <a href=\"".concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></li>") : '', "\n            </ul>\n        ");
        // Insert resume content into the page
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput_1;
            // Create the Download Button
            var downloadButton = document.createElement('button');
            downloadButton.textContent = 'Download Your Resume';
            downloadButton.addEventListener('click', function () {
                var downloadLink = document.createElement('a');
                downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput_1);
                downloadLink.download = 'resume.html'; // Set the default download file name
                downloadLink.click(); // Programmatically trigger the download
            });
            // Append the download button to the output container
            resumeOutputElement.appendChild(downloadButton);
            resumeOutputElement.style.display = 'block';
        }
    }
    else {
        console.error("Some expected outputs are missing!");
    }
});
