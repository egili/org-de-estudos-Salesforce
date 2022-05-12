trigger AccountAddressTrigger on Account (before insert, before update) {
	
    for (Account acc: trigger.new){
        if(acc.Match_Billing_Address__c){
            acc.ShippingPostalCode = acc.BillingPostalCode;
            system.debug('shipping ' + acc.ShippingPostalCode);
            system.debug('caiu aqui');
        }
    }
}