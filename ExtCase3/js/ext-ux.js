
Ext.define('Ext.ux.PageSizePlugin', {
    extend: 'Ext.form.ComboBox',

    store: new Ext.data.SimpleStore({  
        fields: ['text', 'value'],  
        data: [
                ['10', 10], ['25', 25], 
                ['50', 50], ['100', 100]
              ]  
    }),  
    displayField: 'text',  
    valueField: 'value',  
    editable: false,  
    allowBlank: false,
    cls:'pagebar_combo',
    width: 60,
    height:25,
     // matchFieldWidth:false,
    listConfig:{
        minWidth:60,
    },
    // height:16,

    init: function(paging) {
        // var text=new Ext.form.field.Text({
        //     fieldLabel:'Go to',
        //     labelSeparator:'',
        //     labelWidth:40,
        //     width:80,
        //     cls:'pagebar_text',
        // });
        // var btn=new Ext.button.Button({
        //     cls:'pagebar_go',
        //     text:'Go',
        //     handler:function(){
        //         console.info('click');
        //     }
        // })
        // // var page=new Ext.form.Label({
        // //     text:paging.getPageData().currentPage,
        // //     width:20,
        // // })
        // // paging.add(text);
        // paging.insert(11,text);
        // paging.insert(12,btn);
        // var page=paging.remove(4);
        // paging.remove(2);
        // paging.remove(6);
        // paging.remove(9);
        paging.on('render', this.onInitView, this);  
    },  
      
    onInitView: function(paging) {  
        // paging.add('-', 
        //     // 'view:', 
        //     this,
        //     l.cp.common.rowsperpage
        // );
         paging.add(this);   
        this.setValue(paging.pageSize);  
        this.on('select', this.onPageSizeChanged, paging);  
    },  
      
    onPageSizeChanged: function(combo) {  
        this.store.setPageSize(combo.getValue());
        this.store.loadPage(1);
    },

    listeners: {
        afterrender: function(obj){
            obj.select(obj.getStore().getAt(0));
        }

    }
});

Ext.define('Ext.ux.ExtTrunkPageSizePlugin', {
    extend: 'Ext.form.ComboBox',

    store: new Ext.data.SimpleStore({  
        fields: ['text', 'value'],  
        data: [
                ['10', 10], ['25', 25], 
                ['50', 50]
                // , ['100', 100]
              ]  
    }),
    value: '25',  
    displayField: 'text',  
    valueField: 'value',  
    editable: false,  
    allowBlank: false,
    cls:'pagebar_combo',
    width: 60,
    height:25,
     // matchFieldWidth:false,
    listConfig:{
        minWidth:60,
    },
    // height:16,

    init: function(paging) {
        // var text=new Ext.form.field.Text({
        //     fieldLabel:'Go to',
        //     labelSeparator:'',
        //     labelWidth:40,
        //     width:80,
        //     cls:'pagebar_text',
        // });
        // var btn=new Ext.button.Button({
        //     cls:'pagebar_go',
        //     text:'Go',
        //     handler:function(){
        //         console.info('click');
        //     }
        // })
        // // var page=new Ext.form.Label({
        // //     text:paging.getPageData().currentPage,
        // //     width:20,
        // // })
        // // paging.add(text);
        // paging.insert(11,text);
        // paging.insert(12,btn);
        // var page=paging.remove(4);
        // paging.remove(2);
        // paging.remove(6);
        // paging.remove(9);
        paging.on('render', this.onInitView, this);  
    },  
      
    onInitView: function(paging) {  
        // paging.add('-', 
        //     // 'view:', 
        //     this,
        //     l.cp.common.rowsperpage
        // );
         paging.add(this);   
        this.setValue(paging.pageSize);  
        this.on('select', this.onPageSizeChanged, paging);  
    },  
      
    onPageSizeChanged: function(combo) {  
        this.store.setPageSize(combo.getValue());
        this.store.loadPage(1);
    },

    listeners: {
        afterrender: function(obj){
            obj.select(obj.getStore().getAt(1));
        }

    }
});

function showRebootMsg(time, title, msg){
    var msgBox = Ext.MessageBox.show({  
        title: title || l.cp.alert.rebooting,    
        msg: msg || l.cp.alert.reboottext,
        modal:true,    
        width:350,    
        progress:true,
        closable: false,
        wait: true,
    });
    var i = 0;
    var task = {
        run: function(){
            var usetime = time || 60;
            var percent = i/usetime;
            if(percent >= 1){
                Ext.TaskManager.stop(task);
                window.location.reload(true);
            }else{
                msgBox.updateProgress(percent, parseInt(percent*100)+'%');
                i++;
            }
        },    
        interval: 1000
    }
    Ext.TaskManager.start(task);
}
