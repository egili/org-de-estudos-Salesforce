public with sharing class ratingListController {

    @AuraEnabled
    public static List<Avaliacao__c> getAvaliacaoList() {
        return [SELECT Id, Name, Nota__c, Descricao__c, Account__r.Name FROM Avaliacao__c];
    }
}