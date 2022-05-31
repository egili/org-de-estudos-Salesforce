@isTest
public class AccountProcessorTest {

    @isTest
    static void countContactsTest(){
    	List<Account> accList= new List<Account>();
        for(Integer i=0; i < 300; i++){
            accList.add(new Account(name='test ' + i));
        }
        insert accList;
        
        List<Contact> cttList = new List<Contact>();
        List<Id> listId = new List<Id>();
        for(Account a: accList){
            cttList.add(new Contact(FirstName= a.Name, LastName = 'test ctt ', AccountId = a.Id));
            listId.add(a.Id);
        }    
        insert cttList;
        
        test.startTest();
        AccountProcessor.countContacts(listId);
        test.stopTest();
        
        List<Account> accs= [select id, Number_of_Contacts__c from Account];
        for (Account acc: accs){
            System.assertEquals(1,acc.Number_of_Contacts__c);
        }
    }   
}