@isTest
public class ratingControllerTest {

    @isTest static void makeData() {
        Avaliacao__c avaliacao1 = new Avaliacao__c();
        avaliacao1.Name = 'titulo';
        avaliacao1.Nota__c = '1';
        avaliacao1.Descricao__c = 'descricao';
    }
}