public class ratingController {

    @AuraEnabled
    public static void includeRating(String titulo, String nota, String descricao){
        
        Avaliacao__c avaliacao = new Avaliacao__c();
        avaliacao.Name = titulo;
        avaliacao.Nota__c = nota;
        avaliacao.Descricao__c = descricao;
        
        insert avaliacao;
    }   

    @AuraEnabled(cacheable=true)
    public static List<Avaliacao__c> getAvaliacaoList(String avaliacaoId) {
        return [SELECT Id, Name, Nota__c, Descricao__c, Account__r.Name FROM Avaliacao__c WHERE Id =: avaliacaoId];
    }
}