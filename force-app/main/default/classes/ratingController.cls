public class ratingController {

    public static Avaliacao__c includeRating(String titulo, String nota, String descricao){
        if(titulo == null || nota == null || descricao == null)
			return null;
        
        Avaliacao__c avaliacao = new Avaliacao__c();
        avaliacao.Name = titulo;
        avaliacao.Nota__c = nota;
        avaliacao.Descricao__c = descricao;
        
        insert avaliacao;
        
        return avaliacao;
    }
    
    public static void getAvalicaoForList(Avaliacao__c av){}
}