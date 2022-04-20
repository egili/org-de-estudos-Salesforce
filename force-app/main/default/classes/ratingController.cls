public class ratingController {

    @AuraEnabled(cacheable=true)
    public static void includeRating(String titulo, String nota, String descricao){
        
        Avaliacao__c avaliacao = new Avaliacao__c();
        avaliacao.Name = titulo;
        avaliacao.Nota__c = nota;
        avaliacao.Descricao__c = descricao;
        
        insert avaliacao;
    }   
}