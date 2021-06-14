function Student(name,surname){
    this.name = name;
    this.surname = surname;
    this.grades = {};
}
Student.prototype.addGrade = function (subject, grade){
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
};
Student.prototype.getAverageGrade = function(subject) {
    if(typeof subject==="undefined"){
        let sum = 0;
        const subjectGrades = [];
        Object.keys(this.grades).forEach(element => {
            this.grades[element].forEach(function(element) {
                subjectGrades.push(element);
            });
            // console.log(element, this.grades[element]);
        });
        const average = subjectGrades.reduce(function(a,b){return a+b;}) /subjectGrades.length;
        return average;
    //     let sum = 0;
    //     for(let i=0; i <= this.grades[subject].length -1; i++) {
    //         sum = sum + this.grades[subject][i]
    //         console.log(sum);
    //     }
    //     const average = sum / this.grades[subject].length;
    //     return average;
               
    }
    else{
        const subjectGrades = [];
        for (const key in this.grades[subject]) {

            this.grades[subject].forEach( function(element) {
                subjectGrades.push(element);
            });
        // const grades = [];
        // for (const key in this.grades) {
        //     this.grades[key].forEach(element => {grades.push(element);});
        // };
        // return grades.reduce((prev, curr) => prev + curr, 0)/grades.length;  
        const average = subjectGrades.reduce(function(a,b){return a+b;}) /subjectGrades.length;
        return average;
        };
    }

}
const stud1 = new Student("Jan","Kowalski");
stud1.addGrade('maths', 21);
stud1.addGrade('maths', 6);
stud1.addGrade('english', 3);
//stud1.addGrade('maths', 6);
// stud1.addGrade('english', 3);
const avgMath = stud1.getAverageGrade('maths'); // 5
const avg = stud1.getAverageGrade(); // 4.33