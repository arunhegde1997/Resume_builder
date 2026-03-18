import { LightningElement } from 'lwc';

export default class Summary extends LightningElement {
    summary='';

    handleSummaryChange(event){
         console.log("summary 1")
       
        this.summary = event.target.value;
        console.log("summary 4")
        this.updateResume();
         console.log("summary 5")
    }
    updateResume(){
         console.log("summary 6")
      const  updateSummaryEvent = new CustomEvent ("updatesummary",{detail:this.summary});
     console.log("summary 7")
        this.dispatchEvent(updateSummaryEvent)
         console.log("summary 8")
}
}