public class ratingController {

    public static void includeRating(String titulo, String nota, String descricao){
        
        Avaliacao__c avaliacao = new Avaliacao__c();
        avaliacao.Name = titulo;
        avaliacao.Nota__c = nota;
        avaliacao.Descricao__c = descricao;
        
        insert avaliacao;
    }
    
    public static void getAvalicaoForList(Avaliacao__c av){
        
    }
}