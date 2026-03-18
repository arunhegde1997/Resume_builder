import { LightningElement ,api} from 'lwc';

export default class PreviewResume extends LightningElement {
    @api personalInfo = {};
    @api summary = '';
    @api skills =[];
    @api educations=[];
    @api workExperience=[];

}