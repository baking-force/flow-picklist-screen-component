# BakingForce - FLOW Picklist Screen Component

**FLOW Picklist (Drop-down) screen component** built with LWC that resolves the limitations of the current screen picklist that is always required even though your field is not required. It also supports **Record Type** so you can specify which to use if needed.

You can find the limitations of the current component in this IDEA 👉 [Visual Flow picklists are always required and never required - odd UI behavior!](https://trailblazer.salesforce.com/ideaView?id=08730000000l5LcAAI) and the current official workaround by Salesforce 👉 [Drop-down Picklist field is mandatory in a Flow screen](https://help.salesforce.com/articleView?id=000312510&type=1&mode=1)

## How to Install?

Click on the desired link below, login and install it.

[🌊 Sandbox](https://test.salesforce.com/packaging/installPackage.apexp?p0=04t5Y000001imjw)
[🔥 Production](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t5Y000001imjw)

## Component Parameters

| Name                    | Type                   | Required? | Description                                                                                                                                                                                                                                                                                                            |
|-------------------------|------------------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Label**                   | String (Text)          |     ✔️     | Provide the Label for the Component ex. **Industry**                                                                                                                                                                                                                                                                   |
| **Required?**               | Boolean(True or False) |     ❌     | Specify if the Picklist is required or not.**NOTE:** You can use the FLOW Constant values **GlobalConstant.True** or **GlobalConstant.False**.                                                                                                                                                                      |
| **Required Error Message**  | String (Text)          |     ❌     | If the field is required, here you can provide the Required validation message. If you leave it **EMPTY** the default message is **'This field is required'**. **NOTE:** You can use HTML to format the message.                                                                                                       |
| **Value**                   | String (Text)          |     ❌     | Provide the Value for the picklist. In order to have the selected value of the picklist you need to add a variable in the section **'Store Output Values to Select Variables'** ex **{!var_Industry}**. **NOTE:** You can use it to set the default value of the picklist eighter using plain text or a Flow variable. |
| **Object API Name**         | String (Text)          |     ✔️     | In this field you need to indicate the Object API name. **NOTE:** If you are using a Custom Object remember to use **'__c'** ex. **Employee__c**.                                                                                                                                                                      |
| **Picklist Field API Name** | String (Text)          |     ✔️     | In this field, you need to provide the Picklist field API name. **NOTE:** If you are using a Custom Field remember to use **'__c'** ex. **Account_Type__c**.                                                                                                                                                           |
| **Record Type ID**          | String (Text)          |     ❌     | Provide the **Record Type ID** to determine the picklist values to lookup. Leave it **EMPTY** if you want to use the Default Record Type.                                                                                                                                                                           |
## How to use it?

In order to use the component and get the selected value you need to create a **Text variable** that will holds the value of the component. You can use this variable to set the default value for the component so when the FLOW screen loads the pre existing value is selected.

#### Steps:
- Create a variable first or when the component is added to the screen
- Add the component to the screen
- Click on the Component and fill the required fields: API Name, Label, Object API Name, and Picklist Field API Name.
- Add other parameters if needed ex: Record Type ID.
- Expand **Advanced**
- Check the box **'Manually assign variables'**
- In the section **'Store Output Values to Select Variables'** select or add the variable that will hold the picklist field value when it's selected

## Image examples

**Selecting component**

![alt text](https://github.com/baking-force/flow-picklist-screen-component/raw/master/example-resources/1.png "Component")

**Component Added & Parameters**

![alt text](https://github.com/baking-force/flow-picklist-screen-component/raw/master/example-resources/2.png "Component Added & Parameters")