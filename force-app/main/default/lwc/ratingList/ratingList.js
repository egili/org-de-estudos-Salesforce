import { LightningElement, track, wire, api } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import getAvaliacaoList from '@salesforce/apex/ratingController.getAvaliacaoList';

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

    @wire(getObjectInfo, {objectApiName: 'Account'})
    accountMetadata;
    
    /*@wire(getAvaliacaoList , { avaliacaoId : '$recordId' })
    avaliacaoList({error, data}) {
        if(data){
            this.dados = data;
            console.log('datas ', data);
            this.error = undefined;
        } else if(error){
            this.error = error;
            console.log('datas error ', data);
            this.data = undefined;
            console.log('errors ' , error);
        }
    }*/

    getListaAvaliacao() {
        getAvaliacaoList({ avaliacaoId : this.recordId })
        .then(result => {
            if(result)
                this.data = result;
        })
        .catch(error => {
            console.log('grt ' , error);
        })
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
        return this.accountMetadata ? this.accountMetadata.data.fields.Name.label : '';
    }
    get autorData() {
        return this.avaliacaoList ? this.avaliacaoList.data.fields.OwnerId : '';
    }
}