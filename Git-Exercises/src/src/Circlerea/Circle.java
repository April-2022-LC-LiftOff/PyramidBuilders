package exercises;
import java.util.Scanner;

public class Circle {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("What is your circle's radius?");
        double radius = input.nextDouble();
        double area = 3.14 * radius * radius;
        System.out.println("The circle area is " + area + ".");
        input.close();
    }
}
