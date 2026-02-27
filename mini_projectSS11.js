let students = [
{ id: 1, name: "Nguyen Văn A", score: 8.5, gender: "Nam" },
{ id: 2, name: "Trân Thị B", score: 4.2, gender: "Nữ" },
{ id: 3, name: "Lê Văn C", score: 9.0, gender: "Nam" },
{ id: 4, name: "Phạm Thị D", score: 5.5, gender: "Nữ" },
{ id: 5, name: "Hoang Văn E", score: 3.8, gender: "Nam" }
];

function eliteScore(array){
    let result = array.filter(function(element,index){
        return element.score >= 8.0;
    });
    console.log(result);
}

function needHelp(array){
    let check = array.some(function(element,index){
        return element.score < 4.0;
    });
    
    
    
    if (check) {
        console.log(`Có sinh viên yếu`);
    }else{
        console.log(`Không có sinh viên yếu`);
    }
}

function studentList(array){
    studentLabels = [];
    for(let student of array){
        studentLabels.push(`Tên: ${student.name} - Điểm: ${student.score}`);
        
    }
    console.log(studentLabels);
    
}






eliteScore(students);
needHelp(students);
studentList(students);

