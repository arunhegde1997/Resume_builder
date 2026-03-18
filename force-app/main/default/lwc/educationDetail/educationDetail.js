import { LightningElement ,track} from 'lwc';

export default class EducationDetail extends LightningElement {
  @track education =[{
   id:0,
    degree:'',
    year:'',
    institute:''
 }]

  handleEducationChange(event){
        let index =event.target.dataset.index;
        let field =event.target.dataset.field;
        let value =event.target.value;
        this.education[index][field] = value;
        this.updateResume();
    }
     updateResume(){
        // console.log("PI 6")
      const  updateEducationsEvt = new CustomEvent ("updateeducations",{detail:this.education});
    // console.log("PI 7")
        this.dispatchEvent(updateEducationsEvt)
        // console.log("PI 8")
}

     addEducations(){
        console.log("add educations");
        let nextIndex = this.education.length;

         console.log("add skill1");
        this.education = [...this.education, { id: nextIndex, degree:'', year:'', institute:'' }];
        
    }
}