import { LightningElement, track, wire, api} from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import includeRating from '@salesforce/apex/ratingController.includeRating';

export default class Rating extends LightningElement {

    @track tituloAvaliacao;
    @track notaAvalicao;
    @track descricaoAvaliacao;
    @track isLoading = false;
    @api recordId;

    @wire(getObjectInfo, { objectApiName: "Avaliacao__c"})
    avaliacaoMetadata;
    
    @wire(getPicklistValues, { recordTypeId: "$avaliacaoMetadata.data.defaultRecordTypeId", fieldApiName: "Avaliacao__c.Nota__c"})
    notaPicklist;
    
    handleChange(event) {
        event.target.name == 'tituloInput' ? this.tituloAvaliacao = event.target.value : '';
        
        event.target.name == 'notaInput' ? this.notaAvaliacao = event.target.value : '';  
        
        event.target.name == 'descricaoInput' ? this.descricaoAvaliacao = event.target.value : '';  
    }

    insertAvaliacao() {
        includeRating({ titulo: this.tituloAvaliacao, nota: this.notaAvaliacao, descricao: this.descricaoAvaliacao, idConta: "$recordId" })
        .then(result => {
            this.isLoading = false;
            console.log('result ' , result);
        })
        .catch(error => {
            console.log('errors ' , error);
        })
    }

    saveClick() {
        this.isLoading = true;
        this.insertAvaliacao();
    }
}