// v30.7.0.11
ns.register("l.login");//使用前先注册命名空间

l.login.configuration = "S 系列配置面板";
l.login.login = "登录";
l.login.forgetpass = "忘记密码？";
l.login.enterusername = "请输入用户名。";
l.login.enterpassword = "请输入密码。";
l.login.loginerror = "用户名或密码错误。";
l.login.loginfiveerror = "对不起，您已连续登录失败5次，请10分钟后再试。";
//l.login.findpass = "找回密码";
//l.login.findpasstip = "请输入用户名<br>修改密码的链接将发送到该用户所绑定的邮箱";
l.login.username = "用户名";
l.login.newpwd = "新密码";
l.login.repeatnewpwd = "重新输入新密码";

ns.register("l.desktop");
l.desktop.language = "语言";
l.desktop.mysetting = "个人设置";
l.desktop.logout = "登出";

ns.register("l.shortcut");
l.shortcut.controlPanel = "配置";
l.shortcut.cdrRecord = "通话记录和录音";
l.shortcut.status = "状态";
l.shortcut.pbxmonitor = "PBX状态";
l.shortcut.resourcemonitor = "系统状态";
l.shortcut.app = "应用套件中心";
l.shortcut.maintance = "维护";
l.shortcut.guide = "帮助";
l.shortcut.me = "Me";
l.shortcut.ldapserver = "LDAP服务器";

ns.register("l.tab");
l.tab.settings = "设置";
l.tab.cdrandrecord = "通话记录和录音";
l.tab.monitor = "状态";
l.tab.others = "其他";
l.tab.app = "应用套件";

ns.register("l.operation");
l.operation.deleting="没有任何行被选中，无法进行删除操作";
l.operation.nicknameChecked="不能含有&,;’\#+@以及空";
l.operation.nicknameEmpty="Nick Name不能为空！";
l.operation.nicknameMax="Nick Name最多63个字符！";
l.operation.mobilenumberEmpty="Mobile Number不能为空！";
l.operation.mobilenumberMin="Mobile Number只能是数字或+开头，且不大于15位";
l.operation.mobilenumberMinlength="Mobile Number长度要<=15";
l.operation.groupSelected="Group未选择！";
l.operation.groupadd="请输入组名";
l.operation.nicknameRepeat="用户名重复，请重新输入";
l.operation.mobilenumberRepeat = "Mobile Number重复，请重新输入";
l.operation.groupSaving = "保存中...";
l.operation.sumOver="总数超过500,保存失败！";
l.operation.add = "添加";
l.operation.bulkadd = "批量添加";
l.operation.edit = "编辑";
l.operation.editsel = "编辑选中项";
l.operation.modify = "修改";
l.operation.bulkmodify = "批量修改";
l.operation.del = "删除";
l.operation.bulkdel = "批量删除";
l.operation.delsel = "删除选中项";
l.operation.upload = "上传";
l.operation.download = "下载";
l.operation.operation = "操作";
l.operation.drag = "拖拽";
l.operation.move = "移动";
l.operation.addnew = "新建";
l.operation.btnimport = "导入";
l.operation.btnexport = "导出";
l.operation.play = "播放";
l.operation.record = "录音";
l.operation.test = "测试";
l.operation.addnetdisk = "新建网络磁盘";
l.operation.delfile = "删除文件";
l.operation.updatedir = "编辑保留音列表";
l.operation.adddir = "添加保留音列表";
l.operation.backup = "备份";
l.operation.restore = "还原";
l.operation.start = "开始";
l.operation.stop = "结束";
l.operation.install = "安装";
l.operation.uninstall = "卸载";
l.operation.dellog = "删除日志";
l.operation.reboot = "重启";
l.operation.reset = "重置";
l.operation.login = "登录";
l.operation.logout = "退出";
l.operation.forgetpwd = "忘记密码";
l.operation.upgrade = "升级";
l.operation.reconnect = "重新连接";
l.operation.setunread = "标记为未读";
l.operation.bulksetunread = "标记为未读";
l.operation.setread = "标记为已读";
l.operation.bulksetread = "标记为已读";
l.operation.addbook = "添加电话簿";
l.operation.delbook = "删除电话簿";
l.operation.addtodesktop = "添加到桌面";
l.operation.removeshortcut = "移除快捷方式";
l.operation.goto = "跳转";
l.operation.displaying = "显示";

ns.register("l.tip");
ns.register("l.tip.time");
l.tip.time.ntpserver = "为时间同步设置NTP服务器地址。";

ns.register("l.tip.network");
l.tip.network.gwnic = "选择了双网卡模式后，需选择默认接口。";
l.tip.network.vlanid = "设置VLAN号码。";
l.tip.network.vlanpriority = "设置VLAN的优先级，默认为0。";
l.tip.network.ipaddress = "请输入设备的IP地址，格式为：XXX.XXX.XXX.XXX。";
l.tip.network.netmask = "请输入子网掩码，格式为：XXX.XXX.XXX.XXX。 ";
l.tip.network.gateway = "请输入默认网关的IP地址，格式为：XXX.XXX.XXX.XXX。";
l.tip.network.dns1 = "请输入首选DNS服务器的IP地址，格式为：XXX.XXX.XXX.XXX。";
l.tip.network.dns2 = "请输入次选DNS服务器的IP地址，格式为：XXX.XXX.XXX.XXX。";

ns.register("l.tip.ddns");
l.tip.ddns.ddnsserver = "请选择一个DDNS服务供应商。";
l.tip.ddns.username = "您在DDNS服务供应商网站上注册的用户名。";
l.tip.ddns.password = "您在DDNS服务供应商网站上注册的密码。";
l.tip.ddns.freednshash = "请输入DDNS服务提供商提供的Hash字段。";
l.tip.ddns.domain = "请输入域名。";

ns.register("l.tip.email");
l.tip.email.email = "请输入邮箱地址。";
l.tip.email.secret = "如果开启了授权码，请输入授权码；如果未开启，请输入邮箱的密码。";
l.tip.email.sendername = "请输入邮件的发件人名称。";
l.tip.email.smtpserver = "请填写发送邮件服务器的地址和端口。如：smtp.sina.com:25。";
l.tip.email.pop3server = "请填写接收邮件服务器的地址和端口。如：pop.sina.com:110。";
l.tip.email.usessl = "采用TLS发送安全邮件。";
l.tip.email.test = "测试该邮件能否成功发送及接收邮件。";

ns.register("l.tip.eventlog");
l.tip.eventlog.eventtype="请选择一个您要查询的事件类型。";
l.tip.eventlog.eventname="请选择一个您要查询的事件名称。";
l.tip.eventlog.time="事件发生的时间，支持选择一个时间范围。";

ns.register("l.tip.eventsetting");
l.tip.eventsetting.subject="通知邮件的主题";
l.tip.eventsetting.notifycontext="通知邮件的内容";

ns.register("l.tip.vpn");
l.tip.vpn.serveraddr="请填写OpenVPN的服务器地址。";
l.tip.vpn.protocol="请选择传输协议，需与服务端保持一致。";
l.tip.vpn.username="请设置用户名。";
l.tip.vpn.encryption="请选择加密方法，需与服务端保持一致。";
l.tip.vpn.proxyserver="设置代理服务器。";
l.tip.vpn.serverport="请填写OpenVPN的服务器端口，默认为1194。";
l.tip.vpn.device="请选择创建的通信隧道类型，需与服务端保持一致，选项有：<br>"
+"· TUN：创建一个路由的IP通道；<br>"
+"· TAP：创建一个以太网通道；";
l.tip.vpn.password="请设置密码。";
l.tip.vpn.compression="请设置是否在VPN链路上进行压缩，需与服务端保持一致。";
l.tip.vpn.proxyport="设置代理服务器的端口。";
l.tip.vpn.cacertfile="上传一个CA证书文件。";
l.tip.vpn.certfile="上传一个客户端证书文件。";
l.tip.vpn.keyfile="上传一个客户端密钥文件。";
l.tip.vpn.tlsauth="设置是否开启TLS安全传输，如启用，请上传TA密钥文件。";
l.tip.vpn.takeyfile="上传一个TA密钥文件，该密钥文件可用于防御恶意攻击。";

ns.register("l.tip.fwrules");
l.tip.fwrules.enable="设置是否启用防火墙，启用后则防火墙规则生效，系统运行更安全、稳定。";
l.tip.fwrules.disableping="是否允许他人使用ping命令来探测本机。";
l.tip.fwrules.dropall="启用该设置后，当目标机发向本机的UDP数据包或TCP连接都不符合以下规则时，则将被全部丢弃。请慎重选择是否启用该功能，以免造成WEB、SSH等功能无法使用。";
l.tip.fwrules.rulename="设置规则的名称";
l.tip.fwrules.fwdescribe="规则的描述。例如“该规则启用后，只允许内网登录系统进行管理。”";
l.tip.fwrules.action="设置本条规则采取的动作。";
l.tip.fwrules.protocol="规则所针对的协议。";
l.tip.fwrules.mac = "规则所针对的MAC地址。MAC地址的格式必须是：XX:XX:XX:XX:XX:XX。";
l.tip.fwrules.ip="规则所针对的IP地址。IP地址的格式必须是：IP地址/子网掩码。例如：<br>"
+"192.168.5.100/255.255.255.255表示规则只针对IP地址：192.168.5.100 <br>"
+"216.207.245.47/255.255.255.255表示规则只针对IP地址：216.207.245.47<br>"
+"192.168.5.0/255.255.255.0表示规则针对192.168.5.X网段的所有IP地址。";
l.tip.fwrules.port="输入格式为起始端口：结束端口。结束端口必须大于或等于起始端口。";

ns.register("l.tip.defense");
l.tip.defense.port="输入需要自动防御的端口。";
l.tip.defense.protocol="选择需要自动防御的通讯协议。";
l.tip.defense.packets="“时间间隔”内允许接收的数据包数量。“时间间隔”内，若来自某个IP的数据包数量超过本阀值，则该IP会被列入IP黑名单。";
l.tip.defense.fwinterval="接收数据包的时间间隔，单位为秒。";

ns.register("l.tip.service");
l.tip.service.webprotocol = "请选择网页访问时的协议类型。默认为HTTPS。";
l.tip.service.webport = "设置网页访问的端口。默认为8088。";
l.tip.service.redirecturl ="如果启用，则使用HTTP协议访问80端口会被自动重定向到HTTPS的对应端口。";
l.tip.service.httpscert ="选择HTTPS协议使用的证书。默认为None。";
l.tip.service.enablessh="设置是否启用SSH并设置其对应端口，默认为8022。本设置常用于调试，开启后，用户可以通过SSH连接到PBX。关闭该端口可提高系统安全性，建议关闭该端口。";
l.tip.service.enableftp="设置是否启用FTP并设置其对应端口，默认为21。开启后，用户可以使用浏览器通过FTP连接到PBX。";
l.tip.service.enabletftp="设置是否启用TFTP。";
l.tip.service.bindport="设置IAX端口，默认为4569。";
l.tip.service.udpport="设置SIP UDP端口，默认为5060。";
l.tip.service.enabletcp="设置是否启用SIP TCP并设置其对应端口,默认为5060。";
l.tip.service.enabletls="设置是否启用SIP TLS并设置其对应端口,默认为5061。";
l.tip.service.routers="填写网关，默认为本设备的IP.";
l.tip.service.subnetmask="请输入子网掩码，格式为：XXX.XXX.XXX.XXX。";
l.tip.service.dns1="请输入首选DNS服务器的IP地址，格式为：XXX.XXX.XXX.XXX。";
l.tip.service.dns2="请输入次选DNS服务器的IP地址，格式为：XXX.XXX.XXX.XXX。";
l.tip.service.ipfrom="请填写DHCP服务器分配IP的地址范围，起始-结束。";
l.tip.service.tftpserver="本设置用于“自动配置”功能，话机将会从本TFTP服务器获取自动配置的文件。当该功能用于配置潮流或松下或Avantec话机时，直接填写服务器IP地址，格式为：XXX.XXX.XXX.XXX，如：192.168.5.150；配置其它话机时，需输入完整的tftp地址，格式为：tftp://XXX.XXX.XXX.XXX，如：tftp://192.168.5.150。";
l.tip.service.ntpserver="本设置用于为其他设备提供NTP服务器，输入格式为：XXX.XXX.XXX.XXX，如192.168.5.150。默认为本设备的IP.";
l.tip.service.enableami="Asterisk 控制接口（AMI）允许管理客户端程序连接到一个 asterisk 实例并且可以通过TCP/IP 流发送命令或读取事件。";
l.tip.service.ippermit="指定某一IP或者网段允许使用AMI。格式为IP地址/掩码，例如：<br>"
+"192.168.5.100/255.255.255.255将允许IP192.168.5.100使用AMI；<br>"
+"192.168.5.0/255.255.255.0将允许网段192.168.5.0内的所有IP地址使用AMI。";

