import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import includeRating from '@salesforce/apex/ratingController.includeRating';

export default class Rating extends LightningElement {

    @wire(getObjectInfo, { objectApiName: "Avaliacao__c"})
    avaliacaoMetadata;
    @wire(getPicklistValues, { recordTypeId: "$avaliacaoMetadata.data.defaultRecordTypeId", fieldApiName: "Avaliacao__c.Nota__c"})
    notaPicklist;

    notaSelected(event) {
        this.value = event.detail.value;
    }

    saveClick(event) {

    }
}