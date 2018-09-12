Ext.define('Demo.model.Contacts', {
    extend: 'Ext.data.Model',
    alias: 'model.contacts',
    fields:[
        {name:'id', type:'string'},
        {name:'nickname', type:'string'},
        {name:'mobilenumber', type:'string'},
        {name:'group', type:'string'},
    ]
});