import { LightningElement, track, wire, api } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import getAvaliacaoList from '@salesforce/apex/ratingController.getAvaliacaoList';

export default class RatingList extends LightningElement {

    @track objAvaliacaoLista;
    @api recordId;

    @wire(getObjectInfo, {objectApiName: 'Avaliacao__c'})
    avaliacaoMetadata;

    @wire(getObjectInfo, {objectApiName: 'Account'})
    accountMetadata;

    @wire( getAvaliacaoList , { accountId : '$recordId' })
    getListaAvaliacao({error , data}) {
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
        return this.accountMetadata ? this.accountMetadata.data.fields.Name.label : '';
    }
}