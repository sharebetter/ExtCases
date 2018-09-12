Ext.define('Demo.controller.demoController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.demo',
    views: ['Viewport','Menu','Contacts.List','Contacts.Edit','Contacts.Add'],
    stores: ['Contacts','menuStore'],
    model: ['Contacts','menuModel'],
    
    init: function () {
        this.control({
            'contactsList': {
                itemdblclick: this.editContacts,
            },  
            'contactsList button[id=add]': {
              click:this.addContacts
            },
            'contactsList button[id=del]': {
              click:this.delContacts
            },
            //检测合法性并添加
            'contactsAdd button[action=add]': {
              click:this.contactsAdd              
            },
            'contactsAdd button[action=cancel]': {
                click: this.cancelContacts
            },
            'contactsEdit button[action=update]': {
                click: this.updateContacts
            },
            'contactsEdit button[action=cancel]': {
                click: this.cancelContacts
            },
            'menu':{
            	itemclick:function(view, rcd, item, idx, event, eOpts){
                    var dirid = rcd.raw.id;
					var grid=Ext.getCmp('contacts');					
					if(dirid == 5){
						grid.show();						
					}else{
						grid.hide();
					}
					
            	}
            },            
        });
    },
    editContacts: function (grid, record) {
        var win = Ext.widget("contactsEdit"); 
        win.down("form").loadRecord(record);
        win.show();
    },
    //弹出添加模态框
    addContacts: function (grid, record) {
        var win = Ext.widget("contactsAdd"); 
        Ext.getCmp('Customized').setVisible(false);
        win.show();        
    },
    //删除选中数据
    delContacts: function(){
        var grid = Ext.getCmp('contacts');
        var selModel = grid.getSelectionModel();
          if (selModel.hasSelection()) {
            Ext.Msg.confirm(l.cp.alert.warning,l.cp.alert.deleting, function (button) {
                if (button == "yes") {
                    var records = grid.getSelectionModel().getSelection();
				    for(var i = 0,len = records.length;i<len;i++ ){ 
						grid.store.remove(records[i]);
					}
                }
            });
        }
        else {
            Ext.Msg.alert(l.hotstandby.error, l.operation.deleting);
        }
    },
    //nickName检测
    nickNameCheck:function(grid,nickname){
    	if(/[:!\/#;,\[\]\\\"+@&'`^|\ ]/.test(nickname)){
            Ext.getCmp('contacts-result').setText(l.operation.nicknameChecked);	
            Ext.getCmp('contacts-result').setVisible(true);
            Ext.getCmp('nickname').focus();
            return 1;
        }
      	if(nickname==''){
        	Ext.getCmp('contacts-result').setText(l.operation.nicknameEmpty);	
            Ext.getCmp('contacts-result').setVisible(true);
            Ext.getCmp('nickname').focus();
            return 1;
        }
      	if(nickname.length>=63){
        	Ext.getCmp('contacts-result').setText(l.operation.nicknameMax);	
            Ext.getCmp('contacts-result').setVisible(true);
            Ext.getCmp('nickname').focus();
            return 1;
        }
      	//判断用户名是否重复
        var nickNameGroup = grid.getStore().data.items;
		for(var i=0;i<nickNameGroup.length;i++){
			if(nickname==nickNameGroup[i].data['nickname']){
				Ext.getCmp('contacts-result').setText(l.operation.nicknameRepeat);
				Ext.getCmp('nickname').focus();
				return 1;
			}
		} ;
		return 0;
   },
    //输入合法检测并添加
    contactsCheck:function(grid,mobileNumber,Group_select){    	
        if(mobileNumber==''){
        	Ext.getCmp('contacts-result').setText(l.operation.mobilenumberEmpty);	
            Ext.getCmp('contacts-result').setVisible(true);
            Ext.getCmp('mobileNumber').focus();
            return 1;
        }                
        if(!(/((^\+\d{1,14}$)|^(\d{1,15}$))/.test(mobileNumber))){
        	Ext.getCmp('contacts-result').setText(l.operation.mobilenumberMin);	
            Ext.getCmp('contacts-result').setVisible(true);
            Ext.getCmp('mobileNumber').focus();
            return 1;
        }        
        if(mobileNumber.length>15){
        	Ext.getCmp('contacts-result').setText(l.operation.mobilenumberMinlength);	
            Ext.getCmp('contacts-result').setVisible(true);
            Ext.getCmp('mobileNumber').focus();
            return 1;
        };
		//判断mobile number是否重复
        var mobileNumberGroup = grid.getStore().data.items;
        var rowIndex = localStorage.getItem('gridRowIndex');
		for(var i=0;i<mobileNumberGroup.length;i++){
			if(!(rowIndex == i)){
			  if(mobileNumber==mobileNumberGroup[i].data['mobilenumber']){
				Ext.getCmp('contacts-result').setText(l.operation.mobilenumberRepeat);
				Ext.getCmp('contacts-result').setVisible(true);
				Ext.getCmp('mobileNumber').focus();
				return 1;
			  }	
			}			  			
		};
        if(Group_select==null){
        	Ext.getCmp('contacts-result').setText(l.operation.groupSelected);
            return 1;        	
        }
        return 0;
    },
//  contacts添加
    contactsAdd:function(btn){
      	var nickname = Ext.getCmp('nickname').getValue();
      	var mobileNumber = Ext.getCmp('mobileNumber').getValue();		
        var Group_select = Ext.getCmp('Group_select').getValue();
        var customized='None';
        
        var win = btn.up("window");
        var grid = Ext.getCmp('contacts');
        
        rowlength = grid.getStore().data.length + 1;
		if(rowlength>500){
		  win.close();
		  Ext.Msg.alert(l.operation.sumOver);
		  return ;
		}
        
        var flag1 = this.nickNameCheck(grid,nickname);
        if(flag1==1){
      		return;
      	} 
      	localStorage.removeItem('gridRowIndex');
      	var flag2=this.contactsCheck(grid,mobileNumber,Group_select);
      	if(flag2==1){
      		return;
      	}
        if(Group_select=='Customized'){        	
        	customized = Ext.getCmp('Customized').getValue();
        	if(customized == ''){
        	  Ext.getCmp('Customized').focus();
        	  Ext.getCmp('contacts-result').setText(l.operation.groupadd);
        	  return ; 
        	}
        }                       
        //保存模态框
        var myMask = new Ext.LoadMask(win, {msg:l.operation.groupSaving});
        myMask.show()                                
                
        var record  = [{
			group: customized, 
			nickname: nickname,
			mobilenumber:mobileNumber
		}];
						
		setTimeout(function(){ 					
		   grid.getStore().insert(0, record );
		   win.close();					       	
        },1200);
        
        if(customized!='None'){        	
        	var widget_contactsEdit=Ext.widget("contactsEdit");
	        var Group_value =Ext.getCmp('Group_select_show').getStore().getProxy().data;
            for(var i=0;i<Group_value.length;i++){
            	if(Group_value[i][0]==customized){
	               return ;
            	}
            }	
            Group_value.push([customized,customized]);
//	        console.log(Group_value)
        }
//      console.log(rowlength)
    },
    //更新数据
    updateContacts: function (btn) {
    	var nickname = Ext.getCmp('nickname').getValue();
      	var mobileNumber = Ext.getCmp('mobileNumber').getValue();		
        var Group_select = Ext.getCmp('Group_select_show').getRawValue();
      	var grid = Ext.getCmp('contacts');
      	
      	var flag=this.contactsCheck(grid,mobileNumber,Group_select);
      	if(flag==1){
      		return;
      	};
        var win = btn.up("window"),
            form = win.down("form"),
            record = form.getRecord();        
    	var myMask = new Ext.LoadMask(form, {msg:l.operation.groupSaving});
        myMask.show()
        setTimeout(function(){
        	form.updateRecord();
        	record.commit();
        	myMask.hide()
        	win.close();
        },1200)
    },
    cancelContacts:function(btn){
    	var win = btn.up("window");          
        win.close();
    },
    
});