ns.register("l.tip.database");
l.tip.database.username="设置用户名。该用户名可以被第三方平台用于登录PBX的数据库。";
l.tip.database.password="设置密码。该密码可以被第三方平台用于登录PBX的数据库。";
l.tip.database.host="指定某一IP或者网段允许访问PBX的数据库。格式为XXX.XXX.XXX.XXX，XXX可以为具体地址或者%，例如：<br>"
+"216.207.245.47将允许IP216.207.245.47访问PBX的数据库；<br>"
+"192.168.5.%将允许网段192.168.5.XXX内的所有IP地址访问PBX的数据库。";

ns.register("l.tip.storage");
l.tip.storage.slotcdr="请选择一个可用的设备用来存放您的通话记录文件。默认为保存在本地。";
l.tip.storage.slotrecording="请选择一个可用的外部存介质用来存放您的录音文件。如您选择的存储介质为SD卡或者TF（Micro-SD）卡时，我们强烈建议您选择写入速度大于等于60MB/s的卡。";
l.tip.storage.slotvm="请选择一个可用的设备用来存放您的语音留言和一键录音文件。默认保存在本地。";
l.tip.storage.slotlog="请选择一个可用的设备用来存放您的日志文件。此项包括该设备的所有系统日志。默认保存在本地。";
l.tip.storage.name="请输入该网络磁盘的名称。";
l.tip.storage.host="请输入网络磁盘的地址或IP。";
l.tip.storage.sharename="输入网络磁盘共享的文件夹名称。";
l.tip.storage.username="输入连接该网络磁盘所需的用户名。";
l.tip.storage.password="输入连接该网络磁盘所需的密码。";
l.tip.storage.maxnumbercdr="通话记录保存的最大条数，默认为100000条，超过则删除最旧的数据，始终保存最新的数据。";
l.tip.storage.keepcdrday="通话记录保存的最大天数，默认为180，超过则删除最旧的数据，始终保存最新的数据。";
l.tip.storage.maxnumbervm="每个分机的语音留言和一键录音分别可保存的最大文件数，默认为50条，超过则删除最旧的数据，始终保存最新的数据。";
l.tip.storage.keepvmminute="每个分机语音留言和一键录音分别可保存的最大分钟数，默认为100，超过则删除最旧的数据，始终保存最新的数据。";
l.tip.storage.maxusagedevice="录音文件保存最大占存储空间的百分比，默认为80%。超过则删除最旧的数据，始终保存最新的数据。";
l.tip.storage.keeprecordday="录音文件保存的最大天数，默认为180，超过则删除最旧的数据，始终保存最新的数据。";

ns.register("l.tip.contact");
l.tip.contact.extensionid="请选择分机联系人，也可以选择“自定义”手动创建联系人。";
l.tip.contact.contact="请输入自定义联系人的姓名。";
l.tip.contact.method="请选择事件发生时，通知该联系人的方式。";
l.tip.contact.email="事件发生时，邮件将会被发往该邮箱地址。如选择“发送邮件”，本项为必填。";
l.tip.contact.mobile="事件发生时，将会拨打或者发送短信给该号码。如选择“拨打手机”或者“短信通知”，本项为必填。";

ns.register("l.tip.upgrade");
l.tip.upgrade.type="请选择升级的方式，选项有：<br>·浏览文件：选择一个本地文件上传；<br>· TFTP服务器：从TFTP服务器下载固件；<br>· HTTP地址：从HTTP地址下载固件。";

ns.register("l.tip.systemlog");
l.tip.systemlog.debuglevel="请选择系统日志记录的级别。<br>"
+"注：当启用BRI调试时，需勾选Information后BRI才会加入调试的日志信息中。";

ns.register("l.tip.userpermission");
l.tip.userpermission.id="请选择一个要分配权限的分机用户。";
l.tip.userpermission.type="设置该分机用户所拥有的权限。";
l.tip.userpermission.viewrecord="勾选后，将允许该用户查看和下载录音文件。";
l.tip.userpermission.cdrextensions="可允许该用户查看和下载所有分机或特定分机的CDR。";

ns.register("l.cp.title");
l.cp.title.pbx = "PBX";
l.cp.title.network = "网络";
l.cp.title.system = "系统";
l.cp.title.event = "事件中心";

ns.register("l.cp.alert");
l.cp.alert.tip = "";
l.cp.alert.warning = "警告";
l.cp.alert.deletedSure = "确定要删除";
l.cp.alert.functionMenu = "功能菜单";
l.cp.alert.mainContain = "主题内容显示";
l.cp.alert.deleting = "确定要删除吗?";
l.cp.alert.fxsPortExist = "此端口正在被使用中，如果选择此端口，正在使用该端口的分机将无法继续使用。";
l.cp.alert.extselone = "请至少选择一条分机。";
l.cp.alert.extrepeat = "分机已经存在。";
l.cp.alert.extnamerepeat = "该名称已被使用。";
l.cp.alert.extemailrepeat = "该邮箱已被使用。";
l.cp.alert.extmobilerepeat = "该移动分机已被使用。";
l.cp.alert.extmobileempty = "请输入移动分机";
l.cp.alert.extemailempty = "启用发送语音留言到邮箱时，请输入邮箱地址。";
//l.cp.alert.extlistexist = "您所要创建的分机范围里，部分分机号已存在，仅不存在的分机会被创建成功。";
l.cp.alert.tipdel = "您确定要删除该选项？";
l.cp.alert.tipdelsel = "您确定要删除所选项？";
l.cp.alert.tipdelselgroup="确认删除所选的分机组?";
l.cp.alert.tipselone = "请至少选择一项。"; 
l.cp.alert.tipseloneextend="请至少选择一个分机进行删除。";
l.cp.alert.tipselonegroup="请至少选择一个分机组进行删除。";
l.cp.alert.extoutrange = "创建的分机号不属于有效的分机范围。";
l.cp.alert.patternrepeat = "重复的呼出模式。";
l.cp.alert.outrouterrepeat = "该呼出路由的名称已存在。";
l.cp.alert.selonepattern = "请至少配置一个呼出模式。";
l.cp.alert.seloneextension = "请为该呼出路由选择分机。";
l.cp.alert.selonetrunk = "请为该路由选择中继。";
l.cp.alert.inrouterrepeat = "该呼入路由的名称已存在。";
l.cp.alert.validdod = "请输入一个合法的DOD范围。";
l.cp.alert.dodcntunmatch = "您所要添加的DOD个数与所选择的分机数不匹配。";
l.cp.alert.enterdod = "请输入DOD。";
l.cp.alert.seloneexten = "请至少选择一个分机。";
l.cp.alert.selotherexten = "分机已经被添加，请选择其他分机。";
l.cp.alert.didprefixtip = "DID号码和来电号码的乘积限制为300个。";
l.cp.alert.rangeerror = "输入范围的后者必须大于前者。";
l.cp.alert.selothertrunk = "物理中继不允许被删除。";
l.cp.alert.outrange = "该号码不属于有效的号码范围";
l.cp.alert.seloneoutrouter = "请至少选择一条呼出路由。";
l.cp.alert.tipdelphysical = "所选择的物理线路不会被删除。";
l.cp.alert.namerepeat = "该名称已存在。";
l.cp.alert.numberrepeat = "该号码已存在。";
l.cp.alert.nameisnan = "用户名不能为纯数字。";
l.cp.alert.coderepeat = "该特征码已存在。";
l.cp.alert.pinlistlength =  "号码的长度必须小于8。";
l.cp.alert.blacklistlength =  "号码的长度必须小于16。";
l.cp.alert.dodlength =  "DOD号码的长度必须小于15。";
l.cp.alert.exceedlimit = "数量已达到上限。";
l.cp.alert.startltend = "结束时间必须晚于起始时间。";
l.cp.alert.leastoneweekday = "请至少选择一天。";
l.cp.alert.leastonemonth = "请至少选择一个月。";
l.cp.alert.leastoneday = "请至少选择一天。";
l.cp.alert.leastoneexttype = "请至少选择一个分机类型。";
l.cp.alert.hstartleend = "起始时间不得晚于结束时间。";
l.cp.alert.timeconditionrepeat = "重复的时间条件。";
l.cp.alert.rebootnow = "保存成功, 重启后生效。是否立即重启生效？<br>(是-立即重启 否-稍后手动重启)";
l.cp.alert.scoperepeat = "号码段重复，请修改";
l.cp.alert.callparkrepeat = "该号码段与停泊分机范围重复。";
l.cp.alert.startendlimit = "起始号码必须小于结束号码 ";
l.cp.alert.rtpportlimit = "起始端口与结束端口的差值必须介于100-10000。起始端口需大于10000。";
l.cp.alert.filenamerepeat = "此文件名已经存在，是否继续上传文件，若继续将覆盖原文件。";
l.cp.alert.seloneconference = "请至少选择一个会议室。";
l.cp.alert.importsuccess = "导入成功";
l.cp.alert.importfailed = "部分导入成功，导入失败原因如下：";
l.cp.alert.importspecial = "含有特殊字符";
l.cp.alert.importmustfill = "必填项未填写";
l.cp.alert.importexistreload = "有些字段已存在，已被覆盖成新值";
l.cp.alert.importfileerror = "文件格式错误";
l.cp.alert.importmaxlimit = "到达最大上限，其余部分记录不导入";
l.cp.alert.importerrorencoding = "请选择一个使用UTF-8编码的CSV文件。";
l.cp.alert.importunknownnode = "导入时将忽略未知电话簿的联系人。请注意：系统电话簿不允许导入";
l.cp.alert.importcheck = "部分字段存在错误，请检查是否有必填项，格式是否正确.";
l.cp.alert.importreplace = "部分字段已经被覆盖.";
l.cp.alert.exportempty = "数据为空，无法导出。";
l.cp.alert.downloadempty = "数据为空，无法下载。";
l.cp.alert.leavewithoutsave = "修改数据尚未保存，确定离开？";
l.cp.alert.maxiprestrict = "允许的IP/子网掩码已达到最大数。";
l.cp.alert.pop3failed = "测试接收邮件失败。";
l.cp.alert.ssmtpfailed = "测试发送邮件失败。";
l.cp.alert.testfail = "测试失败。";
l.cp.alert.testsuccess = "测试成功。";
l.cp.alert.maxtime = "时间的数量已达到最大数";
l.cp.alert.formatting = "正在格式化";
l.cp.alert.formatconfirm = "格式化硬盘将会清除全部数据，是否继续？";
l.cp.alert.formatsuccess = "格式化成功。";
l.cp.alert.formatfailed = "格式化失败。";
l.cp.alert.formatfailedinused = "格式化失败，该硬盘可能正在使用中。";
l.cp.alert.formattip = "格式化需要几分钟时间，格式化期间，请不要切断电源或者执行其他操作，否则硬盘可能会被损坏。";
l.cp.alert.removeconfirm = "是否确认移除？";
l.cp.alert.removesuccess = "移除成功。";
l.cp.alert.removefailed = "移除失败！该设备正在使用中，请确认当前是否有通话录音，稍后再尝试移除。";
l.cp.alert.maxitemcount = "已达到上限，请删除后再添加。";
l.cp.alert.bulkmaxitem = "批量创建成功，超过最大限制个数的分机未被创建, 最大限制为: ";
l.cp.alert.systeminuse = "该设备正在使用中。请在操作前，修改存储位置。";
l.cp.alert.restore = "该操作将会擦除当前所有配置。是否确认继续？\n\n还原完成后，需要重启系统才能生效。\n\n您可以根据提示选择立即重启或者配置完再手动重启生效。"
l.cp.alert.packets = "包的数量必须介于1-120。";
// l.cp.alert.fwdropall = "请在启用“拦截所有”前，至少添加一条允许TCP连接到SSH: %p1, %p3: %p2的规则。";
l.cp.alert.fwdropall = "请在启用“拦截所有”前，至少添加以下白名单规则:"
+"<br>• 允许TCP连接到SSH:{0}，HTTPS：{2}；"
+"<br>• 允许UDP连接到DNS：{3}。";
l.cp.alert.rebooting = "正在重启";
l.cp.alert.reboottext = "重启需要1分钟时间，请稍候...";
l.cp.alert.backupfilebroken = "备份文件已经被损坏。请重新备份或者使用新的备份文件。";
l.cp.alert.reboot = "重启";
l.cp.alert.emailnotexist = "该用户未绑定邮箱地址，请联系管理员修改密码。";
l.cp.alert.usernotexist = "该用户不存在。请输入有效用户。";
l.cp.alert.findpasssuccess = "邮件已发送到对应的邮箱地址。请查收邮件，并在30分钟内根据邮件内容重新设置密码。";
l.cp.alert.findpassfailed = "发送邮件失败。";
l.cp.alert.pwdunmatch = "密码不匹配。请重试。";
l.cp.alert.modifypasssuccess = "密码已被重置。请用新密码重新登录。";
l.cp.alert.modifypassfailed = "该用户不存在。请确认链接是否有效。";
l.cp.alert.invalidurl = "该重置链接已超时。";
l.cp.alert.modifypasserror = "重置密码失败。";
l.cp.alert.suretoreboot = "您确定要重启设备？";
l.cp.alert.suretoreset = "该操作将会使PBX丢失所有配置，您确定要重置设备到出厂设置？";
l.cp.alert.downloadfail = "下载失败。";
l.cp.alert.downloading = "正在下载";
l.cp.alert.dwonloadtext = "正在下载...";
l.cp.alert.backupfilebroken = "备份文件已经被损坏。请重新备份或者使用新的备份文件";
l.cp.alert.imagefileerror = "文件错误。";
l.cp.alert.upgradefailed = "升级失败。请检查填写文件是否存在，或者网络是否异常。";
l.cp.alert.upgradeing = "正在升级";
l.cp.alert.upgradetext = "升级需要2分钟时间，请稍候...";
l.cp.alert.rxflasherror = "最小闪断时间必须小于最大闪断时间。"
l.cp.alert.logout = "是否确定登出?";
l.cp.alert.detectnew = "检查到新固件";
l.cp.alert.updatelater = "暂不更新";
l.cp.alert.updatenow = "立刻更新";
l.cp.alert.nonewversion = "当前为最新版本。";
l.cp.alert.oldpwdempty = "请输入旧密码。";
l.cp.alert.newpwdempty = "请输入新密码。";
l.cp.alert.retypenewpwdempty = "请再次输入新密码。";
l.cp.alert.oldpwdunmatch = "密码错误，请重试。";
l.cp.alert.oldnewpwdsame = "旧密码与新密码不可以一样。";
l.cp.alert.newpwddefault = "新密码不能与默认密码一样。";
l.cp.alert.modifysuccess = "修改成功。";
l.cp.alert.modifyfailed = "修改失败。";
l.cp.alert.userrepeat = "该用户已存在。";
l.cp.alert.physicalnotallow = "模拟中继和GSM/UMTS中继不支持DID。";
l.cp.alert.addroutefailed = "添加失败。请检查路由或者配置是否正确。";
l.cp.alert.dwonloadingtext = "正在下载...";
l.cp.alert.installingtext = "正在安装...";
l.cp.alert.installfail = "安装失败。";
l.cp.alert.installsuccess = "安装成功。";
l.cp.alert.enablehttps = "端口号设置为80时，重定向无效";
l.cp.alert.callparkpos = "请输入有效的停泊号码范围。";
l.cp.alert.tipdelblacklist = "管理员创建的号码不允许被删除。";
l.cp.alert.tipsetread = "标记为已读？";
l.cp.alert.tipsetunread = "标记为未读？";
l.cp.alert.dnisempty = "请输入DNIS名称。";
l.cp.alert.cbdelay = "回拨延迟时间至少为5秒。";
l.cp.alert.checkwait = "正在检查文件，请稍候。";
l.cp.alert.memberexceed = "成员数超过了最大限制。";
l.cp.alert.ipattack = "发现新的攻击。";
l.cp.alert.registerpasslen = "注册密码的长度至少为";
l.cp.alert.loginpasslen = "用户密码的长度至少为";
l.cp.alert.tipuninstall = "是否确认卸载？";
l.cp.alert.logintimeout = "登录超时，请重新登录...";
l.cp.alert.rebootcall = "当前有通话正在进行中，是否确定继续重启？";
l.cp.alert.resetcall = "当前有通话正在进行中，是否确定继续重置？<br>重置的操作将会清除PBX的所有配置，系统将会恢复出厂设置。";
l.cp.alert.installcall = "当前有通话正在进行中，请稍后再尝试。";
l.cp.alert.upgradecall = "当前有通话正在进行中，是否确定继续升级？";
l.cp.alert.upgradeapp = "当前组件正在升级，请稍后再尝试。";
l.cp.alert.upgradcurrent = "系统升级中，请稍后再尝试。";
l.cp.alert.appinstall = "插件安装成功，将在刷新页面后生效。";
l.cp.alert.appuninstall = "插件卸载成功，将在刷新页面后生效。";
l.cp.alert.noallowreboot = "没有重启权限，请联系管理员";
l.cp.alert.permittediprepeat = "允许的IP已经存在。";
l.cp.alert.tipimportdownload = "是否下载文件查看替换结果？";
l.cp.alert.strongpassnum = "您所输入的注册密码必须包含数字、大小写字母。";
l.cp.alert.strongpass = "您所输入的注册密码必须包含大小写字母。";
l.cp.alert.checkfirmwarefailed = "检测失败,请确定网络正常运行。";
l.cp.alert.maxitemcustomemail = "已达到自定义邮箱的上限";
l.cp.alert.validdest = "请选择一个有效的目的地";

