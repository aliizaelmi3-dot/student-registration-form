// REGISTER FORM
const registerForm = document.getElementById("form");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const student = {
      name: registerForm.fullname.value,
      age: registerForm.age.value,
      email: registerForm.email.value,
      course: registerForm.course.value
    };

    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    alert("Student Saved ✅");
    registerForm.reset();
  });
}

// CONTACT FORM
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mahadsanid! Fariintaada waa la helay ✅");
    contactForm.reset();
  });
}
