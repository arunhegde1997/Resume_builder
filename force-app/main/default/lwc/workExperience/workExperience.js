import { LightningElement ,track } from 'lwc';

export default class WorkExperience extends LightningElement {
    @track workExperience =[{
      id:0,
    title:'',
    name:'',
    startDate:'',
    endDate:''
 }]

  handleWorkExperienceChange(event){
        let index =event.target.dataset.index;
        let field =event.target.dataset.field;
        let value =event.target.value;
        this.workExperience[index][field] = value;
        this.updateResume();
    }
     updateResume(){
        // console.log("PI 6")
      const  updateWorkExperienceEvt = new CustomEvent ("updateworkexperience",{detail:this.workExperience});
    // console.log("PI 7")
        this.dispatchEvent(updateWorkExperienceEvt)
        // console.log("PI 8")
}

     addWorkExperience(){
        console.log("add work experience");
        let nextIndex = this.workExperience.length;

         console.log("add skill1");
        this.workExperience = [...this.workExperience, { id: nextIndex, title:'', name:'', startDate:'', endDate:'' }];
        
    }
}