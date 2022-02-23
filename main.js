// In this exercise, you will define four functions. One will create a student object, and 
// the other three will add a grade for a subject to the student object.

// createStudent() should return a new student object. The name of the student, and 
// which grade the student is in, must be passed to the function as arguments. 
// The returned object should have a name property and a grade property.

// addMathGrade() should add a new "math" property to the student with a value of "B".
// addHistoryGrade() should add a new "history" property to the student with a value of "C".
// addScienceGrade() should add a new "science" property to the student with a value of "A".
// Remember to follow the flow that you learned about in the last chapter.

// Each function should define a parameter to hold the object.
// Each function should be invoked with an object provided as an argument.
// Each function should return the object after the property is added.
// The return value of the function should be stored in a variable.


const createStudent = () => {
    const student = {
        name: "Jon Jones",
        grade: "freshman"
    }
    return student
}

const addMathGrade = (studentObject) => {
    studentObject.math = "B"
    return studentObject
}

const addHistoryGrade = (studentObject) => {
    studentObject.history = "C"
    return studentObject
}

const addScienceGrade = (studentObject) => {
    studentObject.science = "A"
    return studentObject
}

let reportCard = createStudent()
addMathGrade(reportCard)
addHistoryGrade(reportCard)
addScienceGrade(reportCard)

console.log(reportCard)