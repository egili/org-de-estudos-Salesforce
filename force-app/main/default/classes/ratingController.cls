public class ratingController {

    @AuraEnabled
    public static void includeRating(String titulo, String nota, String descricao, String idConta){
        Avaliacao__c avaliacao = new Avaliacao__c();
        avaliacao.Name = titulo;
        avaliacao.Nota__c = nota;
        avaliacao.Descricao__c = descricao;
        avaliacao.Account__c = idConta;

        insert avaliacao;
    }   

    @AuraEnabled(cacheable=true)
    public static List<Avaliacao__c> getAvaliacaoList(String accountId) {
        return [SELECT Id, Name, Nota__c, Descricao__c, Autor__c FROM Avaliacao__c WHERE Account__c =: accountId];
    }
}