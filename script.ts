document.getElementById('resumeForm')?.addEventListener('submit', function (event: Event) {
    event.preventDefault();

    // Type assertion for form fields
    const nameField = document.getElementById('nameField') as HTMLInputElement;
    const emailField = document.getElementById('emailField') as HTMLInputElement;
    const phoneField = document.getElementById('phoneNum') as HTMLInputElement;
    const educationField = document.getElementById('education') as HTMLTextAreaElement;
    const experienceField = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsField = document.getElementById('skills') as HTMLTextAreaElement;
    const instaField = document.getElementById('instalink') as HTMLInputElement;
    const fbField = document.getElementById('fblink') as HTMLInputElement;
    const linkedinField = document.getElementById('linkedinlink') as HTMLInputElement;

    if (nameField && emailField && phoneField && educationField && experienceField && skillsField) {
        const name = nameField.value;
        const email = emailField.value;
        const phone = phoneField.value;
        const education = educationField.value;
        const experience = experienceField.value;
        const skills = skillsField.value;
        const instagram = instaField?.value || '';
        const facebook = fbField?.value || '';
        const linkedin = linkedinField?.value || '';

        // Resume Output HTML
        const resumeOutput = `
            <h1>Resume:</h1>
            <h3>Name:</h3>
            <p><span class="editable" data-field="name">${name}</span></p>
            <h3>Email:</h3>
            <p><span class="editable" data-field="email">${email}</span></p>
            <h3>Phone Number:</h3>
            <p><span class="editable" data-field="phone">${phone}</span></p>
            <h3>Education:</h3>
            <p><span class="editable" data-field="education">${education}</span></p>
            <h3>Experience:</h3>
            <p><span class="editable" data-field="experience">${experience}</span></p>
            <h3>Skills:</h3>
            <p><span class="editable" data-field="skills">${skills}</span></p>
            <h2>Social Media Links:</h2>
            <ul>
                ${instagram ? `<li><strong>Instagram:</strong> <a href="${instagram}" target="_blank">${instagram}</a></li>` : ''}
                ${facebook ? `<li><strong>Facebook:</strong> <a href="${facebook}" target="_blank">${facebook}</a></li>` : ''}
                ${linkedin ? `<li><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></li>` : ''}
            </ul>
        `;

        // Insert resume content into the page
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;

            // Create the Download Button
            const downloadButton = document.createElement('button');
            downloadButton.textContent = 'Download Your Resume';
            downloadButton.addEventListener('click', function () {
                const downloadLink = document.createElement('a');
                downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
                downloadLink.download = 'resume.html'; // Set the default download file name
                downloadLink.click(); // Programmatically trigger the download
            });

            // Append the download button to the output container
            resumeOutputElement.appendChild(downloadButton);
            resumeOutputElement.style.display = 'block';
        }
    } else {
        console.error("Some expected outputs are missing!");
    }
});
