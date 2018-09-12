Ext.define('Demo.view.Menu', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.menu',
    
    border: false,
    expanded : true ,
    //规定锚链接地址的显示区域
    hrefTarget: 'mainContent',
    //是否显示根节点
    rootVisible: false,
    //数据集
    store: 'menuStore',
    collapsible: true,
    title:l.cp.alert.functionMenu,
//  width:250,
    scrollable:false,
    minHeight:100,
    //菜单样式
    bodyStyle: {
        background: '#ffc',
        padding: '10px'
    }

});
