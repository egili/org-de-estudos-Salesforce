public with sharing class ratingHelper {

    public static Integer getNotaAsNumber(Avaliacao__c av){
        return av.Nota__c == 'Bom' ? 3 : av.Nota__c == 'Médio' ? 2 : av.Nota__c == 'Ruim' ? 1 : 0;
    }
}