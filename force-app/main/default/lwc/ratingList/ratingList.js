import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire, track } from 'lwc';

const colums = [
    { label: 'Título', fieldName: 'name' },
    { label: 'Nota', fieldName: 'nota' },
    { label: 'Descrição', fieldName: 'descricao' },
    { label: 'Autor', fieldName: 'autor' }
];

export default class RatingList extends LightningElement {

    colums = colums;

    
    @wire(getObjectInfo, {objectApiName: 'Avaliacao__c'})
    avaliacaoMetadata;
    
    get dados() {
        if(this.avaliacaoMetadata.data)
            return this.avaliacaoMetadata.data;
    } 
}