
function setTitle(course) {
  document.querySelector("#courseName").textContent = course.name;
  document.querySelector("#courseCode").textContent = course.code;
}

function renderSections(sections) {
  const html = sections.map(
    (section) => `<tr>
    <td>${section.sectionNumber}</td>
    <td>${section.enrolled}</td>
    <td>${section.instructor}</td></tr>`
  );
  document.querySelector("#sections").innerHTML = html.join("");
}

document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  byuiCourse.changeEnrollment(sectionNum);
  renderSections(byuiCourse.sections);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  byuiCourse.changeEnrollment(sectionNum, false);
  renderSections(byuiCourse.sections);
});