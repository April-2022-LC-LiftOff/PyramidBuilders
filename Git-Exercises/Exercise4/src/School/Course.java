package School;

import java.util.ArrayList;

public class Course {
    private String courseName;
    private Teacher instructor;
    private ArrayList<Student> enrolledStudents = new ArrayList<>();


    public String getCourseName(){
        return courseName;
    }
    public Teacher getInstructor(){
        return instructor;
    }
    public ArrayList<Student> getEnrolledStudents(){
        return enrolledStudents;
    }
    public void setCourseName(String courseName){
        this.courseName = courseName;
    }
    public void setInstructor(Teacher instructor){
        this.instructor = instructor.setName;
    }
    public String toString(){
        return("The "+ courseName + "is taught by " + instructor.getFirstName() + "and the student list includes" + enrolledStudents ".")
    }
    public boolean equals(Course name){
        Course target = (Course) name;
        return target.instructor == instructor && target.courseName == courseName;
    }
}

