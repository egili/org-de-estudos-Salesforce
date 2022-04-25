import { LightningElement, wire, api} from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import includeRating from '@salesforce/apex/ratingController.includeRating';

export default class Rating extends LightningElement {

    @api recordId;
    tituloInput;
    notaInput;
    descricaoInput;
    isLoading = false;

    @wire(getObjectInfo, { objectApiName: "Avaliacao__c"})
    avaliacaoMetadata;
    
    @wire(getPicklistValues, { recordTypeId: "$avaliacaoMetadata.data.defaultRecordTypeId", fieldApiName: "Avaliacao__c.Nota__c"})
    notaPicklist;
    
    handleChange(event) {
        this[event.target.name] = event.target.value;
    }
    
   /* clearInputFields(event) {
        if(event.target.value != '')
            event.target.value = '';
    }*/

    insertAvaliacao() {
        this.isLoading = true;
        includeRating({ titulo: this.tituloInput, nota: this.notaInput, descricao: this.descricaoInput, idConta: this.recordId })
        .then(result => {
            this.isLoading = false;
            console.log('result ' , result);
         //   this.clearInputFields();
        })
        .catch(error => {
            console.log('errors ' , error);
        })
    }
}