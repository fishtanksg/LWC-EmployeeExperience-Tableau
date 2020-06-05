import { LightningElement, api } from 'lwc';
import tableauFile from '@salesforce/resourceUrl/tableau_embed2';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import { createRecord } from 'lightning/uiRecordApi';
import CASE_OBJECT from '@salesforce/schema/Case';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import CASE_TYPE from '@salesforce/schema/Case.RecordTypeId';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class SupplierDashboard extends LightningElement {
    // @api name = "Recruitment Dashboard"
    viz;
    caseId;
    vizInitialized = false;
    renderedCallback() {
        if (this.vizInitialized) {
            return;
        }
        this.vizInitialized = true;
       
        loadScript(this, tableauFile + "/tableau-2.4.0.min.js")
            .then(() => {
                this.initViz();
            })
    }

    initViz () { 
        const containerDiv = this.template.querySelector('div');
        const url = "https://dub01.online.tableau.com/t/madhavpersonalsite/views/tabEE/inventory-macro?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link&:linktarget=_parent";
        const options = {
            hideTabs: true,
            hideToolbar: true,
            onFirstInteractive: function () {
                console.log ("Hi");
                
            }
        };
        this.viz = new tableau.Viz(containerDiv, url, options);
        this.listenToMarksSelection();
        // console.log ("hi");
        // Create a viz object and embed it in the container div.
    }

    listenToMarksSelection() {
        this.viz.addEventListener(tableau.TableauEventName.MARKS_SELECTION, this.onMarksSelection);
    }

    onMarksSelection(marksEvent) {
        const fields = {};
        fields[SUBJECT_FIELD.fieldApiName] = "Inventory Replenishment";
        fields[CASE_TYPE.fieldApiName] = "0123h000000caqwAAA";
        const recordInput = { apiName: CASE_OBJECT.objectApiName, fields };
        console.log ("hi");
        createRecord(recordInput)
            .then(account => {
                this.caseId = account.id;
                console.log ("hi3");
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Case created',
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });
    }

    
}