ns.register("l.cp.common");
l.cp.common.rowsperpage = "条/页";
l.cp.common.loading = "加载中";
l.cp.common.show = "显示";
l.cp.common.total = "总共";
l.cp.common.view = "条数";
l.cp.common.add = "新增";
l.cp.common.edit = "编辑";
l.cp.common.deleted = "删除";
l.cp.common.save = "保存";
l.cp.common.ensure = "确认";
l.cp.common.cancel = "取消";
l.cp.common.reboot = "重启";
l.cp.common.pleasewait = "请等待...";
l.cp.common.basic = "基本";
l.cp.common.advanced = "高级";
l.cp.common.general = "常规";
l.cp.common.empty = "无可用项";
l.cp.common.custom = "自定义";
l.cp.common.scustom = "[自定义]";
l.cp.common.unlimited = "无限制";
l.cp.common.dod = "DOD";
l.cp.common.sdefault = "默认";
l.cp.common.available = "可选择";
l.cp.common.selected = "已选择";
l.cp.common.none = "无";
l.cp.common.nosetemail = "未设置邮箱";
l.cp.common.pleasesel = "请选择";
l.cp.common.sun = "星期日";
l.cp.common.mon = "星期一";
l.cp.common.tue = "星期二";
l.cp.common.wen = "星期三";
l.cp.common.thu = "星期四";
l.cp.common.fri = "星期五";
l.cp.common.sat = "星期六";
l.cp.common.jan = "一月";
l.cp.common.feb = "二月";
l.cp.common.mar = "三月";
l.cp.common.apr = "四月";
l.cp.common.may = "五月";
l.cp.common.jun = "六月";
l.cp.common.jul = "七月";
l.cp.common.aug = "八月";
l.cp.common.sep = "九月";
l.cp.common.oct = "十月";
l.cp.common.nov = "十一月";
l.cp.common.dec = "十二月";
l.cp.common.first = "第一个";
l.cp.common.second = "第二个";
l.cp.common.third = "第三个";
l.cp.common.fourth = "第四个";
l.cp.common.last = "最后一个";
l.cp.common.options = "选项";
l.cp.common.uploading = "正在上传...";
l.cp.common.movetop = "置顶";
l.cp.common.movebottom = "置底";
l.cp.common.moveup = "上移";
l.cp.common.movedown = "下移";
l.cp.common.event1000 = "更改超级管理员密码";
l.cp.common.event1001 = "用户登录成功";
l.cp.common.event1002 = "用户登录失败";
l.cp.common.event1003 = "用户被锁定";
l.cp.common.event2000 = "VoIP点对点中继注册失败";
l.cp.common.event2001 = "VoIP注册中继注册失败";
l.cp.common.event2002 = "外线呼出失败";
l.cp.common.event3000 = "CPU使用率过高";
l.cp.common.event3001 = "内存使用率过高";
l.cp.common.event3002 = "通话并发数过高";
l.cp.common.event3003 = "磁盘故障";
l.cp.common.event3004 = "存储空间不足";
l.cp.common.event3005 = "网络异常";
l.cp.common.event3006 = "网络攻击";
l.cp.common.event3007 = "系统重启";
l.cp.common.event3008 = "系统升级";
l.cp.common.event3009 = "系统还原";
l.cp.common.event3010 = "系统重置";
l.cp.common.config = "配置";
l.cp.common.format = "格式化";
l.cp.common.remove = "安全移除"; 
l.cp.common.unmountnet = "卸载网络磁盘";
l.cp.common.notinserted = "未接入";
l.cp.common.unmounted = "未挂载";
l.cp.common.unformatted = "格式错误"; //Unformatted
l.cp.common.all = "所有";
l.cp.common.search = "搜索";
l.cp.common.value = "值";
l.cp.common.browsefile = "浏览文件";
l.cp.common.tftpdownload = "TFTP服务器";
l.cp.common.httpdownload = "HTTP地址";
l.cp.common.tftpurl = "TFTP服务器";
l.cp.common.httpurl = "HTTP地址";
l.cp.common.server = "TFTP服务器";
l.cp.common.filename = "文件名";
l.cp.common.everyday = "每天";
l.cp.common.everysun = "每周日";
l.cp.common.everymon = "每周一";
l.cp.common.everytue = "每周二";
l.cp.common.everywen = "每周三";
l.cp.common.everythu = "每周四";
l.cp.common.everyfri = "每周五";
l.cp.common.everysat = "每周六";
l.cp.common.result = "结果";
l.cp.common.yes = "是";
l.cp.common.no = "否";
l.cp.common.choosefile = "请选择文件";
l.cp.common.detail = "详细";
l.cp.common.auto = "自动";
l.cp.common.seconds = "秒";
l.cp.common.previous = "前一个";
l.cp.common.next = "下一个";
l.cp.common.finish = "结束";
l.cp.common.tippwd = "当前密码不够安全，请修改。";
l.cp.common.tipemail = "邮箱地址可以帮助您找回密码。强烈建议您绑定邮箱地址。";
l.cp.common.donotremind = "不再出现";
l.cp.common.apply = "应用";
l.cp.common.send = "发送";
l.cp.common.prefix = "前缀";

