/*var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");
          }
        else if (avg < 70) {
                console.log("Grade : D");
                  }
        else if (avg < 80)
             {
                console.log("Grade : C");
        } else if (avg < 90) {
                console.log("Grade : B");
        } else if (avg < 100) {
                console.log("Grade : A");
}
*/

const STUDENTS = [
    {
      id: 1,
      name: "Name 1",
      gpa: 2.7
    },
    {
      id: 2,
      name: "Name 1",
      gpa: 2.6
    },
    {
      id: 3,
      name: "Name 2",
      gpa: 1
    },
    {
      id: 4,
      name: "Name 1",
      gpa: 3
    },
    {
      id: 5,
      name: "Name 4",
      gpa: 2.2
    },
    {
      id: 6,
      name: "Name 3",
      gpa: 2.1
    }
  ];
  
  function findGpa(studList, gpa = 2.0) {
    let list = new Set();
  
    studList.forEach(student => {
      if (student.gpa >= gpa) {
        list.add(student.name);
      }
    });
  
    return list;
  }
  
  let students = findGpa(STUDENTS, 1);
  
  students.forEach(student => alert(student));
  