@isTest
public class ratingControllerTest {

    @isTest
    static void makeData() {
        Avaliacao__c avaliacao1 = new Avaliacao__c();
        avaliacao1.Name = 'titulo';
        avaliacao1.Nota__c = 'Bom';
        avaliacao1.Descricao__c = 'descricao';
        insert avaliacao1;
    }
    
    @isTest
    static void includeRatingTest() {
        Avaliacao__c av = [SELECT Id, Name, Nota__c, Descricao__c FROM Avaliacao__c LIMIT 1];
        
        Test.startTest();
        Test.stopTest();
    }
}