ns.register("l.cp.valid");
l.cp.valid.invalidnumeric = "只允许输入数字。";
l.cp.valid.invalidhost = "只允许输入字母、数字、“_”。";
l.cp.valid.invalidformat = "请按正确的格式输入。";
l.cp.valid.invalidhexnumber = "只允许输入十进制字符、十六进制字符和-，输入格式为XX-XX-XX或者XX。";
l.cp.valid.invalidldapnode = "只允许输入字母、数字、“,”、“=”。";
l.cp.valid.invalidwebspecial = "不允许输入“&\"\'\\<>`|$”中的任意一个字符。";
l.cp.valid.invalidwebspecialimport = "不允许输入“&\"\'\\<>`|$,”中的任意一个字符。";
l.cp.valid.invalidnameconfig = "不允许输入空格以及“:!$()\/#;,[]\\\"=<>&'`^%@{}|”中的任意一个字符。";
l.cp.valid.invalidpwdconfig = "不允许输入“;&\"\'\\<>|”中的任意一个字符以及空格。";
l.cp.valid.invalidfullname = "不允许输入空格以及“!%.@:;&\"\'\\<>`$”中的任意一个字符。";
l.cp.valid.invaliddbgrantpwd = "只允许输入字母、数字以及“.()-@*%~#:?”中的任意一个字符。";
l.cp.valid.numbercomma = "只允许输入数字、“,”。";
l.cp.valid.numberasterisk = "只允许输入数字、“*”。";
l.cp.valid.numberasteriskpound = "只允许输入数字、“*”、“#”。";
l.cp.valid.invalidnumericunlimited = "只允许输入数字、“无限制”。"; //疑惑
l.cp.valid.invalidnumbercommanone = "只允许输入数字、“,”、“无”。";
l.cp.valid.numberplus = "只允许输入数字、“+”。";
l.cp.valid.numberminus = "只允许输入数字、“-”。";
l.cp.valid.numbercommaminus = "只允许输入数字、逗号、“-”。";
l.cp.valid.alphanumeric = "只允许输入字母、数字。";
l.cp.valid.alphanumplus = "只允许输入字母、数字、“+”。";
l.cp.valid.alphanumplusminus = "只允许输入字母、数字、“+”、“-”。";
l.cp.valid.invalidcharacter = "该区域中有无效字符。";
l.cp.valid.invalidsharename = "不允许输入“\/\\:*?<>|&\"\'<>`$”中的任意一个字符。";
l.cp.valid.invalidfile = "只允许输入字母、数字、以及“.-_\\”中的任意一个字符。";
l.cp.valid.invalidcsvfile = "请选择“.csv”文件，并且文件名称不能包含特殊字符。";
l.cp.valid.invalidpinset = "只允许输入数字、“-”。"
l.cp.valid.invalidsyspromptfile = "请选择“.tar”文件，并且文件名称不能包含特殊字符。";
l.cp.valid.invalidpromptfile = "请选择“.wav”、“.WAV”或者“.gsm”文件，并且文件名称不能包含特殊字符。";
l.cp.valid.invalidvpnprofile = "请选择“.tar”或者“.zip”文件，并且文件名称不能包含特殊字符。";
l.cp.valid.invalidcfgfile = "请选择一个“.cfg”文件，并且文件名不能包含特殊字符。";
l.cp.valid.invalidbinfile ="请选择一个“.bin”文件，并且文件名不能包含特殊字符。";
l.cp.valid.invalidxmlfile = "请选择一个“.xml”文件，并且文件名不能包含特殊字符。";
l.cp.valid.invalidsubject = "不允许输入“#[]\\\”中的任意一个字符。";
l.cp.valid.invalidduration = "只允许输入数字、“-”、“=”、“<”、“<=”、“>”、“>=”，且支持输入一个数字范围，如10-40。";
l.cp.valid.invalidbakfile = "请选择“.bak”文件，并且文件名称不能包含特殊字符。";
l.cp.valid.invalidport = "有效的端口范围为0-65535。";
l.cp.valid.invaliddchannel = "D通道的有效范围为1-31。";
l.cp.valid.invalidtjdchannel = "D通道的有效范围为1-24。";
l.cp.valid.invalidemail = "请输入一个有效的邮箱地址，该邮箱地址不能包含特殊字符。";
l.cp.valid.invalidminrxflash = "最小闪断时间的有效范围为100-1000。";
l.cp.valid.invalidrxflash = "最大闪断时间的有效范围为300-1400。";
l.cp.valid.invalidpositivenumber = "只允许输入大于0的数字。";
l.cp.valid.invalidnumberpercent = "请输入一个有效的百分比，有效范围为30-99。";
l.cp.valid.invalidmaxduration = "只允许输入数字、“跟随系统”、“无限制”。";
l.cp.valid.password="两次密码不一致";

ns.register("l.mysettings");
l.mysettings.self = "个人设置";
l.mysettings.setting = "设置";
l.mysettings.oldpassword = "旧密码";
l.mysettings.password = "新密码";
l.mysettings.retypepassword = "再次输入新密码";
l.mysettings.bindemail = "绑定邮箱地址";
l.mysettings.email = "邮箱地址";

ns.register("l.cp.network");
l.cp.network.menunetwork = "网络";
l.cp.network.self = "网络";
l.cp.network.basic = "基本设置";
l.cp.network.vpn = "OpenVPN";
l.cp.network.ddns = "DDNS设置";
l.cp.network.staticroutes = "静态路由";
l.cp.network.hostname = "主机名称";
l.cp.network.mode = "模式";
l.cp.network.dual = "双网卡";
l.cp.network.bridge = "桥接";
l.cp.network.gwnic = "默认接口";
l.cp.network.eth0 = "LAN";
l.cp.network.eth1 = "WAN";
l.cp.network.dhcp = "DHCP";
l.cp.network.staticip = "静态IP地址";
l.cp.network.pppoe = "PPPoE";
l.cp.network.enablevlan = "启用VLAN";
l.cp.network.vlanid = "VLAN号码";
l.cp.network.vlanpriority = "VLAN优先级";
l.cp.network.ipaddress = "IP地址";
l.cp.network.netmask = "子网掩码";
l.cp.network.gateway = "网关";
l.cp.network.dns1 = "首选DNS服务器";
l.cp.network.dns2 = "次选DNS服务器";
l.cp.network.pppoeusername = "用户名";
l.cp.network.pppoepassword = "密码";
l.cp.network.macaddress = "MAC地址";
l.cp.network.reconnect = "重新连接";
l.cp.network.connecttype = "类型";
l.cp.network.status = "状态";

ns.register("l.cp.ddns");
l.cp.ddns.self = "DDNS设置";
l.cp.ddns.ddnsstatus = "DDNS状态";
l.cp.ddns.running = "DDNS正在运行中";
l.cp.ddns.notrunning = "DDNS未运行";
l.cp.ddns.enableddns = "启用DDNS";
l.cp.ddns.ddnsserver = "DDNS服务器";
l.cp.ddns.username = "用户名";
l.cp.ddns.password = "密码";
l.cp.ddns.freednshash = "Hash";
l.cp.ddns.domain = "域名";

ns.register("l.cp.staticroutes");
l.cp.staticroutes.self = "静态路由";
l.cp.staticroutes.routing = "路由表";
l.cp.staticroutes.destination = "目的IP地址";
l.cp.staticroutes.subnet = "子网掩码";
l.cp.staticroutes.gateway = "网关";
l.cp.staticroutes.metric = "跃点";
l.cp.staticroutes.iface = "网口";
//l.cp.staticroutes.eth0 = "LAN";
//l.cp.staticroutes.eth1 = "WAN";
//l.cp.staticroutes.ppp0 = "PPP0";
//l.cp.staticroutes.tun0 = "TUN0";
//
ns.register("l.cp.vpn");
l.cp.vpn.self = "VPN客户端";
l.cp.vpn.type = "配置方法";
l.cp.vpn.detailedcfg = " 手动配置 ";
l.cp.vpn.packagecfg = "上传配置文件";
l.cp.vpn.enable = "启用OpenVPN";
l.cp.vpn.serveraddr = "服务器地址";
l.cp.vpn.serverport = "服务器端口";
l.cp.vpn.protocol = "传输协议";
l.cp.vpn.device = "设备模式";
l.cp.vpn.username = "用户名";
l.cp.vpn.password = "密码";
l.cp.vpn.encryption = "加密方法";
l.cp.vpn.compression = "启用压缩";
l.cp.vpn.proxyserver = "代理服务器";
l.cp.vpn.proxyport = "代理服务器端口";
l.cp.vpn.cacertfile = "CA证书";
l.cp.vpn.certfile = "客户端证书";
l.cp.vpn.keyfile = "客户端密钥";
l.cp.vpn.tlsauth = "TLS认证 ";
l.cp.vpn.takeyfile = "TA密钥";
l.cp.vpn.useprofile = "Enable";
l.cp.vpn.vpnprofile = "VPN配置文件";
l.cp.vpn.status = "状态";
l.cp.vpn.ptp = "P-t-P";

ns.register("l.cp.security");
l.cp.security.menusecurity = "安全中心";

ns.register("l.cp.defense");
l.cp.defense.self = "IP自动防御";
l.cp.defense.add = "添加IP自动防御";
l.cp.defense.edit = "编辑IP自动防御";
l.cp.defense.rules = "自动防御规则";
l.cp.defense.port = "端口";
l.cp.defense.protocol = "协议";
l.cp.defense.rate = "速率";
l.cp.defense.packets = "IP数据包";
l.cp.defense.fwinterval = "时间间隔(s)";

ns.register("l.cp.blockedip");
l.cp.blockedip.self = "IP黑名单";
l.cp.blockedip.datetime = "被攻击时间";
l.cp.blockedip.protocol = "协议";
l.cp.blockedip.dstport = "被攻击端口";
l.cp.blockedip.srcip = "源IP地址";

ns.register("l.cp.fwrules");
l.cp.fwrules.self = "防火墙规则";
l.cp.fwrules.add = "添加防火墙规则";
l.cp.fwrules.edit = "编辑防火墙规则";
l.cp.fwrules.rulename = "名称";
l.cp.fwrules.fwdescribe = "描述";
l.cp.fwrules.action = "动作";
l.cp.fwrules.reject = "拦截";
l.cp.fwrules.accept = "接收";
l.cp.fwrules.ignore = "忽略";
l.cp.fwrules.protocol = "协议";
l.cp.fwrules.mac = "MAC地址";
l.cp.fwrules.ip = "源IP地址/子网掩码";
l.cp.fwrules.port = "端口";
l.cp.fwrules.enable = "启用防火墙";
l.cp.fwrules.disableping = "禁止被Ping";
l.cp.fwrules.dropall = "拦截所有";
l.cp.fwrules.running = "防火墙正在运行中";
l.cp.fwrules.notrunning = "防火墙未启用";
  
ns.register("l.cp.service");
l.cp.service.self = "服务";
l.cp.service.webprotocol = "网页访问协议";
l.cp.service.webport = "端口";
l.cp.service.redirecturl = "从80端口重定向";
l.cp.service.enablehttp = "启用HTTP";
l.cp.service.enablehttps = "启用HTTPS";
l.cp.service.httpscert = "证书";
l.cp.service.enablessh = "启用SSH";
l.cp.service.enableftp = "启用FTP";
l.cp.service.enabletftp = "启用TFTP";
l.cp.service.bindport = "IAX端口";
l.cp.service.udpport = "SIP UDP端口";
l.cp.service.enabletcp = "启用SIP TCP";
l.cp.service.enabletls = "启用SIP TLS";
l.cp.service.enable = "启用DHCP服务器";
l.cp.service.routers = "网关";
l.cp.service.status = "状态";
l.cp.service.dhcprunning = "DHCP正在运行.";
l.cp.service.dhcpnotrunning = "DHCP未运行";
l.cp.service.subnetmask = "子网掩码";
l.cp.service.dns1 = "首选DNS服务器";
l.cp.service.dns2 = "次选DNS服务器";
l.cp.service.ipfrom = "分配的IP地址";
l.cp.service.tftpserver = "TFTP服务器";
l.cp.service.ntpserver = "NTP服务器";
l.cp.service.enableami = "启用AMI";
l.cp.service.username = "用户名";
l.cp.service.password = "密码";
l.cp.service.amiport = "端口";
l.cp.service.ippermit = "允许的IP/子网掩码";

ns.register("l.cp.cert");
l.cp.cert.self = "证书";
l.cp.cert.name = "名称";
l.cp.cert.type = "类型";
l.cp.cert.issuedto = "发布机构";
l.cp.cert.expiration = "过期时间";
l.cp.cert.upload = "上传证书";
l.cp.cert.trusted  = "受信任证书";
l.cp.cert.server = "PBX证书";
l.cp.cert.choosefile = "请选择一个证书";
l.cp.cert.uploadsuccess = "上传成功";
l.cp.cert.uploadfailed = "上传失败，请选择正确格式的文件上传。";

ns.register("l.cp.database");
l.cp.database.self = "数据库授权";
l.cp.database.add = "新增数据库授权";
l.cp.database.edit = "编辑数据库授权";
l.cp.database.username = "用户名";
l.cp.database.password = "密码";
l.cp.database.host = "授权的IP";

