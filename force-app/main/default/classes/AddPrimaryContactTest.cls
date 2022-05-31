@isTest
public class AddPrimaryContactTest {

    @isTest
    static void testList(){
        List<Account> lista = new List<Account>();
        
        for(integer i = 0; i <50; i++){
             lista.add(new Account(BillingState = 'CA', name = 'Test'+i));
        }
         for(integer i = 0; i <50; i++){
             lista.add(new Account(BillingState = 'NY', name = 'Test'+i));
        }
        insert lista;
        
         Contact co = new Contact(FirstName='demo', LastName ='demo');
         insert co;
         String state = 'CA';
      
          AddPrimaryContact apc = new AddPrimaryContact(co, state);
          Test.startTest();
          System.enqueueJob(apc);
          Test.stopTest();
    }
}