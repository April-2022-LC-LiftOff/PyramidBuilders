package School;

public class Student {
    private static int nextStudentId = 1;
    private String name;
    private int studentId;
    private int numberOfCredits;
    private double gpa;

    public Student(String name, int studentId, int numberOfCredits, double gpa) {
        this.name = name;
        this.studentId = studentId;
        this.numberOfCredits = numberOfCredits;
        this.gpa = gpa;
    }

    public String getName() {
        return name;
    }

    public int getStudentId() {
        return studentId;
    }

    public int getNumberOfCredits() {
        return numberOfCredits;
    }

    public double getGpa() {
        return gpa;
    }

    public void setName(String name) {
        this.name = name;
    }

    private void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    private void setNumberOfCredits(int numberOfCredits) {
        this.numberOfCredits = numberOfCredits;
    }

    private void setGpa(double gpa) {
        this.gpa = gpa;
    }

    public void addGrade(int courseCredits, double grade) {
        double totalScore = this.gpa * this.numberOfCredits;
        totalScore += courseCredits * grade;
        this.numberOfCredits += courseCredits;
        this.gpa = totalScore/numberOfCredits;

    }

    public String toString(){
    return("Student: " + name + ";Student ID: "+ studentId + ";Current GPA: " + gpa + "; Current Credits: " + numberOfCredits;)
    }

    public boolean equals(Student target){
      if (target == this){
            return true;
        }


    public static String getGradeLevel(int credits) {
        if (credits <= 29) {
            return "Freshman";
        } else if (credits > 29 && credits <= 59){
            return "Sophomore";
        } else if (credits > 59 && credits < 89){
            return "Junior";
        } else if (credits >= 89){
            return "Senior";
        } else {
            return null;
        }
//The quality score for a class is found by multiplying the letter grade score (0.0-4.0) by the number of credits.
//gpa = (total quality score) / (total number of credits)
//The total quality score is the sum of the quality scores for all classes.

    public static void main(String[] args){
        Student Sydney = new Student("Sydney", 724, 1, 4.0);
        Student Jonathan = new Student("Jonathan", 881, 90, 3.8);
        Student Sally = new Student("Sally",182, 80,  3.2);
        System.out.println("The Student class works!  " + Sally.getName() + " is a student.");
        System.out.println(Sally.getGradeLevel(Sally.getNumberOfCredits()));
        System.out.println(Sydney.getGradeLevel(Sydney.getNumberOfCredits()));
        System.out.println(Jonathan.getGradeLevel(Jonathan.getNumberOfCredits()));
    }
}