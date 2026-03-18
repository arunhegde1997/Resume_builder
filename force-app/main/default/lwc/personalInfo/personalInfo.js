import { LightningElement } from 'lwc';

export default class PersonalInfo extends LightningElement {
   personalInformation={};
    handlePIChange(event){
        // console.log("PI 1")
        let fieldName =event.target.dataset.field;
        // console.log("PI 2")
        let fieldValue =event.target.value;
        // console.log("PI 3")
        this.personalInformation[fieldName] = fieldValue;
       // console.log("PI 4")
        this.updateResume();
        // console.log("PI 5")
    }
    updateResume(){
        // console.log("PI 6")
      const  updatePIEvt = new CustomEvent ("updatepi",{detail:this.personalInformation});
    // console.log("PI 7")
        this.dispatchEvent(updatePIEvt)
        // console.log("PI 8")
}
}