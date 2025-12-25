let students = [];

function addStudent() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;

    if (!name || !age || !course) {
        alert("Please fill all fields!");
        return;
    }

    students.push({ name, age, course });
    renderTable();
}

function renderTable() {
    const table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((stu, index) => {
        table.innerHTML += `
            <tr>
                <td>${stu.name}</td>
                <td>${stu.age}</td>
                <td>${stu.course}</td>
                <td><button class="delete" onclick="deleteStudent(${index})">X</button></td>
            </tr>
        `;
    });
}

function deleteStudent(i) {
    students.splice(i, 1);
    renderTable();
}
