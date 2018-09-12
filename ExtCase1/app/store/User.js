Ext.define('Demo.store.User', {
	extend: 'Ext.data.Store',
	model: 'Demo.model.User',
//	alias: 'store.user',
	proxy: {
        type: 'ajax',
        url: './app/data.json',
        //url: 'data/blacklists.xml',
        reader: {
             type: 'json',
             rootProperty: 'result'
         }
    },
    autoLoad: true
});