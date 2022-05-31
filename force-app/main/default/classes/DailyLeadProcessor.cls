public class DailyLeadProcessor implements Schedulable{
	
    public void execute(SchedulableContext ct){
        List<Lead> lista = [select id, leadsource from lead where leadsource=null];
        
        if(!lista.isEmpty()){
            for(Lead l: lista){
                l.leadsource = 'Dreamforce';
            }
            update lista;
        }
    }
}