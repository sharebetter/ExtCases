Ext.define('Demo.controller.demoController', {
    extend: 'Ext.app.Controller',
    views: ['Viewport','menuTree'],
    stores: ['menuStore'],
    model: ['menuModel']
});