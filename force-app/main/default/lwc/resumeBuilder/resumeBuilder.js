import { LightningElement } from 'lwc';

export default class resumeBuilder extends LightningElement {
    personalInfo = {};
    summary = '';
    skills =[];
    educations=[];
    workExperience=[];

    
    handleUpdatePI(event){
        console.log('Resume builder 2')
        this.personalInfo =JSON.parse(JSON.stringify(event.detail)) ;
        console.log('Resume builder 2')
}

    handleUpdateSummary(event){
        console.log('Resume builder 2')
        this.summary = event.detail;
        console.log('Resume builder 2')
}

handleUpdateSkills(event){
        console.log('Resume builder 2')
        this.skills = event.detail;
        console.log('Resume builder 2')
}

handleUpdateEducation(event){
        console.log('Resume builder 2')
        this.educations = event.detail;
        console.log('Resume builder 2')
}

// handleUpdateEducation(event){
//         console.log('Resume builder 2')
//         this.education = event.detail;
//         console.log('Resume builder 2')
// }

handleUpdateWorkExperience(event){
        console.log('Resume builder 2')
        this.workExperience = event.detail;
        console.log('Resume builder 2')
}

}