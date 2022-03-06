package School;

///firstName, lastName, subject, and yearsTeaching
public class Teacher {
    private String firstName;
    private String lastName;
    private String subject;
    private int yearsTeaching;

    public Teacher(String firstName, String lastName, String subject, int yearsTeaching){
        this.firstName = firstName;
        this.lastName = lastName;
        this.subject = subject;
        this.yearsTeaching = yearsTeaching;
    }

    public String getFirstName(){
        return firstName;
    }
    public String getLastName(){
        return lastName;
    }
    public String getSubject(){
        return subject;
    }
    public int getYearsTeaching(){
        return yearsTeaching;
    }
    private void setFirstName(){
        this.firstName = firstName;
    }
    private void setLastName(){
        this.lastName = lastName;
    }
    private void setSubject(){
        this.subject = subject;
    }
    private void setYearsTeaching(){
        this.yearsTeaching = yearsTeaching;
    }
}


