Ext.define('Demo.view.Viewport', {
    extend: 'Ext.container.Viewport',
    //布局方式
    layout: 'border',
    items: [{
        title:'ExtJS案例',
        collapisble: true,
        region:'north',
        height: 100,
        html: '<br><center><font size=5>MVC模式实现的ExtJS案例</font><br><font size=2>源码来源:ITLee博客</font></center>'
    },{
        title: '功能菜单',
        region: 'west',
        width:300,
        split: true,
        collapisble: true,
                //这里是修改的部分
        items:[{
            xtype: 'menutree'
        }]
    }, {
        id: 'mainContent',
        title: '主题内容显示',
        layout: 'fit',
        region: 'center',
        collapisble: true,
        contentEl: 'contentIframe'
    }]
});