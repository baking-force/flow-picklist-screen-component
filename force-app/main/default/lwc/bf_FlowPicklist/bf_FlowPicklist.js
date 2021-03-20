import { LightningElement, api, wire, track } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';

export default class bf_FlowPicklist extends LightningElement {
    @api label = '';
    @api required = false;
    @api required_Error_Message = ''
    @api value = '';
    @api object_API_Name = '';
    @api picklist_Field_API_Name = '';
    @api object_RecordType_Id = '';
    @api field_API_Name;

    connectedCallback(){
        this.field_API_Name = { fieldApiName: this.picklist_Field_API_Name, objectApiName: this.object_API_Name };
    }

    @track objectInfo;
    @wire(getObjectInfo, { objectApiName: "$object_API_Name" })
    objectInfo;

    @track picklistValues;
    @wire(getPicklistValues, { 
        recordTypeId: "$object_RecordType_Id", 
        fieldApiName: "$field_API_Name"
    })
    picklistValues;

    get options(){
        let result = [{label: '--None--', value: ''}];

        //If the Record Type ID was not provided set the Master Record Type ID
        if(!this.object_RecordType_Id) {
            const objectInfoData = this.objectInfo.data;
            if(objectInfoData) {
                this.object_RecordType_Id = objectInfoData.defaultRecordTypeId;
            }
        }

        const picklistValuesData = this.picklistValues.data;

        if(picklistValuesData) {
            picklistValuesData.values.map(function(option) {
                result.push({
                    label: option.label,
                    value: option.value
                })
            });
        }

        if(result.length === 1) {
            let errorMessage = this.picklistValues.error;
            console.log('errorMessage => ', errorMessage);
            
            if(errorMessage) {
                result = [];
    
                if(window.location.href.includes('flow__debug')) {
                    result.push({label: 'Looks like you did not supplied the correct parameters or you do NOT have access to this field.', value: ''});
                    result.push({label: 'PARAMETERS: ' + 'Object: ' + this.object_API_Name + ' | Field: ' + this.picklist_Field_API_Name + ' | RecordTypeId: ' + this.object_RecordType_Id, value: ''});
                    result.push({label: 'ERROR DETAILS: ' + JSON.stringify(errorMessage) , value: ''})
                }else{
                    result.push({label: 'Looks like this field does does NOT have the correct configuration or you do NOT have access to this field.', value: ''});
                }
            }
        }
        
        return result;
    }

    handleChange(event) {
        this.value = event.detail.value;
    }

    @api
    validate() {
        if(!this.required || (this.value !== '' && this.value !== null)) { 
            return { isValid: true }; 
        }
        else { 
            return { 
                isValid: false,
                errorMessage: !this.required_Error_Message ? 'This field is required' : this.required_Error_Message
            };
        }
    }
}