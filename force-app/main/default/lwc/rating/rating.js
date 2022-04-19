import { LightningElement, track, wire, api} from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import includeRating from '@salesforce/apex/ratingController.includeRating';

export default class Rating extends LightningElement {

    @track nomeAvaliacao;
    @track notaAvalicao;
    @track descricaoAvaliacao;
    @api recordId;

    @wire(getObjectInfo, { objectApiName: "Avaliacao__c"})
    avaliacaoMetadata;
    
    @wire(getPicklistValues, { recordTypeId: "$avaliacaoMetadata.data.defaultRecordTypeId", fieldApiName: "Avaliacao__c.Nota__c"})
    notaPicklist;
    
    handleChange(event) {
        if(event.target.name == 'tituloInput')
            this.nomeAvaliacao = event.target.value;  
        
        if(event.target.name == 'notaInput')
            this.notaAvaliacao = event.target.value;  
        
        if(event.target.name == 'descricaoInput')
            this.descricaoAvaliacao = event.target.value;  
    }

    insertAvaliacao() {
        includeRating({ titulo: this.nomeAvaliacao, nota: this.notaAvaliacao, descricao: this.descricaoAvaliacao, idConta: "$recordId" })
        .then(data => {})
        .catch(error => {
            console.log('errors ' , error);
        })
    }

    saveClick() {
        this.insertAvaliacao();
    }
}