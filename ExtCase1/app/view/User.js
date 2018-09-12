Ext.define("Demo.view.User", {
    extend: "Ext.grid.Panel",
    alias: 'widget.user',
    store: "User",
    initComponent: function () {
        this.columns = [
	        { text: 'productId', dataIndex: 'productId',flex:1},
	        { text: 'productName', dataIndex: 'productName',flex:1},
	        { text: 'prodcutPrice', dataIndex: 'prodcutPrice',flex:1 },
	        { text: 'prodcutImg', dataIndex: 'prodcutImg',flex:1}
	    ];
        this.callParent(arguments);
    }
});