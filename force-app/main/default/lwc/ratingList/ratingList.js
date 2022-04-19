import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, track, wire } from 'lwc';
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

    @wire(getObjectInfo, {objectApiName: 'Avaliacao__c'})
    avaliacaoMetadata;
    
    @wire(getAvaliacaoList)
    avaliacaoList;

    get tituloLabel() {
        if(this.avaliacaoMetadata)
            return this.avaliacaoMetadata.data.fields.Name.label;
    }
    get notaLabel() {
        if(this.avaliacaoMetadata)
            return this.avaliacaoMetadata.data.fields.Nota__c.label;
    }
    get descricaoLabel() {
        if(this.avaliacaoMetadata)
            return this.avaliacaoMetadata.data.fields.Descricao__c.label;
    }
    get autorLabel() {
        if(this.avaliacaoMetadata)
            return this.avaliacaoMetadata.data.fields.OwnerId.label;
    }
}