trigger ratingTrigger on Avaliacao__c (before insert, after insert, before update, after update, before delete, after delete) {

    Decimal nota = null;
    List<Decimal> listaNotas = null;

    for(Avaliacao__c av : trigger.new){
        nota = ratingHelper.getNotaAsNumber(av);
        listaNotas.add(nota);

        for(Decimal nota : listaNotas){
            
        }
    }
    
    for(Avaliacao__c av : trigger.old){
        nota = ratingHelper.getNotaAsNumber(av);
        listaNotas.add(nota);
    }
}