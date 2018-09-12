var CountryCode = [  
    ['group1','group1'],
    ['group2','group2']
 ] ; 
Ext.define("Demo.view.Contacts.Edit", {
    extend: "Ext.window.Window",
    alias: "widget.contactsEdit",
    title: "Edit Contact",
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
            { 
            	xtype: "textfield",  fieldLabel: "Nick Name",name: "nickname",id: 'nickname',readOnly:true,disabled:true,
            },
            { xtype: "textfield", fieldLabel: "Mobile Number",name: "mobilenumber",id: 'mobileNumber'},
            {
            	            id: 'Group_select_show',
							fieldLabel : 'Group',
							allowBlank : false,
							xtype : 'combo',
							editable : false,
							mode : 'local',
							triggerAction : 'all',
							displayField :'value', 
							autoScroll: true,
                            valueField :'id', 
                            listConfig : {//设置下拉时显示的样式
						        maxHeight : 75,//下拉时最大高度
						        getInnerTpl : function() {
						            return '<div style="color:black" data-qtip="{id}">{value}</div>';//这里面的id和name是你的store里面的属性
						        }
						    },
							store :  new Ext.data.SimpleStore({  
				                fields: ['id', 'value'],  
				                data : CountryCode  
			                }),
							name:'group'
			}             
        ],
        buttonAlign:'center',
        buttons: [
	        { text: l.cp.common.save, action: "update"},
	        { text: l.cp.common.cancel, action: "cancel" }
        ]
    },
    
});