ns.register("l.cp.userpermission");
l.cp.userpermission.menuuserpermission = "用户权限";
l.cp.userpermission.self = "用户权限";
l.cp.userpermission.username = "用户";
l.cp.userpermission.id = "用户";
l.cp.userpermission.type = "设置权限等级为";
l.cp.userpermission.admin = "管理员";
l.cp.userpermission.operator = "操作员";
l.cp.userpermission.custom = "自定义";
l.cp.userpermission.add = "添加用户权限";
l.cp.userpermission.edit = "编辑用户权限";
l.cp.userpermission.displaytype = "权限";
l.cp.userpermission.viewrecord = "录音权限";
l.cp.userpermission.yes = "所有分机";
l.cp.userpermission.no = "已选分机";
l.cp.userpermission.cdrextensions = "允许查看和下载";

ns.register("l.cp.time");
l.cp.time.menutime = "日期和时间";
l.cp.time.self = "日期和时间";
l.cp.time.currenttime = "当前时间";
l.cp.time.timezone = "时区";
l.cp.time.enabledst = "夏令时";
l.cp.time.enablentp = "自动同步网络时间";
l.cp.time.ntpserver = "NTP服务器";
l.cp.time.enablemanually = "手动设置";
l.cp.time.date = "日期";
l.cp.time.time = "时间";
l.cp.time.no = "禁用";
l.cp.time.yes = "自动";

ns.register("l.cp.email");
l.cp.email.menuemail = "邮箱";
l.cp.email.self = "邮箱";
l.cp.email.email = "邮箱地址";
l.cp.email.secret = "密码";
l.cp.email.sendername = "发件人名称";
l.cp.email.smtpserver = "发送服务器（SMTP）";
l.cp.email.pop3server = "接收服务器（POP3）";
l.cp.email.usessl = "启用TLS";
        
ns.register("l.cp.storage");
l.cp.storage.menustorage = "存储";
l.cp.storage.self = "存储";
l.cp.storage.preference = "常规";
l.cp.storage.autoclean = "自动清理";
l.cp.storage.enablecdrautoclean = "启用自动清理";
l.cp.storage.maxnumbercdr = "保存的最大条数";
l.cp.storage.keepcdrday = "保存的最大天数";
l.cp.storage.enablevmautoclean = "启用自动清理";
l.cp.storage.maxnumbervm = "保存的最大文件数";
l.cp.storage.keepvmminute = "保存的最大分钟数";
l.cp.storage.enablerecordautoclean = "启用自动清理";
l.cp.storage.maxusagedevice = "存储设备最大的使用率（%）";
l.cp.storage.keeprecordday = "保存的最大天数";
l.cp.storage.enablelogautoclean = "启用自动清理";
l.cp.storage.maxnumberlog = "保存的最大条数";
l.cp.storage.keeplogday = "保存的最大天数";
l.cp.storage.showcdr = "通话记录自动清理";
l.cp.storage.voicemail = "语音留言和一键录音文件的自动清理";
l.cp.storage.showrecording = "录音文件的自动清理";
l.cp.storage.logs = "日志的自动清理";
l.cp.storage.slotcdr = "通话记录";
l.cp.storage.slotvm = "语音留言和一键录音";
l.cp.storage.slotrecording = "录音";
l.cp.storage.slotlog = "日志";
l.cp.storage.name = "名称";
l.cp.storage.type = "类型";
l.cp.storage.total = "总容量";
l.cp.storage.unused = "剩余容量";
l.cp.storage.usepercent = "使用率";
l.cp.storage.list = "存储设备列表";
l.cp.storage.locations = "存储位置设置";
l.cp.storage.netdiskstatus = "使用状态";
l.cp.storage.enable = "启用";
l.cp.storage.host = "IP地址";
l.cp.storage.sharename = "共享名称";
l.cp.storage.username = "连接的用户名";
l.cp.storage.password = "连接的密码";
l.cp.storage.recoding = "录音设置";

ns.register("l.cp.eventsetting");
l.cp.eventsetting.self = "事件设置";
l.cp.eventsetting.name = "事件名称";
l.cp.eventsetting.record = "记录";
l.cp.eventsetting.notification = "通知";
l.cp.eventsetting.editmessage = "编辑通知内容";
l.cp.eventsetting.operation = "用户操作事件";
l.cp.eventsetting.telephony = "话务事件";
l.cp.eventsetting.system = "系统事件";
l.cp.eventsetting.msgtemplate = "通知内容模板设置";
l.cp.eventsetting.variable = "模板变量";
l.cp.eventsetting.subject = "主题";
l.cp.eventsetting.notifycontext = "内容";
l.cp.eventsetting.variable1000 = "IP地址： ${ipaddr}";
l.cp.eventsetting.variable1001 = "用户名： ${username}<br>IP地址： ${ipaddr}";
l.cp.eventsetting.variable1002 = "用户名： ${username}<br>IP地址： ${ipaddr}";
l.cp.eventsetting.variable1003 = "用户名: ${username}<br>IP地址: ${ipaddr}";
l.cp.eventsetting.variable2000 = "VoIP点对点中继提供商 : ${provider}<br>协议: $(protocol)<br>主机名 : ${hostname}";
l.cp.eventsetting.variable2001 = "VoIP注册中继提供商 : ${provider}<br>协议 : $(protocol)<br>主机名 : ${hostname}<br>用户名 : ${username}";
l.cp.eventsetting.variable2002 = "中继提供商 : ${provider}<br>主叫号码 : ${srcnumber}<br>被叫号码 : ${destnumber}";
l.cp.eventsetting.variable3000 = "当前CPU使用率 : ${curusage}";
l.cp.eventsetting.variable3001 = "当前内存使用率 : ${curusage}";
l.cp.eventsetting.variable3002 = "最大并发数 : ${concurrentcall}<br>实时并发数 : ${realtimecall}";
l.cp.eventsetting.variable3003 = "硬盘 : ${harddisk}";
l.cp.eventsetting.variable3004 = "存储设备 : ${device}<br>总容量： : ${tsize}<br>可用容量： : ${asize}";
l.cp.eventsetting.variable3005 = "原因 : ${cause}";
l.cp.eventsetting.variable3006 = "IP地址 : ${ipaddr}";
l.cp.eventsetting.variable3007 = "原因 : ${cause}<br>用户名 : ${username}";
l.cp.eventsetting.variable3008 = "结果 : ${result}<br>旧版本号 : ${oldversion}<br>新版本号 : ${newversion}";
l.cp.eventsetting.variable3009 = "用户名 : ${username}";
l.cp.eventsetting.variable3010 = "[无]";

ns.register("l.cp.contact");
l.cp.contact.self = "通知联系人";
l.cp.contact.name = "名称";
l.cp.contact.method = "通知方式";
l.cp.contact.add = "添加联系人";
l.cp.contact.edit = "编辑联系人";
l.cp.contact.extensionid = "选择联系人";
l.cp.contact.contact = "联系人名称";
l.cp.contact.enableemail = "发送邮件";
l.cp.contact.enablesms = "短信通知";
l.cp.contact.enableextension = "拨打分机";
l.cp.contact.enablemobile = "拨打手机";
l.cp.contact.enablewechat = "推送微信通知";
l.cp.contact.emailaddress = "邮箱地址";
l.cp.contact.email = "邮箱";
l.cp.contact.mobile = "手机号";
l.cp.contact.wechat = "微信号";
l.cp.contact.setemail = "设置邮箱";
l.cp.contact.setmobile = "设置手机号";
l.cp.contact.setwechat = "设置微信号";

ns.register("l.cp.eventlog");
l.cp.eventlog.self = "事件日志";
l.cp.eventlog.operation = "用户操作事件";
l.cp.eventlog.telephony = "话务事件";
l.cp.eventlog.system = "系统事件";
l.cp.eventlog.all = "所有";
l.cp.eventlog.eventtype = "事件类型";
l.cp.eventlog.eventname= "事件名称";
l.cp.eventlog.time = "时间";
l.cp.eventlog.search = "搜索";
l.cp.eventlog.type = "事件类型";
l.cp.eventlog.eventmessage = "日志内容";

ns.register("l.mt");
ns.register("l.mt.upgrade");
l.mt.upgrade.self = "升级";
l.mt.upgrade.upgrademanually = "手动升级";
l.mt.upgrade.upgradeautomatically = "自动升级";
l.mt.upgrade.type = "升级方式";
l.mt.upgrade.choosefile = "请选择一个文件";
l.mt.upgrade.checknew = "检测新版本";
l.mt.upgrade.close = "从不检查更新";
l.mt.upgrade.autocheck = "检查更新，提示升级";
l.mt.upgrade.autoinstall = "检查更新并自动升级";
l.mt.upgrade.checktime = "自动检查新固件的时间";
l.mt.upgrade.upgradetime = "自动更新时间：";
l.mt.upgrade.reset = "恢复到出厂设置";
l.mt.upgrade.releasenote = "发布日志";

ns.register("l.mt.backuprestore");
l.mt.backuprestore.self = "备份与还原";
l.mt.backuprestore.name = "名称";
l.mt.backuprestore.time = "备份时间";
l.mt.backuprestore.memo = "备注";
l.mt.backuprestore.file = "文件名称";
l.mt.backuprestore.createnew = "新建备份文件";
l.mt.backuprestore.upload = "上传备份文件";
l.mt.backuprestore.choosefile = "请选择一个文件";

ns.register("l.mt.rebootreset");
l.mt.rebootreset.self = "重启";

ns.register("l.mt.systemlog");
l.mt.systemlog.self = "系统日志";
l.mt.systemlog.name = "名称";
l.mt.systemlog.systemlogset = "系统日志设置";
l.mt.systemlog.choosetorec = "Debug Mode";
l.mt.systemlog.debuglevel = "日志级别";
l.mt.systemlog.normal = "Normal";
l.mt.systemlog.debug = "Debug";
// l.mt.systemlog.enablehwlog = "Hardware Log";
// l.mt.systemlog.enabledebuglog = "Debug Log";
l.mt.systemlog.enableverbose = "Information";
l.mt.systemlog.enablenotice = "Notice";
l.mt.systemlog.enablewarning = "Warning";
l.mt.systemlog.enableerror = "Error";
l.mt.systemlog.enabledebug = "Debug";
l.mt.systemlog.enablesiptrace = "启用SIP调试";
l.mt.systemlog.sipip = "SIP IP";
l.mt.systemlog.enablertptrace = "启用RTP调试";
l.mt.systemlog.rtpip = "RTP IP";
l.mt.systemlog.enablebritrace = "启用BRI调试";
l.mt.systemlog.briport = "BRI端口";

ns.register("l.mt.operationlog");
l.mt.operationlog.self = "操作日志";
l.mt.operationlog.username = "用户";
l.mt.operationlog.ipaddress = "IP地址";
l.mt.operationlog.time = "时间";
l.mt.operationlog.pageoperation = "网页操作";
l.mt.operationlog.detail = "详细信息";

ns.register("l.mt.troubleshoot");
l.mt.troubleshoot.self = "故障诊断";

ns.register("l.mt.ethcapture");
l.mt.ethcapture.self = "网络抓包工具";
l.mt.ethcapture.iface = "网口";
l.mt.ethcapture.ip = "IP地址";
l.mt.ethcapture.port = "端口";
l.mt.ethcapture.both = "Both";

ns.register("l.mt.dahdimonitor");
l.mt.dahdimonitor.self = "录音工具";

ns.register("l.mt.ipping");
l.mt.ipping.self = "IP Ping";
l.mt.ipping.host = "主机";

ns.register("l.mt.traceroute");
l.mt.traceroute.self = "路由跟踪";
l.mt.traceroute.host = "主机";

ns.register("l.app");
l.app.self = "套件中心";
l.app.all = "所有";
l.app.installed = "已安装";
l.app.settings = "设置";
l.app.autoupgrade = "启用自动升级";
l.app.status = "状态";
l.app.localversion = "本地版本";
l.app.latestversion = "最新版本";
l.app.updatedate = "发布日期";
l.app.filesize = "文件大小";
l.app.introduction = "介绍";
l.app.releasenote = "更新说明";
l.app.upgradeauto = "自动更新APP";
l.app.upgrademode = "升级模式";
l.app.allapp = "所有APP";
l.app.below = "以下被选择的APP";
l.app.autoprovision = "自动配置";
l.app.ldap = "LDAP";
l.app.linkus = LINKUS;
l.app.upgradetime = "自动升级APP的时间";
l.app.running = "正在运行";
l.app.notinstalled = "未安装";
l.app.firmwareneed = "PBX固件版本要求";

