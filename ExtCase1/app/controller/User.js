Ext.define('Demo.controller.User', {
     extend: 'Ext.app.Controller',
//   alias: 'controller.user',
     stores: ['User'],
     models: ['User'],
     views: ['Viewport','User']
     
});