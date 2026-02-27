let students = [];
        let nextId = 1;

        while (true) {
            let choice = prompt(`
        ========= STUDENT MANAGEMENT =========
        1. Create Student
        2. Read All Students
        3. Filter Scholarship Candidates (GPA > 8)
        4. Update Student Profile
        5. Delete Record
        6. Compliance Verification
        7. Academic Statistics
        8. Data Normalization (UPPERCASE)
        0. Exit
        
        Enter your choice:
        `);

            switch (choice) {
                case "1":
                    let name = prompt("Enter name:");
                    let age = Number(prompt("Enter age:"));
                    let gpa = Number(prompt("Enter GPA:"));
                    let status = prompt("Enter status (active/inactive):");

                    let newStudent = {
                        id: nextId++,
                        name,
                        age,
                        gpa,
                        status
                    };

                    students.push(newStudent);
                    alert("Student added successfully!");
                    break;

                case "2":
                    if (students.length === 0) {
                        alert("No students available.");
                        break;
                    }

                    let output = "===== STUDENT LIST =====\n";
                    students.forEach(stu => {
                        output += `ID: ${stu.id} | Name: ${stu.name} | Age: ${stu.age} | GPA: ${stu.gpa} | Status: ${stu.status}\n`;
                    });

                    alert(output);
                    break;

                case "3":
                    let scholarshipList = sstudent.filter(stu => stu.gpa > 8);

                    if (scholarshipList.length === 0) {
                        alert("No scholarship candidates.");
                    } else {
                        let result = "=== Scholarship Candidates ===\n";
                        scholarshipList.forEach(stu => {
                            result += `${stu.name} - GPA: ${stu.gpa}\n`;
                        });
                        alert(result);
                    }
                    break;

                case "4":
                    let updateId = Number(prompt("Enter student ID to update:"));

                    let studentToUpdate = students.find(stu => stu.id === updateId);

                    if (!studentToUpdate) {
                        alert("Student not found.");
                    } else {
                        studentToUpdate.name = prompt("Enter new name:", studentToUpdate.name);
                        studentToUpdate.gpa = Number(prompt("Enter new GPA:", studentToUpdate.gpa));
                        alert("Student updated successfully!");
                    }
                    break;

                case "5":
                    let deleteId = Number(prompt("Enter student ID to delete:"));

                    let index = students.findIndex(stu => stu.id === deleteId);

                    if (index === -1) {
                        alert("Student not found.");
                    } else {
                        students.splice(index, 1);
                        alert("Student deleted successfully!");
                    }
                    break;

                case "6":
                    let hasMinor = students.some(stu => stu.age < 18);
                    let allActive = students.every(stu => stu.status === "active");

                    alert(`
                        Has student under 18: ${hasMinor}
                        All students active: ${allActive}
                                    `);
                    break;

                case "7":
                    if (students.length === 0) {
                        alert("No students to calculate.");
                        break;
                    }

                    let avgGpa = students.reduce((sum, stu) => sum + stu.gpa, 0) / students.length;

                    alert(`Average GPA: ${avgGpa.toFixed(2)}`);
                    break;

                case "8":
                    let normalizedList = students.map(stu => ({
                        ...stu,
                        name: stu.name.toUpperCase()
                    }));

                    console.log("=== NORMALIZED LIST ===");
                    console.table(normalizedList);
                    alert("Check console for normalized data.");
                    break;

                case "0":
                    alert("Exiting program...");
                    break;

                default:
                    alert("Invalid choice!");
            }

            if (choice === "0") break;
        }