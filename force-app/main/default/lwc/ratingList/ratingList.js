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
        if(this.avaliacaoMetadata)
        return this.avaliacaoMetadata.data.fields.Name.label;
    }
    get tituloData() {
        if(this.avaliacaoList || this.recordId)
            return this.avaliacaoList.data.Name;
    }

    get notaLabel() {
        if(this.avaliacaoMetadata)
            return this.avaliacaoMetadata.data.fields.Nota__c.label;
    }
    get notaData() {
        if(this.avaliacaoList)
            return this.avaliacaoList.data.fields.Nota__c;
    }

    get descricaoLabel() {
        if(this.avaliacaoMetadata)
            return this.avaliacaoMetadata.data.fields.Descricao__c.label;
    }
    get descricaoData() {
        if(this.avaliacaoList)
            return this.avaliacaoList.data.fields.Descricao__c;
    }

    get autorLabel() {
        if(this.avaliacaoMetadata)
            return this.avaliacaoMetadata.data.fields.OwnerId.label;
    }
    get autorData() {
        if(this.avaliacaoList)
            return this.avaliacaoList.data.fields.OwnerId;
    }
}