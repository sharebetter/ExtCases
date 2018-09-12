var pagesize=2;
Ext.define("Demo.store.Contacts",{
    extend: "Ext.data.Store",
    alias: 'store.contacts',
    model: "Demo.model.Contacts",
    pageSize:pagesize,
    proxy: {
        type: 'ajax',
        url: './data/contacts.xml',
        reader: {
             type: 'xml',
             record: 'contact',
             totalProperty: 'total',
             rootProperty: 'contacts'
        }
    },
    autoLoad: {start:0,limit:pagesize}
});