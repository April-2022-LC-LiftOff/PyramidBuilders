package Circlerea;

import java.util.Scanner;


public class Circle {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("What is your circle's radius?");
        if (input.hasNext()) {
            if ((input.next() < 0) || (input.next().equals("")) || input.next().isNaN()) {
                System.err.println("This is not a valid entry! You must enter a radius, and the radius must be a positive number.");
            }
        }
        Double radius = input.next();
        Double area = CircleNew.getArea(radius);
        System.out.println("The circle area is " + area + ".");
        input.close();

    }
}
