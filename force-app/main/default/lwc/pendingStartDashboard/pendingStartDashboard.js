import { LightningElement, api } from 'lwc';
import tableauFile from '@salesforce/resourceUrl/tableau_embed3';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class PendingStartDashboard extends LightningElement {
    // @api name = "Recruitment Dashboard"
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
        const url = "https://dub01.online.tableau.com/t/madhavpersonalsite/views/tabEEteam/teampendingstart?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link&:linktarget=_parent";
        const options = {
            hideTabs: true,
            hideToolbar: true,
            onFirstInteractive: function () {
            }
        };
        const viz = new tableau.Viz(containerDiv, url, options);
        // Create a viz object and embed it in the container div.
    }

    
}