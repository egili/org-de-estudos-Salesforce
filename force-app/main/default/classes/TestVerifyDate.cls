@isTest
public class TestVerifyDate {

    @isTest static void testCheckDates(){
        VerifyDate.CheckDates(System.today(), System.today().addDays(10));
    }
    
     @isTest static void testCheckDatest(){
        VerifyDate.CheckDates(System.today().addDays(10), System.today());
    }
}