ns.register("l.info");
l.info.self = "系统信息";
l.info.product = "产品型号";
l.info.serialnumber = "产品序列号（SN）";
l.info.hardwareversion = "硬件版本";
l.info.softwareversion = "固件版本";
l.info.systemtime = "系统时间";
l.info.uptime = "启动时间";
l.info.extmaxext = "当前分机数/最大分机数";
l.info.callsmaxcalls = "当前并发数/最大并发数";

ns.register("l.hardware");
l.hardware.self = "硬件";
l.hardware.used = "已使用";
l.hardware.available = "可用";

ns.register("l.performance");
l.performance.self = "性能";
l.performance.cpu = "CPU";
l.performance.utilization = "使用率";
l.performance.memory = "内存";
//l.performance.ethernet = "网口";
l.performance.ethlan = "LAN";
l.performance.ethwan = "WAN";
l.performance.memorycomp ="内存组合";
l.performance.total = "全部";
l.performance.buffer = "缓冲";
l.performance.cached = "缓存";
l.performance.used = "已使用";
l.performance.available = "可用";
l.performance.send = "发送速率";
l.performance.receive = "接收速率";

ns.register("l.storage");
l.storage.self = "存储使用率";
l.storage.used = "已使用";
l.storage.available = "可用";
ns.register("l.hardware");
l.hardware.self = "硬件";

l.cp.valid.invalidrandomport = "有效的端口范围为5000-65535。";
l.cp.alert.reconfigfirewall = "您已经对端口进行了操作，请检查是否需要重新配置防火墙。";
l.cp.alert.strongloginpass = "您所输入的密码必须包含数字、大小写字母。";
l.cp.alert.networkerror = "设备无法正常连接，请确认";
l.cp.alert.appnewestfirmware = "﻿您所要安装的应用需要更高的固件版本才能支持。请先升级固件，固件的版本号最低为：";
l.cp.common.ok = "确定";
l.cp.common.nomessage = "当前暂无消息";
l.cp.common.more = "更多";
l.cp.common.event3011 = "短信到邮件失败";
l.cp.common.event3012 = "邮件到短信失败";
l.cp.common.event3013 = "应用套件升级";
l.cp.eventsetting.variable3011 = "电话号码: ${phonenumber}<br>邮件地址: ${emailaddr}";
l.cp.eventsetting.variable3012 = "电话号码: ${phonenumber}<br>邮件地址: ${emailaddr}";
l.cp.eventsetting.variable3013 = "可升级的应用套件：${appname}";
l.operation.remove = "移除";
l.operation.format = "格式化";
l.operation.detect = "检测新版本";

l.cp.userpermission.controlplanel = "配置";
l.cp.userpermission.pbx = "PBX";
l.cp.userpermission.extensions = "分机";
l.cp.userpermission.trunks = "中继";
l.cp.userpermission.callcontrol = "呼叫控制";
l.cp.userpermission.callfeatures = "呼叫功能";
l.cp.userpermission.promptsettings = "提示音 ";
l.cp.userpermission.generalsettings = "常规设置";
l.cp.userpermission.recordingsettings = "录音";
l.cp.userpermission.system = "系统";
l.cp.userpermission.networksettings = "网络";
l.cp.userpermission.securitycenter = "安全中心";
l.cp.userpermission.timesettings = "日期和时间";
l.cp.userpermission.emailsettings = "邮箱";
l.cp.userpermission.storage = "存储";
l.cp.userpermission.eventcenter = "事件中心";
l.cp.userpermission.eventsettings = "事件设置";
l.cp.userpermission.eventlog = "事件日志";
l.cp.userpermission.cdrandrecord = "通话记录和录音";
l.cp.userpermission.pbxmonitor = "PBX状态";
l.cp.userpermission.resourcemonitor = "系统状态";
l.cp.userpermission.information = "系统信息";
l.cp.userpermission.networkstatus = "网络";
l.cp.userpermission.performance = "性能";
l.cp.userpermission.storageusage = "存储使用率";
l.cp.userpermission.applicationcenter = "套件中心";
l.cp.userpermission.maintenance = "维护";
l.cp.userpermission.upgrade = "升级";
l.cp.userpermission.backupandrestore = "备份与还原";
l.cp.userpermission.rebootandreset = "重置与重启";
l.cp.userpermission.syslog = "系统日志";
l.cp.userpermission.operatelog = "操作日志";
l.cp.userpermission.systemtools = "故障诊断";
l.cp.userpermission.help = "帮助";
l.cp.userpermission.ldapserver = "LDAP服务器";
l.cp.userpermission.autop = "自动配置";
l.cp.userpermission.conferencepanel = "会议室控制面板";
l.cp.network.single = "单网卡";
l.tip.network.mode = "配置网络接口模式，支持以下选项：<br>"
+"· 单网卡：只启用LAN口作为网络接口，WAN口被禁用；<br>"
+"· 桥接：LAN口作为网络接口，WAN口可桥接电脑；<br>"
+"· 双网卡：两个网卡都可作为网络接口，选择双网卡时，需给选择默认的接口，并且为该网口配置“网关”。";

ns.register("l.cp.autoclean");
l.cp.autoclean.self = "自动清理";

l.operation.mute = "静音";
l.operation.unmute = "解除静音";
l.operation.kick = "踢除";
l.operation.invite = "邀请";
l.operation.bulkinvite = "批量邀请";

ns.register("l.cdrandrecord");
l.cdrandrecord.self = "通话记录和录音" ;

l.cp.network.iface = "接口";
l.cp.eventsetting.eventname = "事件名称";
l.cp.eventsetting.enablenotify = "通知";
l.cp.eventsetting.enablerecord = "录音";
l.cp.blockedip.blackedsrcip = "源IP地址";

l.tip.storage.keeplogday="系统日志可保存的最大天数，最大可保存15天，默认为7天。超过则删除最旧的数据，始终保存最新的数据。";
l.tip.storage.maxnumberlog="事件日志和操作日志分别可保存的最大条数，默认为20000，超过则删除最旧的数据，始终保存最新的数据。";
l.cp.alert.extrangetip = "﻿请输入与DID范围一致的分机范围。如DID：5503301-5503305，分机范围：1001-1005。";
l.cp.common.confirm = "确认";
l.cp.common.expire = "该设备的连接将到期";
ns.register("l.cp.cloud");
l.cp.cloud.menucloudmanagement = "远程管理";
l.cp.cloud.enablecloud = "允许该设备使用远程管理";
l.cp.cloud.activetype = "激活方式";
l.cp.cloud.authcode = "通过授权码";
l.cp.cloud.ysid = "Yeastar ID";
l.cp.cloud.inputcode = "授权码";
l.cp.cloud.inputyeasatrid = "通过Yeastar ID";
l.cp.cloud.password = "密码";
l.cp.cloud.status= "状态";
l.cp.cloud.connected = "已连接";
l.cp.cloud.failed = "(激活失败)";
l.cp.cloud.incorrect = "（激活失败，Yeastar ID或密码错误。）"
l.cp.cloud.maximumlimit = "（激活失败，账户添加设备已达最大限制数量。）"
l.cp.cloud.activated = "（激活失败，本台设备已被其他帐户激活。）"
l.cp.cloud.notmatch = "（激活失败，设备信息和云服务器的信息不一致。）"
l.cp.cloud.timeout = "（激活超时，请检查网络是否正常。）"
l.cp.cloud.disconnected = "断开连接";
l.cp.cloud.disconnect = "断开连接";
l.cp.cloud.disconnectconfirm = "确认断开连接？";
l.cp.cloud.statustip = "设备与远程管理服务器的连接状态";
l.cp.cloud.activetypetip = "请选择激活远程管理服务的方法，支持两种：<br>"
+"·通过授权码：输入在远程管理服务中生成的授权码<br>"
+"·通过Yeastar ID：输入在Yeastar Partner计划中申请的Yeastar ID及密码";
l.cp.cloud.authcodetip = "请输入授权码";
l.cp.cloud.ysidtip = "请输入Yeastar ID";
l.cp.cloud.passwordtip = "请输入密码";

l.info.notification = "通知";
l.cp.alert.portrepeat = "{0}端口已被占用。";

ns.register("l.hotstandby");
l.hotstandby.menuhotstandby = '双机热备';
l.hotstandby.self = '双机热备';
l.hotstandby.enable = '启用双机热备';
l.hotstandby.active = '激活';
l.hotstandby.disable = '未启用';
l.hotstandby.ready = '备用';
l.hotstandby.error = '错误';
l.hotstandby.userbook = '用户手册';
l.hotstandby.mode = '当前设备模式';
l.hotstandby.mainserviceinfo = '主服务器信息';
l.hotstandby.mainservicename = '主服务器名称';
l.hotstandby.mainserviceip = '主服务器IP地址';
l.hotstandby.authkeys = '验证密钥';
l.hotstandby.standbyserviceinfo = '备用服务器信息';
l.hotstandby.standbyservicename = '备用服务器名称';
l.hotstandby.standbyserviceip = '备用服务器IP地址';
l.hotstandby.advanced = '高级';
l.hotstandby.keepalive = '心跳检测间隔(秒)';
l.hotstandby.deadtime = '宕机侦测时间(秒)';
l.hotstandby.vipaddress = '虚拟IP地址';
l.hotstandby.vnetmask = '子网掩码';
l.hotstandby.pingnodes = '网络检测节点';

ns.register("l.tip.hotstandby");
l.tip.hotstandby.mode = '选择当前设备作为“主服务器”或者“备用服务器”，用于热备的两台设备必须选择不同的模式。';
l.tip.hotstandby.mainservicename = '对端服务器（IPPBX）的主机名称。';
l.tip.hotstandby.mainserviceip = '对端服务器(IPPBX)的IP地址，用于热备的两台服务器IP地址不能相同。';
l.tip.hotstandby.authkeys = '用于热备的两台设备必须使用相同的密钥。';
l.tip.hotstandby.keepalive = '发送心跳包的频率，默认为2秒。';
l.tip.hotstandby.deadtime = '处于“备用”状态的服务器在宕机侦测时间内，接收不到“激活”状态服务器的有效回复，就会判定主服务器已经宕机，并接管主服务器工作。默认120秒，该值必须大于服务器开机启动的时间，否则当服务器重启时，“备用”状态的服务器也会接管主服务器的工作。';
l.tip.hotstandby.vipaddress = '填写一个未使用的内网IP地址，用户通过该虚拟IP地址使用电话功能。注意：主机与备机的虚拟IP地址必须设置一致。';
l.tip.hotstandby.vnetmask = '填写虚拟IP地址的子网掩码。';
l.tip.hotstandby.pingnodes = '建议填写网关地址作为网络检测节点。当所有网络监测节点检测失败时，说明当前服务器网络连接异常；当网络恢复通信时，服务器将以“备用”状态运行。';

l.hotstandby.hostname = '服务器名称';
l.hotstandby.ipaddress = '服务器IP地址';
l.hotstandby.master = '主服务器';
l.hotstandby.slave = '备用服务器';
l.hotstandby.yes = '是';
l.hotstandby.no = '否';

l.cp.service.webexpiretime = '网页自动登出时间(分钟)';
l.tip.service.webexpiretime = '设置网页自动登出的时间，最长120分钟。';

l.mt.dahdimonitor.channel = "端口";

l.cp.common.event3014 = "双机热备故障切换";
l.cp.eventsetting.variable3014 = "主服务器主机名: ${hostname1}<br>主服务器IP地址: ${ipaddr1}<br>备用服务器主机名: ${hostname2}<br>备用服务器IP地址: ${ipaddr2}";
l.cp.common.event3015 = "D30模块异常";

