public class ratingController {

    @AuraEnabled(cacheable=true)
    public static void includeRating(String titulo, String nota, String descricao, String idConta){
        
        Avaliacao__c avaliacao = new Avaliacao__c();
        avaliacao.Name = titulo;
        avaliacao.Nota__c = nota;
        avaliacao.Descricao__c = descricao;
        avaliacao.Account__c = idConta;
        
        insert avaliacao;
    }   
}