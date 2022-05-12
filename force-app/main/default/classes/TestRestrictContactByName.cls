@isTest
public class TestRestrictContactByName {
	
    @isTest 
    static void triggerRestricTest(){
        test.StartTest();
        List<Contact> c = new List<Contact>();
        
        c.add(new Contact(LastName='INVALIDNAME'));
        
        insert c;
        test.stopTest();
    }
}