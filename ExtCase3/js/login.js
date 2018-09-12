var forgetPassWin = new Ext.Window({
    id: 'login-forgetpass',
    layout: 'fit',
    align: 'center',
    width: 450,
    height: 300,
    title: l.login.findpass,
    modal: true,
    resizable: false,
    border: false,
    maximizable: false,
    closeAction: 'close',
    items: [{
        xtype: 'form',
        fieldDefaults: {
            //labelWidth: 100,
            labelAlign: 'left',
            maxLength: 63,
            msgTarget: 'side'
        },
        padding: '8 8 8 8',
        items: [{
            xtype: 'label',
            html: l.login.findpasstip + "<br><br>"
        }, {
            xtype: 'label',
            id: 'login-findpass-result',
            cls: 'css-login-result',
            html: l.cp.alert.findpasserror
        }, {
            //fieldLabel: l.login.findpassuser,
            width: 350,
            style: {
                marginLeft: '25px'
            },
            xtype: 'textfield',
            id: 'login-findpassuser',
            name: 'findpassuser',
            allowBlank: false,
            emptyText: l.login.username,
            listeners: {
                specialkey: function (field, e) {
                    if (e.getKey() == e.ENTER) {
                        var username = Ext.getCmp('login-findpassuser').getValue();
                        if (/[:!$()\/#;,\[\]\\\"=<>&'`^%{}|\ ]/.test(username) || username == '') {
                            Ext.getCmp('login-findpass-result').setText(l.cp.valid.invalidnameconfig);
                            Ext.getCmp('login-findpass-result').setVisible(true);
                            Ext.getCmp('login-findpassuser').focus();
                            return;
                        }
                        handlerForgetPass();
                    }
                }
            }
        }],
        buttonAlign: 'center',
        buttons: [{
                style: 'border-radius: 8px;width:140px;height:40px;',
                text: '<span style="font-size:17px;">' + l.cp.common.send + '</span>',
                type: 'submit',
                id: 'send',
                listeners: {
                    click: function () {
                        var username = Ext.getCmp('login-findpassuser').getValue();
                        //	                            	console.log(username)
                        if (/[:!$()\/#;,\[\]\\\"=<>&'`^%{}|\ ]/.test(username) || username == '') {
                            Ext.getCmp('login-findpass-result').setText(l.cp.valid.invalidnameconfig);
                            Ext.getCmp('login-findpass-result').setVisible(true);
                            Ext.getCmp('login-findpassuser').focus();
                            return;
                        }
                        handlerForgetPass();
                    }
                }
            },
            {
                style: 'border-radius: 8px;width:140px;height:40px;',
                text: '<span style="font-size:17px;">' + l.cp.common.cancel + '</span>',
                type: 'submit',
                id: 'cancel',
                handler: function () {
                    forgetPassWin.close();
                }
            }
        ]

    }],

    bbar: {
        defaults: {
            minWidth: 75
        },
        items: ['->', {
            text: l.cp.common.send,
            ui: 'ys-theme',
            handler: handlerForgetPass
        }, {
            text: l.cp.common.cancel,
            ui: 'ys-theme',
            handler: function () {
                forgetPassWin.close();
            }
        }, '->']
    }
});

function onForgetPass() {
    forgetPassWin.show();
    Ext.getCmp('login-findpass-result').setVisible(false);
    Ext.getCmp('login-findpassuser').focus();
    Ext.getCmp('login-findpassuser').setValue('');
    //	                Ext.getCmp('login-findpassemail').setValue('');
}
//	            忘记密码
function handlerForgetPass() {
    Ext.getCmp('login-findpass-result').setVisible(false);
    var forgetpassForm = Ext.getCmp('login-forgetpass').down('form');
    if (forgetpassForm.isValid()) {
        var wait = new Ext.LoadMask(forgetpassForm, {
            msg: l.cp.common.pleasewait,
            removeMask: true
        });
        wait.show();
        Ext.Ajax.request({
            method: 'get',
            url: './data/findpassword.xml',
            success: function (response) {
                setTimeout(function () {
                    wait.hide();
                    var xmlDoc = response.responseXML;
                    if (xmlDoc != null) {
                    	Ext.getCmp('login-findpass-result').setVisible(true);
                        var result = Ext.DomQuery.selectValue('result', xmlDoc);
                        if (result == -1) {
                            /*Ext.Msg.alert(l.cp.alert.tip, l.cp.alert.emailnotexist);
                            forgetPassWin.close();
                        }else if(result == -2){*/
                            Ext.getCmp('login-findpass-result').setText(l.cp.alert.emailnotexist);
                            Ext.getCmp('login-findpassuser').setValue('');                            
                            Ext.getCmp('login-findpassuser').focus();
                        } else if (result == -2) {
                        	Ext.getCmp('login-findpass-result').setText(l.cp.alert.usernotexist);
                            Ext.getCmp('login-findpassuser').setValue('');                            
                            Ext.getCmp('login-findpassuser').focus();
//                          Ext.Msg.alert(l.cp.alert.usernotexist);
//                          forgetPassWin.close();
                        } else if (result == 1) {
                        	Ext.getCmp('login-findpass-result').setText(l.cp.alert.findpasssuccess);
                            Ext.getCmp('login-findpassuser').setValue('');                            
                            Ext.getCmp('login-findpassuser').focus();
//                          Ext.Msg.alert(l.cp.alert.findpasssuccess);
//                          forgetPassWin.close();
                        } else {
                        	Ext.getCmp('login-findpass-result').setText(l.cp.alert.findpassfailed);
                            Ext.getCmp('login-findpassuser').setValue('');                            
                            Ext.getCmp('login-findpassuser').focus();
//                          Ext.Msg.alert(l.cp.alert.findpassfailed);
//                          forgetPassWin.close();
                        }
                    }
                }, 1000);
            },
            failure: function () {
                wait.hide();
                forgetPassWin.close();
            },
            params: {
                username: Ext.getCmp('login-findpassuser').getValue(),
            }
        });
    }
}

Ext.onReady(function () {
    var loginForm = new Ext.form.Panel({
        id: 'login-form',
        frame: false,
        baseCls: '',
        /*autoHeight: true,
        height:'auto', */
        //padding: '35 20 20 20',
        fieldDefaults: {
            width: 420,
            labelWidth: 0,
            labelAlign: 'left',
            maxLength: 63,
            msgTarget: 'side'
        },
        border: false,
        scrollable: true,
        layout: {
            type: 'vbox',
            align: 'stretch',
            pack: 'center',
        },
        items: [{
            xtype: 'label',
            id: 'login-title',
            cls: 'css-login-title',
            style: {
                marginLeft: '-26px'
            },
            text: 'Ext.js',
        }, {
            xtype: 'label',
            id: 'login-result',
            cls: 'css-login-result',
            width: 400, //text: 'login'//, html: '<div class="css-login-result"></div>'
        }, {
            autoFitErrors: false,
            fieldStyle: "background-color: rgba(0,0,0,0);background: url(img/login_icon.png) 0 0 no-repeat;padding: 0 0 0 30px;border:0;border-bottom: 1px solid #d5d5d5;height: 100%;",
            xtype: 'textfield',
            id: 'login-username',
            name: 'loginname',
            emptyText: l.login.username,
            inputType: 'text',
            listeners: {
                specialkey: function (field, e) {
                    if (e.getKey() == e.ENTER) {
                        handlerLogin();
                    }
                },
                afterrender: function () {
                    this.inputEl.set({
                        'autocomplete': 'on'
                    });
                }
            }
        }, {
            fieldStyle: "background-color: rgba(0,0,0,0);background: url(img/login_icon.png) 0px -30px no-repeat;padding: 0 0 0 30px;border:0;border-bottom: 1px solid #d5d5d5;height: 100%;",
            autoFitErrors: false,
            xtype: 'textfield',
            id: 'login-password',
            name: 'password',
            emptyText: l.cp.email.secret,
            inputType: 'password',
            listeners: {
                specialkey: function (field, e) {
                    if (e.getKey() == e.ENTER) {
                        handlerLogin();
                    }
                },
                afterrender: function () {
                    this.inputEl.set({
                        'autocomplete': 'on'
                    });
                }
            }
        }, {
            xtype: 'label',
            html: '<a class="css-login-forgetpass" onclick="onForgetPass()">' + l.login.forgetpass + '</a>'
        }],
        buttonAlign: 'center',
        buttons: [{
            style: 'border-radius: 8px;width:140px;height:40px;',
            text: '<span style="font-size:20px;">' + l.login.login + '</span>',
            type: 'submit',
            id: 'login-btn',
            handler: handlerLogin
        }],
        //                    keys:[{
        //                        //key: 13,
        //                        key:  Ext.event.Event.ENTER,
        //                        fn: 'handlerLogin',
        //                        scope: this
        //                    }],
        listeners: {
            afterrender: function (obj) {
                //Ext.get('login-result').setVisible(false);
//              var username = Ext.util.Cookies.get("username");
                Ext.getCmp('login-username').focus();
//              if (username) {
//                  Ext.getCmp('login-username').setValue(username);
//                  Ext.getCmp('login-password').focus();
//              }
            }
        }
    });

    //语言
    var languageStore = new Ext.data.SimpleStore({
        fields: ['value', 'text'],
        data: [
            ['zh-CN', 'Chinese(中文)'],
            ['en', 'English']
        ]
    });
    var languageForm = new Ext.form.Panel({
        id: 'language-form',
        renderTo: 'div-login-language',
        frame: false,
        baseCls: '',
        padding: '35 20 20 20',
        border: false,
        scrollable: true,
        items: [{
            width: 300,
            fieldStyle: "background-color: rgba(0,0,0,0);background: url('img/login_icon.png') 0px -60px no-repeat;padding: 0 0 0 35px;border:0;height: 100%;",
            xtype: 'combo',
            id: 'login-language',
            name: 'language',
            editable: false,
            displayField: 'text',
            valueField: 'value',
            store: languageStore,
            listeners: {
                select: function (obj) {
                    if (obj.getValue() == 'default') {
                        if (obj.getStore().findRecord('value', browserlang, 0, false, false, true) != null) {
                            obj.setValue(browserlang);
                            localStorage.setItem('user-lang', browserlang);
                        }
                    } else {
                        localStorage.setItem('user-lang', obj.getValue());
                    }
                    Ext.util.Cookies.set('username', Ext.getCmp('login-username').getValue());
                    window.location.reload();
                },
                afterrender: function (obj) {
                    	Ext.Ajax.request({
                            method:  'get',
                            url : 'data/language.xml',
                            success: function(response){
                                //wait.hide();
                                var xmlDoc = response.responseXML;
                                if(xmlDoc){
                                  var result = Ext.DomQuery.selectValue('name', xmlDoc);
                                }

                            },
                            failure: function(){
                                //wait.hide();
                                console.log('请求失败！')
                            },
                            params: {
                                username : 'username'
                            }
                        });

                    var lang = localStorage ? (localStorage.getItem('user-lang') || 'en') : 'en';
                    Ext.getCmp('login-language').setValue(lang);
                }
            }
        }],
    });

    //                  登录窗口
    var loginWin = new Ext.Window({
        id: 'login-win',
        layout: 'fit',
        align: 'center',
        //width : 420,
        //minHeight : 370,
        // autoHeight: true,
        baseCls: '',
        shadow: false,
        resizable: false,
        draggable: false,
        border: false,
        maximizable: false,
        closeAction: 'close',
        closable: false,
        items: [loginForm]
    });
    loginWin.show();
    Ext.on('resize', function () {
        Ext.getCmp('login-win').center();
    });
    Ext.QuickTips.init();

    function handlerLogin() {
        if (loginForm.form.isValid()) {
            //var wait = new Ext.LoadMask(loginForm, { msg : l.cp.common.pleasewait, removeMask: true});
            //wait.show();
            Ext.get('login-result').setVisibility(false);
            var formParams = loginForm.getForm().getValues();
            var username = formParams['loginname'];
            var password = formParams['password'];
            if (!username) {
                Ext.getCmp('login-result').setText(l.login.enterusername);
                Ext.get('login-result').setVisibility(true);
                Ext.getCmp('login-username').focus();
                return;
            }
            if (/[:!$()\/#;,\[\]\\\"=<>&'`^%{}|\ ]/.test(username)) {
                Ext.getCmp('login-result').setText(l.cp.valid.invalidnameconfig);
                Ext.get('login-result').setVisibility(true);
                Ext.getCmp('login-username').focus();
                return;
            }
            if (!password) {
                Ext.getCmp('login-result').setText(l.login.enterpassword);
                Ext.get('login-result').setVisibility(true);
                Ext.getCmp('login-password').focus();
                return;
            }
            var md5secret = hex_md5(password);
            //                      console.log(md5secret)
            Ext.Ajax.request({
                method: 'get',
                url: 'data/login.xml',
                success: function (response) {
                    //wait.hide();
                    var xmlDoc = response.responseXML;
                    if (xmlDoc) {
                        var result = Ext.DomQuery.selectValue('result', xmlDoc);
                        console.log('result:' + result);
                        if (result == -1) {
                            Ext.getCmp('login-result').setText(l.login.loginerror);
                        } else if (result == -2) {
                            Ext.getCmp('login-result').setText(l.login.findpassfiveerror);
                        } else {
                            Ext.getCmp('login-result').setText(l.cp.common.event1001); //
                            setTimeout(function () {
                                window.location = 'index.html'
                            }, 1200);
                        }
                        Ext.get('login-result').setVisibility(true);
                    }

                },
                failure: function () {
                    //wait.hide();
                    console.log('请求失败！')
                },
                params: {
                    username: username,
                    password: md5secret
                }
            });
        }
    };
});