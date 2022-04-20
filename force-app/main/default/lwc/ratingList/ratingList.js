import { LightningElement, track, wire, api } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import getAvaliacaoList from '@salesforce/apex/ratingListController.getAvaliacaoList';

export default class RatingList extends LightningElement {

   /*@track avaliacoes; 
    @track error;

    @track colums = [
    {
        label:this.titulo,
        fieldName: 'Name',
        type: 'text'
    },
    {
        label: this.nota,
        fieldName: 'Nota__c',
        type: 'text'
    },
    {
        label: this.descricao,
        fieldName: 'Descricao__c',
        type: 'text'
    },
    {
        label: 'Account',
        fieldName: 'Account',
        type: 'lookup'
    }];*/

    @track data;
    @api recordId;

    @wire(getObjectInfo, {objectApiName: 'Avaliacao__c'})
    avaliacaoMetadata;
    
    @wire(getAvaliacaoList , { avaliacaoId : '$recordId' })
    avaliacaoList({error, data}) {
        if(data){
            this.dados = data;
            this.error = undefined;
        } else if(error){
            this.error = error;
            this.data = undefined;
            console.log('errors ' , error);
        }
    }
    
    get tituloLabel() {
        return this.avaliacaoMetadata ? this.avaliacaoMetadata.data.fields.Name.label : '';
    }
    get tituloData() {
        return this.avaliacaoList || this.recordId ? this.avaliacaoList.data.Name : '';
    }

    get notaLabel() {
        return this.avaliacaoMetadata ? this.avaliacaoMetadata.data.fields.Nota__c.label : '';
    }
    get notaData() {
        return this.avaliacaoList ? this.avaliacaoList.data.fields.Nota__c : '';
    }

    get descricaoLabel() {
        return this.avaliacaoMetadata ? this.avaliacaoMetadata.data.fields.Descricao__c.label : '';
    }
    get descricaoData() {
        return this.avaliacaoList ? this.avaliacaoList.data.fields.Descricao__c : '';
    }

    get autorLabel() {
        return this.avaliacaoMetadata ? this.avaliacaoMetadata.data.fields.OwnerId.label : '';
    }
    get autorData() {
        return this.avaliacaoList ? this.avaliacaoList.data.fields.OwnerId : '';
    }
}