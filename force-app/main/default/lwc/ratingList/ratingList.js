import { LightningElement, track, wire, api } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import getAvaliacaoList from '@salesforce/apex/ratingController.getAvaliacaoList';
//import getRatingAuthor from  '@salesforce/apex/ratingController.getRatingAuthor';

export default class RatingList extends LightningElement {

    @api recordId;
    @track objAvaliacaoLista;

    @wire(getObjectInfo, {objectApiName: 'Avaliacao__c'})
    avaliacaoMetadata;

    @wire(getAvaliacaoList , {accountId : '$recordId'})
    getListaAvaliacao({data}) {
        if(data)
            this.objAvaliacaoLista = data;
    }

    get tituloLabel() {
        return this.avaliacaoMetadata ? this.avaliacaoMetadata.data.fields.Name.label : '';
    }
    get notaLabel() {
        return this.avaliacaoMetadata ? this.avaliacaoMetadata.data.fields.Nota__c.label : '';
    }
    get descricaoLabel() {
        return this.avaliacaoMetadata ? this.avaliacaoMetadata.data.fields.Descricao__c.label : '';
    }
    get autorLabel() {
        return this.avaliacaoMetadata ? this.avaliacaoMetadata.data.fields.Autor__c.label : '';
    }
}