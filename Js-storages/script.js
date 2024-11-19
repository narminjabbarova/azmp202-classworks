let students = JSON.parse(localStorage.getItem("students"));
const stForm = document.getElementById("student-form")
const stList = document.getElementById("student-list")
const avScore = document.getElementById("avar-score")

function setId(){
    return Date.now()
}

function toLocal(){
    localStorage.setItem("students", JSON.stringify(students) || [])
}


function refresh() {
    stList.innerHTML = ""; 
    students.forEach((student) => {
        const li = document.createElement("li");
        li.textContent = `${student.name} - ${student.score}`;
        li.className = "student-item";

        
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Delete";
        removeBtn.style.marginLeft = "10px";
        removeBtn.onclick = () => {
            removeStudent(student.id);
        };

        li.appendChild(removeBtn);
        stList.appendChild(li);
    });

   
    calculateAverage();
}

function removeStudent(id) {
    students = students.filter((student) => student.id !== id)
    toLocal()
    refresh()
}

function calculateAverage() {
    if (students.length === 0) {
        avScore.textContent = "0"
        return;
    }

    const total = students.reduce((sum, student) => sum + student.score, 0)
    const average = (total / students.length).toFixed(2)
    avScore.textContent = average
}
