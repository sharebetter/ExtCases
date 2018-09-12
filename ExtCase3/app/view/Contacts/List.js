Ext.define("Demo.view.Contacts.List", {
    extend: "Ext.grid.Panel",
//  requires: [
//      'Demo.controller.demoController',
//      'Demo.model.Contacts',
//      'Demo.view.Contacts',
//      'Demo.store.Contacts',
//      'Demo.view.edit',
//      'Demo.view.Menu',
//      'Demo.view.ViewPort'
//  ],
//  controller:'demo',
//  hidden:true,
    id:'contacts',
    alias: 'widget.contactsList',
    store: "Contacts",
    selModel: {
		selType: 'checkboxmodel',
        checkOnly: true,
    },
    initComponent: function () {
        this.columns = [
	        { header: 'Group', align: 'center',dataIndex: 'group',flex:2},
	        { header: 'Nick Name', align: 'center',dataIndex: 'nickname',flex:2},
	        { header: 'Number',align: 'center',dataIndex: 'mobilenumber',flex:2 },
	        { header: 'Edit', align: 'center', menuText: l.operation.modify, xtype:'actioncolumn', icon: 'img/edit.png',flex:1, tooltip: l.operation.modify, 
	            //修改数据
	            handler:function(grid, rowIndex, colIndex){
		            var record = grid.getStore().getAt(rowIndex);	            		           	
	           	    var win = Ext.widget("contactsEdit"); 
	           	    
	           	    localStorage.setItem('gridRowIndex', rowIndex);

			        win.down("form").loadRecord(record);
			        win.show();
	            }
	           
	        },
	        { header: 'Del', align: 'center', menuText: l.operation.del, xtype:'actioncolumn', icon: 'img/delete.png',flex:1, tooltip: l.operation.del,
	            //删除数据
	            handler:function(grid, rowIndex, colIndex){ 
		            var record = grid.getStore().getAt(rowIndex);	            	
                    Ext.Msg.confirm(l.cp.alert.warning, l.cp.alert.deletedSure+" "+ record.data['nickname'] + " ？", function (button) {
	                    if (button == "yes") {
                            grid.store.remove(record);
//                          console.log(record)
		                }
		            });
	            }
	        },
	    ];
        this.callParent(arguments);
    },
    tbar:[
        {xtype:'button',text:l.operation.add,id:'add',iconCls:'table_add',action: "edit"},
        {xtype:'button',text:l.operation.del,id:'del',iconCls:'table_del',action:"del",
//        handler:function(){
//     	    alert(233)
//        }
        }
    ],
    dockedItems:[{
    	xtype:'pagingtoolbar',
    	store:'Contacts',
    	dock:'bottom',
    	displayInfo:true,
    }]
//  initComponent: function(){
//  	var me = this;
//    me.store = Ext.create('Demo.store.Contacts', {
//        remoteSort: true
//    });
//  	me.bbar = {
//  		xtype: 'mypagingtoolbar',
//          store: me.store,
//          dock: 'bottom',
//          displayInfo: true,
//          cls:'pagetoolbar',
//          // inputItemWidth: 38,
//          emptyMsg: l.cp.common.empty,
//          // prependButtons: true,
//          plugins: new Ext.ux.PageSizePlugin()
//  	}
//  	me.callParent();
//  }
});