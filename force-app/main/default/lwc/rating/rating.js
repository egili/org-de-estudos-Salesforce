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

    handleReset(){
        this.template.querySelector('lightning-input').value = null;
        this.template.querySelector('lightning-combobox').value = null;
        this.template.querySelector('textarea').value = null;
    }

    insertAvaliacao() {
        this.isLoading = true;
        includeRating({ titulo: this.tituloInput, nota: this.notaInput, descricao: this.descricaoInput, idConta: this.recordId })
        .then(result => {
            this.isLoading = false;
            this.handleReset();
        })
        .catch(error => {
            console.log('errors ' , error);
        })
    }
}