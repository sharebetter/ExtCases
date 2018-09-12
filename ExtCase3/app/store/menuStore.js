Ext.define("Demo.store.menuStore",{
    extend:'Ext.data.TreeStore',
    defaultRoodId:'root',
    //requires: 'Demo.model.menuModel',//我加了这两行，会报错
    //model: 'Demo.model.menuModel',
    proxy:{
        type:'ajax',
        url:'./data/data.json',
        reader:'json',
        autoLoad:true
    }
});