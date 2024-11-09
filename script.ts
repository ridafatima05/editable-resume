
document.getElementById('resumeForm')?.addEventListener('submit', function (event: Event) {
    event.preventDefault(); 

    // Type assertion
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

        //Resume Output 
        const resumeOutput = `
            <h1>Resume:</h1>
            <h3>Name:</h3>
            <p>${name}</p>
            <h3>Email:</h3>
            <p>${email}</p>
            <h3>Phone Number:</h3>
            <p>${phone}</p>
            <h3>Education:</h3>
            <p>${education}</p>
            <h3>Experience:</h3>
            <p>${experience}</p>
            <h3>Skills:</h3>
            <p>${skills}</p>
            <h2>Social Media Links:</h2>
            <ul>
                ${instagram ? `<li><strong>Instagram:</strong> <a href="${instagram}" target="_blank">${instagram}</a></li>` : ''}
                ${facebook ? `<li><strong>Facebook:</strong> <a href="${facebook}" target="_blank">${facebook}</a></li>` : ''}
                ${linkedin ? `<li><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></li>` : ''}
            </ul>
        `;

    
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('Resume output container not found!');
        }

    } else {
        console.error('Please fill in all the required fields!');
    }
});
function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click',function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            //replace content 
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN'){
                const input = document.createElement('input')
                    input.type = 'text'
                    input.value = currentValue
                    input.classList.add('editing-input')

                    input.addEventListener('blur',function(){
                        currentElement.textContent = input.value
                        currentElement.style.display = 'inline'
                        input.remove();
                    })

                    currentElement.style.display = 'none'
                    currentElement.parentNode?.insertBefore(input,currentElement)
                    input.focus();

            }
        })
    })
}


