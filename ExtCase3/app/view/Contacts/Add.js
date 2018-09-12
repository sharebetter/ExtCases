Ext.define("Demo.view.Contacts.Add", {
    extend: "Ext.window.Window",
    alias: "widget.contactsAdd",
    title: "Add Contact",
    id:'contactsAdd',
    store: "Contacts",
    width: 500,
    height: 350,
    layout: "fit",
    modal:true,
    items: {
        xtype: "form",
        border: false,
//      margin: '25 0 0 100',
        bodyPadding:'25 60 0 100',
        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 100
        },
        items: [
            {
	          xtype: 'label', id: 'contacts-result', cls: 'css-login-result',style:{marginLeft:'0px',width:'100%'}
	        },
            { xtype: "textfield",  fieldLabel: "Nick Name",id: 'nickname'},
            { xtype: "textfield", fieldLabel: "Mobile Number",id: 'mobileNumber'},
            {
            	            id: 'Group_select',
							fieldLabel : 'Group',
							allowBlank : false,
							xtype : 'combo',
							editable : false,
							mode : 'local',
							triggerAction : 'all',
							store : ['Customized','None'],
							name:'group',
							listeners : {  
					            change : {  
					                fn : function(){
									    var group_select = Ext.getCmp('Group_select').getValue();
					                	if(group_select=='Customized'){
					                		Ext.getCmp('Customized').setVisible(true);
					                	}else{
					                		Ext.getCmp('Customized').setVisible(false);					                		
					                	}
					                }					                 
					            }  
							}  
							
						
			},
            { xtype: "textfield", id: 'Customized',style:{marginLeft:'105px'}}			
        ],
        buttonAlign:'center',
        buttons: [
	        { text: l.operation.add, action: "add"},
	        { text: l.cp.common.cancel, action: "cancel" }
        ]
    },
    
});
