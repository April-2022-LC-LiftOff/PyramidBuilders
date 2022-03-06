package org.launchcode.java.demos.lsn5unittesting.test;

import Main.Car;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

public class CarTest {



    @Test
    public void emptyFields(){
        assertEquals(10,10,.001);
    }

    @Test
    public void gasTankLevelAccurate(){
        Car test_car = new Car("Toyota", "Prius", 10, 50);
        test_car.drive(50);
        assertEquals(9, test_car.getGasTankLevel(), .001);
    }

//    gasTankLevel is accurate after attempting to drive past tank range
    @Test
    public void accurateGasTankLevelPastTankRange(){
        Car test_car = new Car("Toyota", "Prius", 10, 50);
        test_car.drive(600);
        assertEquals(0, test_car.getGasTankLevel(),.001);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testGasOverfillException() {
        Car test_car = new Car("Toyota", "Prius", 10, 50);
        test_car.addGas(5);
        fail("Shouldn't get here, car cannot have more gas in tank than the size of the tank");
    }

    //TODO: add emptyTest so we can configure our runtime environment (remove this test before pushing to your personal GitLab account)
    //TODO: constructor sets gasTankLevel properly
    //TODO: gasTankLevel is accurate after driving within tank range
    //TODO: gasTankLevel is accurate after attempting to drive past tank range
    //TODO: can't have more gas than tank size, expect an exception

}
