var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion
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
        //Resume Output 
        var resumeOutput = "\n            <h1>Resume:</h1>\n            <h3>Name:</h3>\n            <p>".concat(name_1, "</p>\n            <h3>Email:</h3>\n            <p>").concat(email, "</p>\n            <h3>Phone Number:</h3>\n            <p>").concat(phone, "</p>\n            <h3>Education:</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience:</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills:</h3>\n            <p>").concat(skills, "</p>\n            <h2>Social Media Links:</h2>\n            <ul>\n                ").concat(instagram ? "<li><strong>Instagram:</strong> <a href=\"".concat(instagram, "\" target=\"_blank\">").concat(instagram, "</a></li>") : '', "\n                ").concat(facebook ? "<li><strong>Facebook:</strong> <a href=\"".concat(facebook, "\" target=\"_blank\">").concat(facebook, "</a></li>") : '', "\n                ").concat(linkedin ? "<li><strong>LinkedIn:</strong> <a href=\"".concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></li>") : '', "\n            </ul>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('Resume output container not found!');
        }
    }
    else {
        console.error('Please fill in all the required fields!');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //replace content 
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
