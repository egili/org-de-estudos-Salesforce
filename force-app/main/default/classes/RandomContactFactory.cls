@isTest
public class RandomContactFactory {
	
    public static List<Contact> generateRandomContacts(Integer numCttGerados, String sobrenomesDosContatos){
      List<Contact> cttList = new List<Contact>();
        
        for(Integer i = 0; i < numCttGerados; i++){
            Contact c = new Contact();
            c.FirstName = 'Test ' +i;
            c.lastName=sobrenomesDosContatos;
            
            cttList.add(c);
        }
        
        //insert cttList;
        
        return cttList;
    }
}