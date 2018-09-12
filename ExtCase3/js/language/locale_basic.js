var lang = localStorage ? (localStorage.getItem('user-lang') || 'en') : 'en';
if(typeof randomID == 'undefined'){
    randomID = Math.random();
}
var syscorefile = './js/language/slang_' + lang + '.js';
var extjsfile = './js/language/ext-lang-' + lang + '.js';
// var pbxcorefile = '../language/plang_' + lang + '.js';

document.write('<script type="text/javascript" src="'+syscorefile+'?ver'+randomID+'"></script>');
document.write('<script type="text/javascript" src="'+extjsfile+'?ver='+randomID+'"></script>');
// document.write('<script type="text/javascript" src="'+pbxcorefile+'"></script>');
l.cp.common.copyright = "Copyright &copy; 2006-2018 Yeastar Information Technology Co., Ltd.";
l.cp.common.copyrightcal4care= "Copyright &copy; 2008-2018 CalnCall  All Rights Reserved.";
l.cp.common.copyrighttelovox = "Copyright &copy; 2013-2018 Telovox LLC. All Rights Reserved.";
l.cp.common.copyrightgurlavi = "Copyright &copy; 2015 Gur Lavi Corp. All Rights Reserved.";
l.cp.common.copyrightbircom = "Telif hakkı © 2006-2018 Xpeech Technologies. Tüm hakları saklıdır.";
l.cp.common.notforsale = "Demo only, not for sale";
if(lang == 'zh-CN'){
	l.cp.common.copyright = "版权所有&copy; 2006-2018 厦门朗视信息科技有限公司";
}else if(lang == 'zh-TW'){
	l.cp.common.copyright = "版權所有&copy; 2006-2018 廈門朗視信息科技有限公司";
}
//var pbxpath = '/apps/pbxweb';
//document.write('<script type="text/javascript" src="'+pbxpath+'/language/pbxinstall.js?ver='+randomID+'"></script>');
function getUrlParam(param) {
	var params = Ext.urlDecode(location.search.substring(1));
	return param ? params[param] : params;
}