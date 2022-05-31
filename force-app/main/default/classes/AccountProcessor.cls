public class AccountProcessor {

    @future
    public static void countContacts(List<id> idSet){
        List<Account> accList = [select id, (Select id from contacts) from Account where id in:idSet];
      
        for(Account a: accList){
        	a.Number_Of_Contacts__c = a.Contacts.size();  
        }
        update accList;
    }
}