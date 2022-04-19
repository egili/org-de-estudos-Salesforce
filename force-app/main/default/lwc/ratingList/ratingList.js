import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, track, wire } from 'lwc';
import getAvaliacaoList from '@salesforce/apex/ratingListController.getAvaliacaoList';
import getAccountName from '@salesforce/apex/ratingListController.getAccountName';

export default class RatingList extends LightningElement {

    @track avaliacoes; 

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
        label: this.autor,
        fieldName: 'OwnerId',
        type: 'text'
    }];
    
    @wire(getAccountName)
    accOwnerName;

    @wire(getObjectInfo, {objectApiName: 'Avaliacao__c'})
    avaliacaoMetadata;
    
    @wire(getAvaliacaoList)
    avaliacaoList({data, error}){
        if(data)
            this.avaliacoes = data;
        else if (error){
            console.log('erros ' , error);
            console.log('datas ' , data);
        }
    }

    get titulo() {
        if(this.avaliacaoMetadata)
            return this.avaliacaoMetadata.data.fields.Name.label;
    }
    get nota() {
        if(this.avaliacaoMetadata)
            return this.avaliacaoMetadata.data.fields.Nota__c.label;
    }
    get descricao() {
        if(this.avaliacaoMetadata)
            return this.avaliacaoMetadata.data.fields.Descricao__c.label;
    }
    get autor() {
        if(this.avaliacaoMetadata)
            return this.accOwnerName.data.fields.Name.label;
    }
}