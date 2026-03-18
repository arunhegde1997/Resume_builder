import { LightningElement } from 'lwc';

export default class Skills extends LightningElement {
    skills =[{
        id:0,
        name:''
    }]

    handleSkillChange(event){
        let index =event.target.dataset.index;
        let value =event.target.value;
        this.skills[index].name = value;
        this.updateResume();
    }
     updateResume(){
        // console.log("PI 6")
      const  updateSkillsEvt = new CustomEvent ("updateskills",{detail:this.skills});
    // console.log("PI 7")
        this.dispatchEvent(updateSkillsEvt)
        // console.log("PI 8")
}

     addSkills(){
        console.log("add skill1");
        let nextIndex = this.skills.length;

         console.log("add skill1");
        this.skills = [...this.skills, { id: nextIndex, name: '' }];
        
    }
}