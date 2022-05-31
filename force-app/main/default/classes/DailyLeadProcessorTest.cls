@isTest
public class DailyLeadProcessorTest {

    public static String CRON_EXP = '0 0 0 2 6 ? 2022';
    
    @isTest 
    static void testMe(){
        List<Lead> listaLead = new List<Lead>();
        for(integer i =0; i < 200; i++){
            listaLead.add(new Lead(lastname='Dreamforce ' + i, Company='Test Inc.'));
        }
        insert listaLead;
        
        Test.startTest();
        String jobId = System.schedule('Update LeadSource to DreamForce', CRON_EXP, new DailyLeadProcessor());
        Test.stopTest();
    }
}