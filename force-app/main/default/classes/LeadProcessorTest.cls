@isTest
public class LeadProcessorTest {

    @isTest
    static void batchTest(){
        List<Lead> leads = new List<Lead>();
        for(integer i = 0; i < 200; i++){
        	leads.add(new Lead(LastName='Lead '+ i, Company = 'Lead ' + Lead.LastName));           
        }
        insert leads;
        
        Test.startTest();
        LeadProcessor lp = new LeadProcessor();
        Id batchId = Database.executeBatch(lp);
        Test.stopTest();
        
        System.assertEquals(200, [select count() from lead where LeadSource = 'Dreamforce']);
}
}