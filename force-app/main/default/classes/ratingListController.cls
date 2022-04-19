public class ratingListController {

    @AuraEnabled(cacheable=true)
    public static List<Avaliacao__c> getAvaliacaoList() {
        return [SELECT Id, Name, Nota__c, Descricao__c, Account__r.Name FROM Avaliacao__c];
    }

    @AuraEnabled(cacheable=true)
    public static List<Avaliacao__c> getAccountName() {
        return [SELECT Id, Account__r.Name FROM Avaliacao__c];
    }
}