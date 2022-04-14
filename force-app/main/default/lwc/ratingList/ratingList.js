import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

export default class RatingList extends LightningElement {

    @wire(getObjectInfo, {objectApiName: "Avaliacao__c"})
    avaliacaoMetadata;
}