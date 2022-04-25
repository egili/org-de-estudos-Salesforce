@isTest
public class ratingControllerTest {

    @isTest
    static void makeData() {
       
        Account acc = new Account();
        acc.Name = 'acc name';
        insert acc;
        
        Avaliacao__c avaliacao1 = new Avaliacao__c();
        avaliacao1.Name = 'titulo';
        avaliacao1.Nota__c = 'Bom';
        avaliacao1.Descricao__c = 'descricao';
        avaliacao1.Account__c = acc.Id;
        insert avaliacao1;
    }
    
    @isTest
    static void includeRatingTest() {
        Test.startTest();
        List<Avaliacao__c> av = [SELECT Id, Name, Nota__c, Descricao__c FROM Avaliacao__c];
        List<Account> acc = [SELECT Id, Name FROM Account WHERE Name = 'acc name'];
        
        ratingController.includeRating(av[0].Name, av[0].Nota__c, av[0].Descricao__c, acc[0].Id);
        Test.stopTest();
    }
}