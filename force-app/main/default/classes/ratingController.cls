public class ratingController {

    public static Avaliacao__c getAvaliacao(String titulo, String nota, String descricao){
        if(titulo == null || nota == null || descricao == null)
			return null;
        
        Avaliacao__c av = new Avaliacao__c();
        av.Name = titulo;
        av.Nota__c = nota;
        av.Descricao__c = descricao;
        
        insert av;
        
        return av;
    }
}