ns.register("l.cp.vpnserver");
l.cp.vpnserver.vpnserver = "VPN服务器";
l.cp.vpnserver.virtualip = "虚拟IP地址";
l.cp.vpnserver.enable = "运行中";
l.cp.vpnserver.disable = "未运行";
l.cp.vpnserver.status = "状态";

l.cp.userpermission.vpnserver = "VPN服务器";
l.cp.valid.didpattern = "DID号码范围格式：“5503301-5503305” 或者 “+5503301-+5503305”。";
l.cp.alert.hotstandbyupgrade = "双机热备已启用，请同步升级另外一台设备。<br>是否继续升级？";
l.cp.alert.hotstandbydhcp = "双机热备已启用，LAN口不允许启用DHCP。";
l.cp.alert.dhcphotstandby = "LAN口已启用DHCP,无法启用双机热备。";
l.cp.common.closepanel = '关闭';
l.cp.common.browse = '浏览';

l.cp.blockedip.blockedsrcip = "源IP地址";
l.mt.upgrade.language = "语言";
l.cp.alert.nomoreevent = "没有更多的事件!";
l.cp.alert.noprivileges = "没有权限，请联系管理员";
l.cp.alert.extlistexist = "您所要创建的分机范围里，部分号码已被占用，仅号码未被占用的分机会被创建成功。<br>已存在的号码为：";
l.cp.common.mounted = "已挂载";
l.operation.firstText = "第一页";
l.operation.prevText = "上一页";
l.operation.nextText = "下一页";
l.operation.lastText = "最后一页";
l.operation.refreshText = "刷新";
l.operation.more = "更多";
l.operation.back = "返回";
l.operation.invitesel = "批量邀请";

l.cp.valid.webexpiretime = "有效范围为5-120";

l.cp.alert.delfile = "您确定要删除该文件?";
l.cp.alert.filenameexist = "此文件名已经存在。";
l.cp.valid.invalidemailpwd = "不允许输入“&\"\'\\<>`”中的任意一个字符。";
l.cp.valid.invalidvpnaccount = "只允许输入字母、数字、“_”、“@”、“-”、“.”。";
l.login.findpass = "密码找回";
l.login.findpasstip = "请输入用户名<br>系统将发送修改密码的链接到该用户绑定的邮箱。";

l.cp.alert.lastdelete = "不允许删除最后一项";
l.cp.alert.nameisroot = "名称不能为root";
l.cp.alert.sshdefault = "为保障您的系统安全，请修改SSH的默认密码";
l.cp.alert.appexist = "套件已经存在，你确定要重新安装，安装后所有文件都将被替换？";
l.cp.alert.allowtrial = "您当前有30天的试用期。<br>试用期过后，您可向经销商购买该插件的激活码。<br>如果您已激活，请忽略该提示。";
l.cp.alert.linkusinstall = "启用"+LINKUS+"后，将会启用对应分机的SIP协议，并且“同时注册数”将会自动加1。";
l.cp.alert.linkusuninstall = "卸载"+LINKUS+"后，“同时注册数”将会自动减1。";
l.cp.common.snone = "【无】";
l.cp.common.default = "【默认】";
l.cp.common.everymonth = "每月";
l.cp.common.everyweek = "每周";
l.cp.common.event3017 = "GSM注册失败";
l.cp.eventsetting.variable3017 = "GSM中继名称: ${trunkname}";
l.cp.common.event3018 = "紧急呼叫";
l.cp.eventsetting.variable3018 = "分机号: ${extension}<br>紧急号码:${emernumber}";
l.cp.eventsetting.variable3018 = "分机号: ${extension}<br>紧急号码:${emernumber}";
l.cp.common.event1004 = LINKUS+"登录失败";
l.cp.eventsetting.variable1004 = "分机号: ${extension}";
l.cp.common.event1005 = LINKUS+"客户端被锁";
l.cp.eventsetting.variable1005 = "分机号: ${extension}";
l.mt.backuprestore.schedule = "自动备份";
l.mt.backuprestore.enable = "启用自动备份";
l.mt.backuprestore.backuptime = "计划";
l.mt.backuprestore.storagetype = "存储位置";
l.mt.backuprestore.backupmaxnumber = "备份包覆盖";

ns.register("l.tip.backup");
l.tip.backup.backuptime = "· 每天：选择该项，系统将会在每天固定时间点进行备份。<br>"
+"· 每周：选择该项，系统将会在每周指定的那天进行备份。<br>"
+"· 每月：选择该项，系统将会在每月指定的那天进行备份。";
l.tip.backup.storagetype = "请选择备份包将要存储的位置。";
l.tip.backup.backupmaxnumber = "当前存储位置下，备份包最多可保留几个。若超过设定的数值，则自动覆盖最旧的备份包。";

ns.register("l.share");
l.share.menufileshare = "文件共享";
l.share.self = "文件共享";
l.share.enable = "启用文件共享";
l.share.sharename = "共享名";
l.share.username = "账号";
l.share.password = "密码";
l.share.enabledelete = "允许修改共享的文件夹";

ns.register("l.tip.share");
l.tip.share.sharename = "访问的共享文件夹的名称。";
l.tip.share.username = "该账号为系统自动生成，访问共享文件夹时，需要输入该账号。";
l.tip.share.password = "访问共享文件夹时，需要输入该密码。";

l.cp.service.loginmode = "登录模式";
l.cp.service.extloginmode = "分机";
l.cp.service.emlloginmode = "邮箱";
l.tip.service.loginmode = "设置用户的登录方式，支持同时启用：<br>"
+"分机：使用分机号登录；<br>"
+"邮箱：使用邮箱地址登录。使用该模式前，请确保用户已绑定正确的邮箱。<br>"
+"无论选择何种方式，超级管理员都可使用Admin账号登录。";
l.cp.userpermission.linkus = LINKUS;
l.cp.userpermission.billing = "Billing";
l.cp.userpermission.emergency = "紧急号码";
l.cp.userpermission.charhotel = "char utile h<sup>+</sup>对接工具";

l.app.billing = "Billing";
l.app.charhotel = "char utile h<sup>+</sup>对接工具";
l.operation.license = "激活";
l.operation.clear = "清空";
l.operation.activate = "激活";
l.app.local = "本地";
l.app.remote = "远程";
l.app.upload = "上传";
l.app.choosefile = "请选择一个安装包";
l.app.license = "激活码";
l.app.licenseenter = "请输入您的激活码";
l.cp.alert.activesucceeded = "激活成功";
l.cp.alert.activefailed = "激活失败";
l.cp.alert.appdepends = "您所要安装的应用需要先升级以下套件：{0}, 要求最低版本{1}.";

ns.register("l.tip.app");
l.tip.app.choosefile = "请选择一个安装包";

l.cp.valid.invaliddoublenumber = "允许输入的最大长度为15，包括小数点。";
l.cp.common.appexpire = "“{0}”试用期已结束。如需继续使用，请向经销商购买该插件的激活码。";
l.cp.email.needauth = "验证密码";
l.cp.alert.appnewestfirmware = "﻿您所要安装的应用需要更高的固件版本才能支持。请先升级固件，固件的版本号最低为：";
l.cp.valid.invalid = "不允许输入“{0}”中的任意一个字符。";
l.cp.valid.valid = "只允许输入字母、数字、“{0}”。";
l.cp.alert.numberlen =  "号码的长度必须小于{0}。";
l.cp.alert.maxdel = "最多只能删除{0}个";
l.cp.alert.strongsharepass = "您所输入的密码必须包含数字、大小写字母。";
l.operation.active = "激活";
l.operation.disconnect = "断开连接";
l.cp.cloud.self = "远程管理";

ns.register("l.mt.webreset");
l.mt.webreset.self = "重置";
l.mt.webreset.resetcode = "验证码";
l.cp.alert.codeerror = "请输入正确的验证码";
l.cp.alert.gwnichotstandby = "无法启用双机热备,网络设置中默认接口应该为LAN口。";
l.cp.alert.hotstandbygwnic = "双机热备已启用，默认接口不能修改为WAN。";

l.cp.common.event3019 = "启用蜂窝网络";
l.cp.common.event3020 = "流量阈值预警";
l.cp.common.event3021 = "网络磁盘断开连接";
l.cp.common.event3022 = "自动清理提醒";
l.cp.eventsetting.variable3019 = "切换后的IP：${ipaddr}";
l.cp.eventsetting.variable3020 = "已使用流量：${used}<br>百分比：${per}";
l.cp.eventsetting.variable3021 = "网络磁盘名称：${networkdrivename}<br>原因：${cause}<br>网络磁盘IP地址：${ipaddr}";
l.cp.eventsetting.variable3022 = "数据类型：${datatype}";

l.cp.common.nowritepermit = "无写磁盘权限";
l.mt.systemlog.enablesmsdebug = "启用短信功能调试";

l.cp.userpermission.downloadcdr = "下载通话记录";
l.cp.userpermission.deletecdr = "删除通话记录";
l.cp.userpermission.playrecord = "播放录音";
l.cp.userpermission.downloadrecord = "下载录音";
l.cp.userpermission.deleterecord = "删除录音";
l.cp.userpermission.cdrpermit = "通话记录权限";

l.tip.storage.maxnumbercdr="通话记录保存的最大条数，超过则删除最旧的数据，始终保存最新的数据。";
l.tip.storage.keepcdrday="通话记录保存的最大天数，超过则删除最旧的数据，始终保存最新的数据（0代表没有限制）。";
l.tip.storage.keepvmminute="每个分机语音留言和一键录音分别可保存的最大分钟数，超过则删除最旧的数据，始终保存最新的数据（0代表没有限制）。";
l.tip.storage.keeprecordday="录音文件保存的最大天数，超过则删除最旧的数据，始终保存最新的数据（0代表没有限制）。";
l.cp.alert.applimit = "本设备不支持安装您上传的套件。";

//4G
l.cp.network.lteprority = "蜂窝网络优先级";
l.tip.network.lteprority = "选择蜂窝网络优先级"
+"<br>·关闭蜂窝网络：关闭蜂窝网络，总是使用有线网络。"
+"<br>·蜂窝网络备份：蜂窝网络作为网络备份使用，当有线网络断掉的时候，蜂窝网络将会代替有线网络继续工作，当有线网络重新连接的时候，优先使用有线网络。"
+"<br>·蜂窝网络优先：总是使用蜂窝网络。"
+"<br>注：如果选择蜂窝网络优先，必须配置DNS服务器；如果选择蜂窝网络备份，必须先开启ICMP探测并配置DNS服务器。";
l.cp.network.none = "关闭蜂窝网络";
l.cp.network.bak = "蜂窝网络备份";
l.cp.network.first = "蜂窝网络优先";
l.cp.network.cellular = "蜂窝网络";
l.cp.network.icmp = "ICMP探测";

ns.register("l.cp.cellular");
l.cp.cellular.self = "蜂窝网络";
l.cp.cellular.enable = "启用蜂窝网络";
l.cp.cellular.dial = "拨号设置";
l.cp.cellular.apn = "APN";
l.cp.cellular.number = "拨号号码";
l.cp.cellular.username = "用户名";
l.cp.cellular.password = "密码";
l.cp.cellular.data = "流量控制";
l.cp.cellular.usedflow ="已使用流量";
l.cp.cellular.totalflow ="流量阈值";
l.cp.cellular.enabledisconnect="自动断开蜂窝网络";
l.cp.cellular.resettype ="定时清空流量";
l.cp.cellular.everyyear ="每年";
l.cp.cellular.everymon ="每月";
l.cp.cellular.everyday ="每日";
l.cp.cellular.everyweek ="每星期";
l.cp.cellular.mon ="月";
l.cp.cellular.day ="日";
l.cp.cellular.hour ="时";
l.cp.cellular.minute ="分";
l.cp.cellular.cellular = "蜂窝网络";
l.cp.cellular.used = "流量使用情况";

ns.register("l.tip.cellular");
l.tip.cellular.usedflow ="设置已使用的流量。如未设置，默认为0。";
l.tip.cellular.totalflow ="设置流量阈值，此阈值可作为断开蜂窝网络和事件通知的标志。可选择使用流量达到阈值时自动断开蜂窝网络。默认为0，表示不做限制。";
l.tip.cellular.enabledisconnect="流量达到阈值时,自动断开蜂窝网络。";
l.tip.cellular.resettype ='设置定时清空已使用流量的时间。';
l.tip.cellular.apn = "请设置拨号上网的APN。";
l.tip.cellular.number = "请设置拨号上网的拨号号码。";
l.tip.cellular.username = "请设置拨号上网的用户名。";
l.tip.cellular.password = "请设置拨号上网的用户密码。";


