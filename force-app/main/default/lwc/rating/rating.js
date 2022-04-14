import { api, LightningElement, wire } from 'lwc';
import AVALIACAO from '@salesforce/schema/Avaliacao__c'
import { getObjectInfo } from 'lightning/uiObjectInfoApi';


export default class Rating extends LightningElement {

    @api recordId;

    @wire(getObjectInfo, { objectApiName: AVALIACAO})
    avaliacaoMetadata({error, data}){
        if(data){
            console.log('data' , data);
        }else{
            console.log('error' , error);
        }
    }
}