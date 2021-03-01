class Student
{
    constructor(name,roll,gpa)
    {
        this.name=name;
        this.roll=roll;
        this.gpa=gpa;
    }
    printDetails()
    {
        console.log("Student Name: "+this.name);
        console.log("Roll No: "+this.roll);
        console.log("GPA: "+this.gpa);
    }
}

function create()
{
    var name=document.getElementById("name").value;
    var roll=document.getElementById("roll").value;
    var gpa=document.getElementById("gpa").value;
    var st=new Student(name,roll,gpa);
    st.printDetails();
}