ns.register("l.cp.icmp");
l.cp.icmp.enable = "启用ICMP探测";
l.cp.icmp.server = "ICMP探测服务器";
l.cp.icmp.detectinterval = "ICMP探测时间间隔";
l.cp.icmp.timeout = "ICMP探测超时时间";
l.cp.icmp.trycount = "ICMP探测最大重试次数";
l.cp.icmp.test = "测试";
l.cp.icmp.disabled = "未启用";
l.cp.icmp.self = "ICMP探测";
l.cp.icmp.sever1 = "ICMP探测服务器";

ns.register("l.tip.icmp");
l.tip.icmp.enable = "启用ICMP探测，用于探测网络是否断开。";
l.tip.icmp.server = "配置ICMP探测服务器，设备将定时探测所配置的服务器IP地址能否到达，以此为依据判断是否同外网断开，从而采取相应方式转移外网服务到其他线路上"
+"<br>注意：服务器IP地址一般配置为外网且可以达到的IP,通常配置为DNS服务器。";
l.tip.icmp.detectinterval = "设置ICMP探测的时间间隔。";
l.tip.icmp.timeout = "设置ICMP探测的超时时间。";
l.tip.icmp.trycount = "设置ICMP探测最大重试次数。";
l.tip.icmp.testsuccess = "测试成功";
l.tip.icmp.testfail = "测试失败";

l.cp.alert.icmpdisable = "未启用ICMP探测";
l.cp.alert.lteprority = "请在事件中心开启“启用蜂窝网络”事件通知，设置事件通知联系人，用于网络切换时告知切换后的IP地址，或在设置该项之后在网络状态界面查看并记录蜂窝网络的IP地址。";
l.cp.alert.icmpenable = "关闭后，蜂窝网络备份相关功能将不可用";
l.cp.alert.vlanid = "请设置不同的VLAN ID。";

l.cp.network.usenet = "当前使用网路";
l.cp.network.wired = "有线网络";
l.cp.network.nonetwork = "无网络";
l.cp.alert.checked = "选择了{0}，";
l.cp.alert.resettext = "重置大概需要5分钟时间，请稍候...";
l.cp.userpermission.hotel = "酒店";
l.cp.userpermission.queuemetrics = "QueueMetrics-Live对接工具";
l.app.hotel = "酒店";
l.app.queuemetrics = "QueueMetrics-Live对接工具";
l.cp.alert.resetting = "正在重置";

l.cp.valid.invalidnetmask = "所输入的子网掩码无效。子网掩码必须是相邻的。";
l.cp.alert.disablefirewall = "防火墙关闭后，设备安全性将会降低，确定要关闭？";
l.cp.alert.findpasserror = "所填信息有误，请核对后再试。";
l.login.findpassfiveerror = "对不起，您已连续错误5次，请10分钟后再试。";
l.login.findpasstip = "请输入用户名。<br>系统将发送修改密码的链接到该用户绑定的邮箱。";
l.cp.storage.maxpbxlogsize = "文件的最大存储";
l.tip.storage.maxpbxlogsize = "syslog中的pbxlog文件可保存的最大值，单位为MB，默认为5MB，超过则删除最旧的数据，始终保存最新的数据。<br>输入框超过限制提示：该输入项的最大值是50";
l.mt.rebootreset.enable = "开启自动重启";
l.mt.rebootreset.tipenable = "当设置为每月的31日，若当前月份不存在31日，则该月设备不会自动重启。";
l.cp.network.ipaddress2 = "IP地址2";
l.cp.network.netmask2 = "子网掩码2";
l.cp.fwrules.type = "类型";
l.tip.fwrules.type="规则所针对的IP地址或域名。<br>IP地址的格式必须是：IP地址/子网掩码。例如：<br>"
+"192.168.5.100/255.255.255.255表示规则只针对IP地址：192.168.5.100 <br>"
+"216.207.245.47/255.255.255.255表示规则只针对IP地址：216.207.245.47<br>"
+"192.168.5.0/255.255.255.0表示规则针对192.168.5.X网段的所有IP地址。";
l.cp.fwrules.typeip = "IP";
l.cp.fwrules.domain = "域名";
// l.cp.service.rectoftp = "将自动录音目录挂载至FTP目录下";
// l.tip.service.rectoftp = "开启此选项可将自动录音目录挂载至FTP目录下。";
l.cp.common.event3023 = "分机呼出权限受限";
l.cp.eventsetting.variable3023 = "分机号: ${numb}<br>分机名: ${name}";

l.cp.alert.portstartltend="结束端口必须大于或等于起始端口。";

l.mt.upgrade.tips = "升级前建议先进行备份。";

l.cp.email.needauth = "发件服务器身份验证";
l.tip.email.needauth = "选择发件服务器身份验证方式：<br>"
+"·和收件服务器相同。<br>"
+"·自定义。<br>"
+"·不需要验证。";
l.cp.email.yes = "和收件服务器相同";
l.cp.email.no = "不需要验证";
l.cp.email.custom = "自定义";
l.cp.email.account = "账户";

l.share.enableftp = "允许挂载至FTP";
l.tip.share.enableftp = "允许将共享文件目录挂载至FTP。";

l.cp.network.enablevlan1 = "启用VLAN子接口1";
l.cp.network.enablevlan2 = "启用VLAN子接口2";

l.cp.alert.emailrepeat = "已开启使用邮箱登录分机账号，分机绑定的邮箱要求不能重复。";
l.cp.alert.haverepeatemail = "存在绑定邮箱相同的分机，不可开启邮箱登录。";

l.cp.alert.backupapp = "还原后，{0}功能将会受影响。";

l.hotstandby.disksync = "硬盘同步";
l.tip.hotstandby.disksync = "实时同步硬盘内容。";

l.app.conferencepanel = "会议室控制面板";
l.app.vpnserver = "VPN服务器";
l.app.ldapserver = "LDAP服务器";

l.cp.common.appuploading = "上传中，请勿断电或者操作网页，以免造成升级失败。";

l.app.autop = "自动配置";
l.app.mikocti = "Miko CTI";

l.tip.network.enablevlan = "将LAN/WAN口配置为TAG VLAN模式。";

l.cp.storage.cdr = "通话记录";
l.cp.storage.vm = "语音留言和一键录音";
l.cp.storage.recording = "录音";
l.cp.storage.log = "日志";

l.cp.alert.ltehotstandby = "已开启网络备份，双机热备不可用";
l.cp.alert.hotstandbylte = "已开启双机热备，网络备份不可用";

l.cp.alert.emailempty = "请输入邮箱。";

l.cp.valid.invalidpromptname = "只允许输入字母、数字，并且不能为纯数字。";
l.cp.valid.invalidpromptfile = "请选择“.wav”、“.WAV”或者“.gsm”文件，并且文件名称不能为纯数字或者包含特殊字符。";
l.cp.common.event3024 = "API用户被锁";
l.cp.eventsetting.variable3024 = "IP地址: ${ipaddr}";

l.cp.storage.domain = "工作组";
l.tip.storage.domain = "若您的网络磁盘有设置工作组，请在此处填写正确的组名，否则可放空。";
l.cp.valid.invalidcrtfile = "请选择“.crt”文件，并且文件名称不能包含特殊字符。";
l.cp.valid.invalidkeyfile = "请选择“.key”文件，并且文件名称不能包含特殊字符。";
l.cp.valid.invalidpemfile = "请选择“.pem”文件，并且文件名称不能包含特殊字符。";
l.mt.backuprestore.tip = "您的备份包将包括以下内容";
l.mt.backuprestore.systembackup = "系统配置";
l.mt.backuprestore.soundbackup = "自定义提示音";
l.mt.backuprestore.cdrbackup  = "通话记录";
l.login.loginlocked = "您的账号已被锁定，请联系PBX系统管理员。";
l.app.netstatus = "无法连接到服务器。";
l.cp.alert.macipempty = "MAC和源IP地址请至少填写一项。";

l.login.loginfiveerror = "失败次数过多，请{0}分钟后再试。";
l.login.loginlocked = "登录失败次数过多，该账号已被冻结，请联系PBX系统管理员。";
l.login.loginiplocked = "登录失败次数过多，该IP已被冻结，请联系PBX系统管理员。";
l.cp.blockedip.typeautop = "自动配置";
l.cp.blockedip.typedefense = "IP自动防御";
l.cp.blockedip.typeloginip = "网页-IP";
l.cp.blockedip.typeloginaccount = "网页-账号";
l.cp.blockedip.typeregisterip = "注册-IP";
l.cp.blockedip.typeregisteraccount = "注册-账号";
l.cp.eventsetting.variable1003 = "用户名：${username}<br>IP地址：${ipaddr}<br>被锁定原因：${reason}<br><br>"+
"用户被锁定的原因包括：<br>1.登录失败次数过多；<br>2.注册失败次数过多。";
l.cp.eventsetting.variable3006 = "IP地址：${ipaddr}<br>被锁定原因：${reason}<br><br>"+
"IP被锁定的原因包括：<br>1.登录失败次数过多；<br>2.注册失败次数过多；<br>3.此IP触发了自动防御；<br>4.自动部署鉴权失败次数过多。";

l.cp.common.event3025 = "更改分机用户密码";
l.cp.eventsetting.variable3025 = "用户名： ${username}<br>IP地址： ${ipaddr}";

ns.register("l.cp.ua");
l.cp.ua.tip = "系统升级成功。您还需升级以下的应用套件，否则这些套件将可能无法正常运行。";
l.cp.ua.noshow = "不再提示。";

l.mt.systemlog.enabless7debug = "启用SS7/PRI调试";

l.cp.alert.extcontact = "分机数据异常：";
l.cp.alert.extcontactrepeat = "分机重复：";
l.cp.alert.ldapcontact = "联系人{0}信息错误 ";
l.cp.alert.ldapcontactrepeat = "创建失败。同一个电话薄中，联系人昵称不能重复。";


l.cp.fwrules.choosefile = "请选择一个使用UTF-8编码的CSV文件。";
l.cp.fwrules.import = "导入防火墙规则";
l.cp.fwrules.filename = "防火墙规则文件";

l.cp.alert.dropalltip = "为了保证您的设备可以访问到APP Center，我们已经自动为您添加好了以下规则："
+"<br>• 允许BOTH连接到应用套件中心：appcenter.yeastar.com。"
+"<br><br>此外，为了保证设备其他服务的正常使用，我们强烈建议您添加以下白名单规则："
+"<br>• 允许BOTH连接到您设置的邮箱发送服务器{0}，邮件接收服务器{1}。";

l.app.ldapcenter = "LDAP服务器";

l.cp.cloud.ysidremark = "远程管理系统是一个可以对S系列PBX进行远程管理的平台，只对认证的Yeastar Partner开放。请使用您的Yeastar Partner账号激活。若您没有Yeastar Partner账号，可以<a href=\"https://www.yeastar.com/channel-program/\" target=\"_blank\">在此</a>注册。";

l.cp.alert.numberused="该号码已被使用。";

ns.register("l.snmp");
l.snmp.menusnmp = "SNMP" ;
l.snmp.self = "SNMP" ;
l.snmp.status = "状态";
l.snmp.running = "SNMP服务已启用";
l.snmp.notrunning = "SNMP服务已停用";
l.snmp.enable = "启用";
l.snmp.sendport = "发送端口";
l.snmp.v3user = "SNMPv3用户";
l.snmp.access = "认证方式";
l.snmp.noauth = "NoAuth";
l.snmp.auth = "Auth";
l.snmp.priv = "Priv";
l.snmp.authpasswd = "认证密码";
l.snmp.encryptionpasswd = "加密密码";
l.snmp.mode = "SNMP模式";
l.snmp.localcommunity = "共同体";
l.snmp.showaccess = "读写方式";
l.snmp.ip = "IP/子网掩码";
l.snmp.servercommunity = "捕获共同体";
l.snmp.targetip = "捕获IP";