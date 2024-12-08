// get refrences to the form and disply area 
var FORM = document.getElementById('Resume-form');
var ResumeDisplayElement = document.getElementById('resume-display');
//Handle form submission
FORM.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page Reload
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var Education = document.getElementById('Education').value;
    var Experiance = document.getElementById('Experiance').value;
    var Skills = document.getElementById('Skills').value;
    // generate the resume contant dynamically
    var resumehtml = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>personal Information</h3>\n    <p><b>Name</b><span contenteditable =\"true\">".concat(name, "</span></p>\n     <p><b>email</b><span contenteditable =\"true\">").concat(email, "</span></p>\n      <p><b>phone</b><span contenteditable =\"true\">").concat(phone, "</span></p>\n\n      <h3>Education</h3>\n      <p contenteditable =\"true\">>").concat(Education, "</p>\n\n       <h3>Experiance</h3>\n      <p contenteditable =\"true\">>").concat(Experiance, "</p>\n\n       <h3>Skills</h3>\n      <p contenteditable =\"true\">>").concat(Skills, "</p>\n    ");
    // generated resume display element
    if (ResumeDisplayElement) {
        ResumeDisplayElement.innerHTML = resumehtml;
    }
    else
        console.error('the resume display element is missing');
});
