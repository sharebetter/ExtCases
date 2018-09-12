Ext.define('Demo.view.Viewport', {
    extend: 'Ext.container.Viewport',
    //布局方式
    layout: 'border',
    items: [{
//      title: '功能菜单',
        region: 'west',
        width:250,
        split: true,
        collapisble: true,
                //这里是修改的部分
        items:[{
            xtype: 'menu'
        }]
    }, {
        id: 'mainContent',
        title: l.cp.alert.mainContain,
        layout: 'fit',
        region: 'center',
        collapisble: true,
        items:[{
            xtype: 'contactsList'
        }]
    }]
});