var ns = {};//namespace
ns.register = function(path){//"l.cp.extension.self"
    var arr = path.split(".");     
    var ns = "";     
    for(var i=0;i<arr.length;i++){     
        if(i>0) ns += ".";     
        ns += arr[i];     
        eval("if(typeof(" + ns + ") == 'undefined') " + ns + " = {};");     
    }     
}
// v30.7.0.11
ns.register("l.login");//使用前先注册命名空间
l.login.configuration = "Yeastar SXX";
l.login.login = "Login";
l.login.forgetpass = "Forgot Password?";
l.login.enterusername = "Please Enter Username.";
l.login.enterpassword = "Please Enter Password.";
l.login.loginerror = "Invalid Username or Password.";
l.login.loginfiveerror = "Sorry, maximum unsuccessful logon attempts reached, please try again 10 minutes later.";
l.login.findpass = "<strong>Find password</strong>";
l.login.findpasstip = "Please input the username.<br>The password will be sent to the Email bound width the username";
l.login.username = "Username";
l.login.newpwd = "New Password";
l.login.repeatnewpwd = "Retype New Password";

ns.register("l.desktop");
l.desktop.language = "Language";
l.desktop.mysetting = "My Settings";
l.desktop.logout = "Logout";


ns.register("l.shortcut");
l.shortcut.controlPanel = "Settings";
l.shortcut.cdrRecord = "CDR and Recordings";
l.shortcut.status = "Status";
l.shortcut.pbxmonitor = "PBX Monitor";
l.shortcut.resourcemonitor = "Resource Monitor";
l.shortcut.app = "App Center";
l.shortcut.maintance = "Maintenance";
l.shortcut.guide = "Help";
l.shortcut.me = "Me";
l.shortcut.ldapserver = "LDAP Server";

ns.register("l.tab");
l.tab.settings = "Settings";
l.tab.cdrandrecord = "CDR and Recordings";
l.tab.monitor = "Monitor";
l.tab.others = "Others";
l.tab.app = "Application";

ns.register("l.operation");
l.operation.add = "Add";
l.operation.deleting="No row has been selected and can not be deleted";
l.operation.nicknameChecked="Cannot contain '\#+@ and empty";
l.operation.nicknameEmpty="Nick Name can't be empty！";
l.operation.nicknameMax="Nick Name up to 63 characters！";
l.operation.mobilenumberEmpty="Mobile Number can't be empty！";
l.operation.mobilenumberMin="Mobile Number can only be a number or + as beging, and not more than 15";
l.operation.mobilenumberMinlength="Mobile Number length is <=15";
l.operation.groupSelected="No choice Group!";
l.operation.groupadd="Please enter the group name";
l.operation.nicknameRepeat="The user name is repeated, please retype";
l.operation.mobilenumberRepeat="The Mobile Number is repeated, please retype";
l.operation.groupSaving = "Saving...";
l.operation.sumOver="The total number is over 500, and the preservation fails！";
l.operation.bulkadd = "Bulk Add";
l.operation.edit = "Edit";
l.operation.editsel = "Edit Selected";
l.operation.modify = "Modify";
l.operation.bulkmodify = "Bulk Modify";
l.operation.del = "Delete";
l.operation.bulkdel = "Bulk Delete";
l.operation.delsel = "Delete Selected";
l.operation.upload = "Upload";
l.operation.download = "Download";
l.operation.operation = "Operation";
l.operation.drag = "Drag";
l.operation.move = "Move";
l.operation.addnew = "New";
l.operation.btnimport = "Import";
l.operation.btnexport = "Export";
l.operation.play = "Play";
l.operation.record = "Record";
l.operation.test = "Test";
l.operation.addnetdisk = "Add Network Drive";
l.operation.delfile = "Delete File";
l.operation.updatedir = "Modify Folder";
l.operation.adddir = "Add Folder";
l.operation.backup = "Backup";
l.operation.restore = "Restore";
l.operation.start = "Start";
l.operation.stop = "Stop";
l.operation.install = "Install";
l.operation.uninstall = "Uninstall";
l.operation.dellog = "Delete Log";
l.operation.reboot = "Reboot";
l.operation.reset = "Reset";
l.operation.login = "Login";
l.operation.logout = "Logout";
l.operation.forgetpwd = "Forget Password";
l.operation.upgrade = "Upgrade";
l.operation.reconnect = "Reconnect";
l.operation.setunread = "Set As Unread";
l.operation.bulksetunread = "Set As Unread";
l.operation.setread = "Set As Read";
l.operation.bulksetread = "Set As Read";
l.operation.addbook = "Add Phone Book";
l.operation.delbook = "Delete Phone Book";
l.operation.addtodesktop = "Add to desktop";
l.operation.removeshortcut = "Remove shortcut";
l.operation.goto = "Go to";
l.operation.displaying = "Displaying";

ns.register("l.tip");

ns.register("l.tip.time");
l.tip.time.ntpserver = "Specify the NTP server for time synchronization.";

ns.register("l.tip.network");
l.tip.network.gwnic = "In Dual mode, you need to choose the default interface.";
l.tip.network.vlanid = "Enter the VLAN ID.";
l.tip.network.vlanpriority = "Set the VLAN priority. The default is 0.";
l.tip.network.ipaddress = "Enter the IP address (xxx.xxx.xxx.xxx).";
l.tip.network.netmask = "Enter the subnet mask (xxx.xxx.xxx.xxx). ";
l.tip.network.gateway = "Enter the gateway address (xxx.xxx.xxx.xxx).";
l.tip.network.dns1 = "Enter the IP address of the preferred DNS server (xxx.xxx.xxx.xxx).";
l.tip.network.dns2 = "Enter the IP address of the alternative DNS server (xxx.xxx.xxx.xxx).";

ns.register("l.tip.ddns");
l.tip.ddns.ddnsserver = "Choose a DDNS provider from the list.";
l.tip.ddns.username = "Enter the username of your DDNS account.";
l.tip.ddns.password = "Enter the password of your DDNS account.";
l.tip.ddns.freednshash = "Enter your string of Hash as provided by your DDNS account.";
l.tip.ddns.domain = "Enter the domain name.";

ns.register("l.tip.email");
l.tip.email.email = "Enter the email address.";
l.tip.email.secret = "Enter the password.";
l.tip.email.sendername = "Enter the name as you want it to appear on outgoing email.";
l.tip.email.smtpserver = "Enter the outgoing mail server and the port. For example, smtp.sina.com:25";
l.tip.email.pop3server = "Enter the incoming mail server and the port. For example, pop.sina.com:110.";
l.tip.email.usessl = "Use TLS to send secure message to server .If the email sending server needs to authenticate the sender, you need to select the checkbox.";
l.tip.email.test = "Test if the email address can successfully send and receive email.";

ns.register("l.tip.eventlog");
l.tip.eventlog.eventtype="Choose an event type that you want to search.";
l.tip.eventlog.eventname="Choose an event name that you want to search.";
l.tip.eventlog.time="Choose a time frame that you want to search.";

ns.register("l.tip.eventsetting");
l.tip.eventsetting.subject="The subject of the Notification Email.";
l.tip.eventsetting.notifycontext="The content of the Notification Email.";

ns.register("l.tip.vpn");
l.tip.vpn.serveraddr="Enter the server address of OpenVPN.";
l.tip.vpn.protocol="Select the protocol type. The client and server must use the same setting.";
l.tip.vpn.username="Specify the username.";
l.tip.vpn.encryption="Select the encryption method. The client and server must use the same setting.";
l.tip.vpn.proxyserver="Specify the proxy server.";
l.tip.vpn.serverport="Enter the server port of OpenVPN. The default is 1194.";
l.tip.vpn.device="Select the network device. The client and server must use the same setting.<br>"
+"· TUN: a TUN device is a virtual point-to-point IP link<br>"
+"· TAP: a TAP device is a virtual Ethernet adapter";
l.tip.vpn.password="Specify the password.";
l.tip.vpn.compression="This option enables or disables compression for data stream. The client and server must use the same setting.";
l.tip.vpn.proxyport="Specify the proxy port.";
l.tip.vpn.cacertfile="Upload a CA certificate.";
l.tip.vpn.certfile="Upload a client certificate.";
l.tip.vpn.keyfile="Upload a client key.";
l.tip.vpn.tlsauth="This option enables or disables TLS authentication. If enabled, please upload a TA key.";
l.tip.vpn.takeyfile="Upload a TA key. This key is used to defend against malicious attack.";

ns.register("l.tip.fwrules");
l.tip.fwrules.enable="Enable firewall to protect the system from malicious attack.  Click Save icon to apply the changes.";
l.tip.fwrules.disableping="Enable this item, net ping from remote hosts will be dropped. Click Save icon to apply the changes.";
l.tip.fwrules.dropall="When you enable Drop All feature, the system will drop all packets and connections from other hosts if there are no other rules defined. To avoid locking the device, at least one TCP Accept common rule must be created for port used for SSH access and port used for HTTP access.";
l.tip.fwrules.rulename="Give this rule a descriptive name to help you identify it.";
l.tip.fwrules.fwdescribe="A simple description for this rule. For example: accept the specific host to access the web interface for configuration.";
l.tip.fwrules.action="Configure the action of this rule.";
l.tip.fwrules.protocol="The protocols applied for this rule.";
l.tip.fwrules.mac = "The MAC address for this rule. The format of MAC address is: XX:XX:XX:XX:XX:XX.";
l.tip.fwrules.ip="The IP address for this rule. The format of IP address is: IP address/subnet mask. For example: <br>"
+"192.168.5.100/255.255.255.255 means this rule is for 192.168.5.100; <br>"
+"216.207.245.47/255.255.255.255 is for 216.207.245.47; <br>"
+"192.168.5.0/255.255.255.0 is for IP from 192.168.5.0 to 192.168.5.255.";
l.tip.fwrules.port="Start port should be on the left and end port should be on the right. The end port must be equal to or greater than start port.";

ns.register("l.tip.defense");
l.tip.defense.port="Auto defense port.";
l.tip.defense.protocol="Auto defense protocol.";
l.tip.defense.packets="Allowed IP packets number in the specific time interval, which is set in Time Interval. Within the Time Interval, the IP that sending IP packets exceeding this value will be blacklisted.";
l.tip.defense.fwinterval="The time interval in seconds to receive IP packets.";

ns.register("l.tip.service");
l.tip.service.webprotocol = "Select the protocol to access to PBX. The default is HTTPS.";
l.tip.service.webport = "Specify port number to access to the HTTP or HTTPS Server.The default is &#34;8088&#34;.";
l.tip.service.redirecturl ="When this option is enabled, the access using HTTP with Port 80 will be redirected to HTTPS with relevant Port.";
l.tip.service.httpscert ="Select the certificate used for HTTPS.The default is &#34;None&#34;.";
l.tip.service.enablessh="This option enables or disables SSH and the relevant port. The default port is &#34;8022&#34;. SSH is often used in debugging. You can use SSH to connect to PBX and run commands. It is recommended that you disable SSH when not needed to improve security.";
l.tip.service.enableftp="This option enables or disables FTP and the relevant port. The default port is &#34;21&#34;. With FTP service, you can connect to PBX via web browser.";
l.tip.service.enabletftp="This option enables or disables TFTP.";
l.tip.service.bindport="This sets IAX port. The default is &#34;4569&#34;.";
l.tip.service.udpport="This sets UDP port. The default is &#34;5060&#34;.";
l.tip.service.enabletcp="This option enables or disables SIP TCP and the relevant port. The default port is &#34;5060&#34;.";
l.tip.service.enabletls="This option enables or disables SIP TLS and the relevant port. The default port is &#34;5061&#34;.";
l.tip.service.routers="Enter the gateway address. By default, it is the IP address of the device.";
l.tip.service.subnetmask="Enter the subnet mask. The format is xxx.xxx.xxx.xxx.";
l.tip.service.dns1="Enter the preferred DNS server. The format is xxx.xxx.xxx.xxx.";
l.tip.service.dns2="Enter the alternative DNS server. The format is xxx.xxx.xxx.xxx.";
l.tip.service.ipfrom="This sets the IP address that the DHCP server can assign to network devices. Start IP address is on the left, and end IP on the right.";
l.tip.service.tftpserver="This option is for Auto Provisioning feature. So IP phones can get configuration file from this address. For Grandstream ,Panasonic phones and Avantec, enter the PBX's IP address, for example: 192.168.5.150. For other IP phones, remember to specify the protocol, for example, tftp://192.168.5.150.";
l.tip.service.ntpserver="The PBX can act as a NTP server. The format is xxx.xxx.xxx.xxx. For example, 192.168.5.150.By default, it is the PBX's IP address.";
/*l.tip.service.enableami="The Asterisk Management Interface (AMI) is a system monitoring and management interface provided by Asterisk. The third party software can work with PBX using AMI interface. It is disabled by default.";*/
l.tip.service.ippermit="Define the IP address or IP section which is allowed to use AMI. The input format should be IP address/Subnet mask. <br>"
+"For example, 192.168.5.100/255.255.255.255 means only the device whose IP address is 192.168.5.100 is allowed to use AMI;<br>"
+"192.168.5.0/255.255.255.0 means only the device whose IP section is 192.168.5.XXX is allowed to use AMI.";

ns.register("l.tip.database");
l.tip.database.username="Configure the username which can be used by third party to access the database of PBX.";
l.tip.database.password="Configure the password which can be used by third party to access the database of PBX.";
l.tip.database.host="Define the IP address or IP section which is allowed to access the database of PBX. The input format should be XXX.XXX.XXX.XXX.The XXX could be address or %. For example: <br>"
+"216.207.245.47 means only the device whose IP address is 216.207.245.47 is allowed to get access to the database of PBX.<br>"
+"192.168.5.% means only the device whose IP section is 192.168.5.XXX is allowed to get access to the database of PBX.";

ns.register("l.tip.storage");
l.tip.storage.slotcdr="Select a location in which to store your CDR files.The default is &#34;local&#34;.";
l.tip.storage.slotrecording="Select one available external storage to store your Recordings. If an SD card or TF (microSD) card is required, we strongly recommend that you choose a card with a write speed of 60 MB/s or faster.";
l.tip.storage.slotvm="Select a location in which to store your Voicemail & One Touch Recordings.";
l.tip.storage.slotlog="Select a location to store your logs. It includes <b>System Logs</b>.The default is &#34;local&#34;.";
l.tip.storage.name="Give this network disk a descriptive name to help you identify it.";
l.tip.storage.host="The host or IP address of the network disk.";
l.tip.storage.sharename="The name of the shared folder.";
//l.tip.storage.username="The username to access the network disk.";
//l.tip.storage.password="The password to access the network disk.";
//l.tip.storage.maxnumbercdr="Set the maximum number of CDR that should be retained. The default is &#34;100000&#34;. The oldest CDR will be deleted when the threshold is reached.";
//l.tip.storage.keepcdrday="Set the maximum number of days that CDR should be retained. The default is &#34;180&#34;.";
l.tip.storage.maxnumbervm="Set the maximum number of voicemail and one touch recording files that should be retained respectively for each extension. The default is &#34;50&#34;. The oldest files will be deleted when the threshold is reached.";
//l.tip.storage.keepvmminute="Set the maximum number of minutes that voicemail and one touch recording files should be retained respectively for each extension. The default is &#34;100&#34;.";
l.tip.storage.maxusagedevice="Set the maximum storage percentage the device is allowed to store. The default is &#34;80%&#34;. The oldest recordings will be deleted when the threshold is reached.";
//l.tip.storage.keeprecordday="Set the maximum number of days that recording files should be retained. The default is &#34;180&#34;.";

ns.register("l.tip.contact");
l.tip.contact.extensionid="Choose a contact or &#34;Custom&#34; to add a contact manually.";
l.tip.contact.contact="Enter the name of the contact.";
l.tip.contact.method="Select how to notify the contact when an event occurs.";
l.tip.contact.email="When events occur, send notification emails to this address. If the &#34;Notification Method is Email&#34;, this field must be entered.";
l.tip.contact.mobile="When events occur, call or send SMS to this mobile number. If the &#34;Notification Method is Call Mobile or SMS&#34;, this field must be entered.";

ns.register("l.tip.upgrade");
l.tip.upgrade.type="To upgrade manually, you can:<br>· Upload File: upload the firmware from your local computer<br>· TFTP Server: get the firmware from TFTP server<br>· HTTP Link: enter the download link of the firmware";

ns.register("l.tip.systemlog");
/*l.tip.systemlog.debuglevel="Choose which level of log messages will be recorded. ";*/

ns.register("l.tip.userpermission");
l.tip.userpermission.id="Choose a user to grant privilege.";
l.tip.userpermission.type="A role is a set of privileges that can be granted to users.";
//l.tip.userpermission.viewrecord="Allow the user to check recording files.";
//l.tip.userpermission.cdrextensions="Allow the user to check CDR of all extensions or the selected extensions.";

ns.register("l.cp.title");
l.cp.title.pbx = "PBX";
l.cp.title.network = "Network";
l.cp.title.system = "System";
l.cp.title.event = "Event Center";

ns.register("l.cp.alert");
l.cp.alert.tip = "";
l.cp.alert.deletedSure = "Be sure to delete";
l.cp.alert.warning = "Warning";
l.cp.alert.deleting = "Are you sure you want to delete it ?";
l.cp.alert.functionMenu = "Function menu";
l.cp.alert.mainContain = "Theme content display";
l.cp.alert.fxsPortExist = "The port is being used. If you select this port, the extension using this port will be unusable.";
l.cp.alert.extselone = "Please select at least one extension.";
l.cp.alert.extrepeat = "The extension already exists.";
l.cp.alert.extnamerepeat = "The name has been used.";
l.cp.alert.extemailrepeat = "The email has been used.";
l.cp.alert.extmobilerepeat = "The mobile number has been used.";
l.cp.alert.extmobileempty = "Please enter the mobile number.";
l.cp.alert.extemailempty = "Please enter the email if you want to send voicemail to email.";
//l.cp.alert.extlistexist = "One or more of the selected extensions are already in this extension list. Only extensions that are not part of this extension list will be added.";
l.cp.alert.tipdel = "Are you sure you want to delete the selected item?";
l.cp.alert.tipdelsel = "Are you sure you want to delete the selected items?";
l.cp.alert.tipdelselgroup="Delete the selected Extension Groups?";
l.cp.alert.tipselone = "Please select at least one item."; 
l.cp.alert.tipseloneextend="Please select at least one extension to delete.";
l.cp.alert.tipselonegroup="Please select at least one extension group to delete.";
l.cp.alert.extoutrange = "Extension is not within the defined extension range.";
l.cp.alert.patternrepeat = "Duplicate Patterns.";
l.cp.alert.outrouterrepeat = "The outbound route name already exists.";
l.cp.alert.selonepattern = "There must be more than one Dial Pattern.";
l.cp.alert.seloneextension = "At least one extension must be added to this outbound route.";
l.cp.alert.selonetrunk = "At least one trunk must be added to this route.";
l.cp.alert.inrouterrepeat = "The inbound route name already exists.";
l.cp.alert.validdod = "Please enter a valid DOD number range. ";
l.cp.alert.dodcntunmatch = "The DOD number count does not match the numbers of extension selected.";
l.cp.alert.enterdod = "Enter DOD.";
l.cp.alert.seloneexten = "Please select at least one extension. ";
l.cp.alert.selotherexten = "The extension has been added. Please choose another one. ";
l.cp.alert.didprefixtip = "The number of combination of DID Pattern and Caller ID Pattern should not be greater than 300. ";
l.cp.alert.rangeerror = "Range To value should be greater than the Range From value.";
l.cp.alert.selothertrunk = "The physical trunks may not be deleted.";
l.cp.alert.outrange = "Number is not within the defined range.";
l.cp.alert.seloneoutrouter = "At least one outbound route must be selected.";
l.cp.alert.tipdelphysical = "The selected physical trunk will not be deleted.";
l.cp.alert.namerepeat = "This name already exists.";
l.cp.alert.numberrepeat = "This number already exists.";
l.cp.alert.nameisnan = "The name cannot contain only numeric";
l.cp.alert.coderepeat = "This feature code already exists.";
l.cp.alert.pinlistlength =  "The number length should be less than 8.";
l.cp.alert.blacklistlength =  "The number length should be less than 16.";
l.cp.alert.dodlength =  "The DOD number length should be less than 15.";
l.cp.alert.exceedlimit = "The number exceeds the max limit.";
l.cp.alert.startltend = "The end time must be greater than start time. ";
l.cp.alert.leastoneweekday = "Select at least one weekday. ";
l.cp.alert.leastonemonth = "Select at least one month.";
l.cp.alert.leastoneday = "Select at least one day.";
l.cp.alert.leastoneexttype = "Select at least one extension type.";
l.cp.alert.hstartleend = "The start time must be less than end time. ";
l.cp.alert.timeconditionrepeat = "Duplicate time condition.";
l.cp.alert.rebootnow = "Save successfully. Please reboot to take effect. Reboot now? <br>(Yes reboot now. No I will reboot later manually.)";
l.cp.alert.scoperepeat = "Duplicate number range.";
l.cp.alert.callparkrepeat = "Duplicate number range with parking extension range.";
l.cp.alert.startendlimit = "Start number must be less than end number. ";
l.cp.alert.rtpportlimit = "From-port and To-port should have a difference value between 100 and 10000. From-port cannot be less than 10000.";
l.cp.alert.filenamerepeat = "Duplicate file name. Continue to upload the file? The file will replace the existing file if you continue. ";
l.cp.alert.seloneconference = "Select at least one conference room.";
l.cp.alert.importsuccess = "Import successfully.";
l.cp.alert.importfailed = "Partially imported.";
l.cp.alert.importspecial = "Contains special character.";
l.cp.alert.importmustfill = "Please fill in the required field.";
l.cp.alert.importexistreload = "The existing fields has been updated with new values.";
l.cp.alert.importfileerror = "File Format Error.";
l.cp.alert.importmaxlimit = "Reaches the max import limit. The exceeding part will not be imported.";
l.cp.alert.importerrorencoding = "Please choose a UTF-8 csv file to import.";
l.cp.alert.importunknownnode = "The contacts that do not specify &#34;Phonebook&#34; will not be imported. Note: you cannot generate the default LDAP phonebook by import.";
l.cp.alert.importcheck = "Error in some fields. Please check if the required fields have error.";
l.cp.alert.importreplace = "Some fields have been replaced.";
l.cp.alert.exportempty = "Nothing to export.";
l.cp.alert.downloadempty = "Nothing to download.";
l.cp.alert.leavewithoutsave = "Leave without saving?";
l.cp.alert.maxiprestrict = "Max Permitted IP/Mask Count.";
l.cp.alert.pop3failed = "POP3 Test Failed.";
l.cp.alert.ssmtpfailed = "SMTP Test Failed.";
l.cp.alert.testfail = "Test Failed.";
l.cp.alert.testsuccess = "Test Successfully.";
l.cp.alert.maxtime = "Max Time Count.";
l.cp.alert.formatting = "Formatting";
l.cp.alert.formatconfirm = "Formatting disk will clean up the files in the disk, do you want to continue?";
l.cp.alert.formatsuccess = "Format Successfully.";
l.cp.alert.formatfailed = "Format Failed.";
l.cp.alert.formatfailedinused = "Format failed. Device may be in use.";
l.cp.alert.formattip = "Formatting will take several minutes, during this process, you should not disconnect unit from the power or do other actions, or the disk may be damaged.";
l.cp.alert.removeconfirm = "Are you sure you wish to remove?";
l.cp.alert.removesuccess = "Removed successfully";
l.cp.alert.removefailed = "Failed to remove! The device is in use, please make sure there is no call being recorded and remove later.";
l.cp.alert.maxitemcount = "Reached the maximum item limit. Please delete some items first before adding.";
l.cp.alert.bulkmaxitem = "Bulk create successfully. The extensions exceeding the batch limit are not created. The batch limit is: ";
l.cp.alert.systeminuse = "In use now. Please change the storage location before operation.";
l.cp.alert.restore = "This action will erase all current configuration data from the system. \n\n Are you sure you wish to proceed?\n\n Upon completion, a system reboot will be required.\n\n You may reboot the system now or once all configuration changes have been completed."
l.cp.alert.packets = "The Packets must be between 1 and 120.";
// l.cp.alert.fwdropall = "At least one &#34;TCP&#34; &#34;Accept&#34; common rule must be created for each of these ports:\nSSH: %p1, %p3: %p2 before you enable &#34;Drop All&#34;.";
l.cp.alert.rebooting = "Rebooting";
l.cp.alert.reboottext = "It will take about 1 minute to reboot, please wait.";
l.cp.alert.backupfilebroken = "The backup file is corrupted. Please back up again or use a new backup file.";
l.cp.alert.reboot = "Reboot";
l.cp.alert.emailnotexist = "The user does not have an associated email address. Please contact administrator to change password. ";
l.cp.alert.usernotexist = "The user does not exist. Please enter a valid user.";
l.cp.alert.findpasssuccess = "An email has been sent to the associated email address. Follow the directions in the email to reset the password within 30 minutes.";
l.cp.alert.findpassfailed = "Failed to send email.";
l.cp.alert.pwdunmatch = "Passwords mismatch. Please enter again.";
l.cp.alert.modifypasssuccess = "Password reset. Please log in with the new password.";
l.cp.alert.modifypassfailed = "The user does not exist. Please make sure the link is valid. ";
l.cp.alert.invalidurl = "The reset link has expired. Please request a new one. ";
l.cp.alert.modifypasserror = "Failed to reset password.";
l.cp.alert.suretoreboot = "Are you sure you wish to reboot system?";
l.cp.alert.suretoreset = "Reset operation will erase all configuration data on PBX and reset the system to factory defaults. Continue?";
l.cp.alert.downloadfail = "Download failed";
l.cp.alert.downloading = "Downloading";
l.cp.alert.dwonloadtext = "Downloading...";
l.cp.alert.backupfilebroken = "The backup file is corrupted. Please back up again or use a new backup file.";
l.cp.alert.imagefileerror = "Image file error";
l.cp.alert.upgradefailed = "Upgrade failed. Please make sure the network is in good connection and check if the file exists.";
l.cp.alert.upgradeing = "Upgrading";
l.cp.alert.upgradetext = "It will take about 2 minutes to upgrade, please wait...";
l.cp.alert.rxflasherror = "Min Flash Detection must be smaller than Max Flash Detect."
l.cp.alert.logout = "Are you sure you wish to logout?";
l.cp.alert.detectnew = "Updates detected";
l.cp.alert.updatelater = "Update Later";
l.cp.alert.updatenow = "Update Now";
l.cp.alert.nonewversion = "This is the latest version.";
l.cp.alert.oldpwdempty = "Please enter old password";
l.cp.alert.newpwdempty = "Please enter new password";
l.cp.alert.retypenewpwdempty = "Please reenter new password";
l.cp.alert.oldpwdunmatch = "Wrong password. Please try again.";
l.cp.alert.oldnewpwdsame = "The old and new password cannot be the same.";
l.cp.alert.newpwddefault = "The new password cannot be the same with default password.";
l.cp.alert.modifysuccess = "Successfully modified";
l.cp.alert.modifyfailed = "Failed to modify";
l.cp.alert.userrepeat = "The User already exists.";
l.cp.alert.physicalnotallow = "Analog trunk and GSM/UMTS trunk do not support DID. ";
l.cp.alert.addroutefailed = "Failed to add. Please check if the route already exists or if the configuration is correct.";
l.cp.alert.dwonloadingtext = "Downloading...";
l.cp.alert.installingtext = "Installing...";
l.cp.alert.installfail = "Install Fail";
l.cp.alert.installsuccess = "Install Successfully";
l.cp.alert.enablehttps = "Redirect is invalid if the port is set to 80.";
l.cp.alert.callparkpos = "Please enter a valid parking extension range.";
l.cp.alert.tipdelblacklist = "The selected number created by the Administrator will not be deleted.";
l.cp.alert.tipsetread = "Mark as read?";
l.cp.alert.tipsetunread = "Mark as unread?";
l.cp.alert.dnisempty = "Please enter the DNIS Name.";
l.cp.alert.cbdelay = "Delay before callback should be at least 5s";
l.cp.alert.checkwait = "Validating image file. Please wait.";
l.cp.alert.memberexceed = "The members exceed the max limit.";
l.cp.alert.ipattack = "There are new attacks.";
l.cp.alert.registerpasslen = "The length of the registration password should be at least";
l.cp.alert.loginpasslen = "The length of the user password should be at least";
l.cp.alert.tipuninstall = "Are you sure you wish to uninstall?";
l.cp.alert.logintimeout = "Login timeout, please login again.";
l.cp.alert.rebootcall = "There are calls in progress, are you sure you wish to reboot now?";
l.cp.alert.resetcall = "There are calls in progress, are you sure you wish to reset now?<br>Reset operation will erase all configuration data on PBX and reset the system to factory defaults.";
l.cp.alert.installcall = "There are calls in progress, please try again later.";
l.cp.alert.upgradecall = "There are calls in progress, are you sure you want to upgrade now?";
l.cp.alert.upgradeapp = "App upgrading now, please try again later.";
l.cp.alert.upgradcurrent = "System upgrading now, please try again later.";
l.cp.alert.appinstall = "App installed. Refresh the page to take effect.";
l.cp.alert.appuninstall = "App uninstalled. Refresh the page to take effect.";
l.cp.alert.noallowreboot = "You do not have privileges to reboot the system, please contact Administrator.";
l.cp.alert.permittediprepeat = "The permitted IP already exists.";
l.cp.alert.tipimportdownload = "Download the file and check for the replaced fields?";
l.cp.alert.strongpassnum = "Registration Password must contain numbers and both uppercase and lowercase letters.";
l.cp.alert.strongpass = "Registration Password must contain uppercase and lowercase letters.";
l.cp.alert.checkfirmwarefailed = "Check failed. Please make sure the network is operating normally.";
l.cp.alert.maxitemcustomemail = "Reached the maximum limit of the custom emails.";
l.cp.alert.validdest = "Please select a valid destination";

ns.register("l.cp.common");
l.cp.common.rowsperpage = "rows per page";
l.cp.common.loading = "Loading";
l.cp.common.show = "Show";
l.cp.common.total = "Total";
l.cp.common.view = "View";
l.cp.common.add = "Add";
l.cp.common.edit = "Edit";
l.cp.common.deleted = "Delete";
l.cp.common.save = "Save";
l.cp.common.ensure = "Ensure";
l.cp.common.cancel = "Cancel";
l.cp.common.reboot = "Reboot";
l.cp.common.pleasewait = "Please wait...";
l.cp.common.basic = "Basic";
l.cp.common.advanced = "Advanced";
l.cp.common.general = "General";
l.cp.common.empty = "No items defined.";
l.cp.common.custom = "Custom";
l.cp.common.scustom = "[Custom]";
l.cp.common.unlimited = "Unlimited";
l.cp.common.dod = "DOD";
l.cp.common.sdefault = "Default";
l.cp.common.available = "Available";
l.cp.common.selected = "Selected";
l.cp.common.none = "None";
l.cp.common.nosetemail = "Not Set Email";
l.cp.common.pleasesel = "Please select";
l.cp.common.sun = "Sunday";
l.cp.common.mon = "Monday";
l.cp.common.tue = "Tuesday";
l.cp.common.wen = "Wednesday";
l.cp.common.thu = "Thursday";
l.cp.common.fri = "Friday";
l.cp.common.sat = "Saturday";
l.cp.common.jan = "January";
l.cp.common.feb = "February";
l.cp.common.mar = "March";
l.cp.common.apr = "April";
l.cp.common.may = "May";
l.cp.common.jun = "June";
l.cp.common.jul = "July";
l.cp.common.aug = "August";
l.cp.common.sep = "September";
l.cp.common.oct = "October";
l.cp.common.nov = "November";
l.cp.common.dec = "December";
l.cp.common.first = "First";
l.cp.common.second = "Second";
l.cp.common.third = "Third";
l.cp.common.fourth = "Fourth";
l.cp.common.last = "Last";
l.cp.common.options = "Options";
l.cp.common.uploading = "Uploading...";
l.cp.common.movetop = "To Top";
l.cp.common.movebottom = "To bottom";
l.cp.common.moveup = "Upper";
l.cp.common.movedown = "Lower";
l.cp.common.event1000 = "Modify Administrator Password";
l.cp.common.event1001 = "User Login Success";
l.cp.common.event1002 = "User Login Failed";
l.cp.common.event1003 = "User Lockout";
l.cp.common.event2000 = "VoIP Peer Trunk Registration Failed";
l.cp.common.event2001 = "VoIP Register Trunk Registration Failed";
l.cp.common.event2002 = "Outgoing Call Failed";
l.cp.common.event3000 = "CPU Overload";
l.cp.common.event3001 = "Memory Overload";
l.cp.common.event3002 = "Concurrent Calls Overload";
l.cp.common.event3003 = "Disk Failure";
/*l.cp.common.event3004 = "Storage Full";*/
l.cp.common.event3005 = "Network Failure";
l.cp.common.event3006 = "Network Attacked";
l.cp.common.event3007 = "System Reboot";
l.cp.common.event3008 = "System Upgrade";
l.cp.common.event3009 = "System Restore";
l.cp.common.event3010 = "System Reset";
l.cp.common.config = "Configure";
l.cp.common.format = "Format";
l.cp.common.remove = "Remove Safely"; 
l.cp.common.unmountnet = "Unmount NetDisk";
l.cp.common.notinserted = "Not Inserted";
l.cp.common.unmounted = "Unmounted";
l.cp.common.unformatted = "Error Format"; //Unformatted
l.cp.common.all = "All";
l.cp.common.search = "Search";
l.cp.common.value = "Value";
l.cp.common.browsefile = "Browsing File";
l.cp.common.tftpdownload = "Download From TFTP Server";
l.cp.common.httpdownload = "Download From HTTP Server";
l.cp.common.tftpurl = "TFTP URL";
l.cp.common.httpurl = "HTTP URL";
l.cp.common.server = "TFTP Server";
l.cp.common.filename = "File Name";
// l.cp.common.everyday = "Every Day";
l.cp.common.everysun = "Every Sunday";
l.cp.common.everymon = "Every Monday";
l.cp.common.everytue = "Every Tuesday";
l.cp.common.everywen = "Every Wednesday";
l.cp.common.everythu = "Every Thursday";
l.cp.common.everyfri = "Every Friday";
l.cp.common.everysat = "Every Saturday";
l.cp.common.result = "Result";
l.cp.common.yes = "Yes";
l.cp.common.no = "No";
l.cp.common.choosefile = "Please choose a file";
l.cp.common.detail = "Detail";
l.cp.common.auto = "Auto";
l.cp.common.seconds = "Seconds";
l.cp.common.previous = "Previous";
l.cp.common.next = "Next";
l.cp.common.finish = "Finish";
l.cp.common.tippwd = "The current password is not strong enough, please change it.";
l.cp.common.tipemail = "The Email will help you to recover the password. An email address bound with your account is strongly recommended.";
l.cp.common.donotremind = "Don't show again";
l.cp.common.apply = "Apply";
l.cp.common.send = "Send";
l.cp.common.prefix = "Prefix";

ns.register("l.cp.valid");
l.cp.valid.invalidnumeric = "Only numerics are allowed.";
l.cp.valid.invalidhost = "Only alphanumerics, _ are allowed.";
l.cp.valid.invalidformat = "Please enter a correct format.";
l.cp.valid.invalidhexnumber = "Only numeric, hexadecimal and minus characters are allowed, the format should be XX-XX-XX or XX.";
l.cp.valid.invalidldapnode = "Only alphanumeric, comma and equal sign and characters are permitted.";
l.cp.valid.invalidwebspecial = "&\"\'\\<>`|$ are not valid in this field";
l.cp.valid.invalidwebspecialimport = "&\"\'\\<>`|$, are not valid in this field";
l.cp.valid.invalidnameconfig = "Spaces and :!$()\/#;,[]\\\"=<>&'`^%@{}| are not valid in this field";
l.cp.valid.invalidpwdconfig = "Spaces and ;&\"\'\\<>`| are not valid in this field";
l.cp.valid.invalidfullname = "!%.@:;&\"\'\\<>`$ are not valid in this field";
l.cp.valid.invaliddbgrantpwd = "Only alphanumeric, .()-@*%~#:? are valid.";
l.cp.valid.numbercomma = "Only numeric and comma are valid.";
l.cp.valid.numberasterisk = "Only numeric and * are valid.";
l.cp.valid.numberasteriskpound = "Only numeric, *# are valid.";
l.cp.valid.invalidnumericunlimited = "Only numeric and &#34;Unlimited&#34; are valid.";
l.cp.valid.invalidnumbercommanone = "Only numeric, comma and &#34;None&#34; are valid.";
l.cp.valid.numberplus = "Only numeric and plus are valid.";
l.cp.valid.numberminus = "Only numeric and minus are valid.";
l.cp.valid.numbercommaminus = "Only numeric, comma and minus are valid.";
l.cp.valid.alphanumeric = "Only alphanumeric are valid.";
l.cp.valid.alphanumplus = "Only alphanumeric and plus are valid.";
l.cp.valid.alphanumplusminus = "Only alphanumeric, plus symbol, and minus symbol are valid.";
l.cp.valid.invalidcharacter = "Invalid character in this field.";
l.cp.valid.invalidsharename = "\/\\:*?<>|&\"\'<>`$ are not valid in this field";
l.cp.valid.invalidfile = "Only alphanumeric, .-_\\ are valid.";
l.cp.valid.invalidcsvfile = "Please select a \".csv\" file, and the file name should not have special characters.";
l.cp.valid.invalidpinset = "Only numeric and separator are valid."
l.cp.valid.invalidsyspromptfile = "Please select a \".tar\" file, and the file name should not have special characters.";
l.cp.valid.invalidpromptfile = "Please select a \".wav\",\".WAV\" or \".gsm\" file, and the file name should not have special characters.";
l.cp.valid.invalidvpnprofile = "Please select a \".tar\" or \".zip\" file, and the file name should not have special characters.";
l.cp.valid.invalidcfgfile = "Please select a \".cfg\" file, and the file name should not have special characters.";
l.cp.valid.invalidbinfile ="Please select a \".bin\" file, and the file name should not have special characters.";
l.cp.valid.invalidxmlfile = "Please select a \".xml\" file, and the file name should not have special characters.";
l.cp.valid.invalidsubject = "#[]\\\" are not allowed in this field";
l.cp.valid.invalidduration = "Only numbers, equal symbol, less-than and greater-than symbols, and number ranges can be entered.";
l.cp.valid.invalidbakfile = "Please select a \".bak\" file, and the file name should not have special characters.";
l.cp.valid.invalidport = "The valid port range is 0-65535";
l.cp.valid.invaliddchannel = "The valid range for D Channel is 1-31";
l.cp.valid.invalidtjdchannel = "The valid range for D Channel is 1-24";
l.cp.valid.invalidemail = "Please enter a valid email address, and the email should not have special characters.";
l.cp.valid.invalidminrxflash = "The valid range for Min Flash Detection is 100-1000";
l.cp.valid.invalidrxflash = "The valid range for Max Flash Detection is 300-1400.";
l.cp.valid.invalidpositivenumber = "Only numeric greater than zero are permitted.";
l.cp.valid.invalidnumberpercent = "Please enter a valid percent, and the range is between 30-99.";
l.cp.valid.invalidmaxduration = "Only numeric, &#34;System Default&#34; and &#34;Unlimited&#34; are permitted values.";
l.cp.valid.password="Password do not match";

ns.register("l.mysettings");
l.mysettings.self = "My Settings";
l.mysettings.setting = "Settings";
l.mysettings.oldpassword = "Old Password";
l.mysettings.password = "New Password";
l.mysettings.retypepassword = "Retype New Password";
l.mysettings.bindemail = "Binding Email Settings";
l.mysettings.email = "Email Address";

ns.register("l.cp.network");
l.cp.network.menunetwork = "Network";
l.cp.network.self = "Network";
l.cp.network.basic = "Basic Settings";
l.cp.network.vpn = "OpenVPN";
l.cp.network.ddns = "DDNS Settings";
l.cp.network.staticroutes = "Static Routes";
l.cp.network.hostname = "Hostname";
l.cp.network.mode = "Mode";
l.cp.network.dual = "Dual";
l.cp.network.bridge = "Bridge";
l.cp.network.gwnic = "Default Interface";
l.cp.network.eth0 = "LAN";
l.cp.network.eth1 = "WAN";
l.cp.network.dhcp = "DHCP";
l.cp.network.staticip = "Static IP Address";
l.cp.network.pppoe = "PPPoE";
l.cp.network.enablevlan = "Enable VLAN";
l.cp.network.vlanid = "VLAN ID";
l.cp.network.vlanpriority = "VLAN Priority";
l.cp.network.ipaddress = "IP Address";
l.cp.network.netmask = "Subnet Mask";
l.cp.network.gateway = "Gateway";
l.cp.network.dns1 = "Preferred DNS Server";
l.cp.network.dns2 = "Alternative DNS Server";
l.cp.network.pppoeusername = "Username";
l.cp.network.pppoepassword = "Password";
l.cp.network.macaddress = "MAC Address";
l.cp.network.reconnect = "Reconnect";
l.cp.network.connecttype = "Type";
l.cp.network.status = "Status";

ns.register("l.cp.ddns");
l.cp.ddns.self = "DDNS Settings";
l.cp.ddns.ddnsstatus = "DDNS Status";
l.cp.ddns.running = "DDNS is running";
l.cp.ddns.notrunning = "DDNS is not running";
l.cp.ddns.enableddns = "Enable DDNS";
l.cp.ddns.ddnsserver = "DDNS Server";
l.cp.ddns.username = "Username";
l.cp.ddns.password = "Password";
l.cp.ddns.freednshash = "Hash";
l.cp.ddns.domain = "Domain";

ns.register("l.cp.staticroutes");
l.cp.staticroutes.self = "Static Routes";
l.cp.staticroutes.routing = "Routing Table";
l.cp.staticroutes.destination = "Destination";
l.cp.staticroutes.subnet = "Subnet Mask";
l.cp.staticroutes.gateway = "Gateway";
l.cp.staticroutes.metric = "Metric";
l.cp.staticroutes.iface = "Interface";
//l.cp.staticroutes.eth0 = "LAN";
//l.cp.staticroutes.eth1 = "WAN";
//l.cp.staticroutes.ppp0 = "PPP0";
//l.cp.staticroutes.tun0 = "TUN0";
//
ns.register("l.cp.vpn");
l.cp.vpn.self = "VPN Client";
l.cp.vpn.type = "Type";
l.cp.vpn.detailedcfg = "Manual Configuration ";
l.cp.vpn.packagecfg = "Upload OpenVPN Package";
l.cp.vpn.enable = "Enable OpenVPN";
l.cp.vpn.serveraddr = "Server Address";
l.cp.vpn.serverport = "Server Port";
l.cp.vpn.protocol = "Protocol";
l.cp.vpn.device = "Device Mode";
l.cp.vpn.username = "Username";
l.cp.vpn.password = "Password";
l.cp.vpn.encryption = "Encryption";
l.cp.vpn.compression = "Compression";
l.cp.vpn.proxyserver = "Proxy Server";
l.cp.vpn.proxyport = "Proxy Port";
l.cp.vpn.cacertfile = "CA Cert";
l.cp.vpn.certfile = "Cert";
l.cp.vpn.keyfile = "Key";
l.cp.vpn.tlsauth = "TLS Authentication";
l.cp.vpn.takeyfile = "TA Key";
l.cp.vpn.useprofile = "Enable";
l.cp.vpn.vpnprofile = "VPN Profile";
l.cp.vpn.status = "Status";
l.cp.vpn.ptp = "P-t-P";

ns.register("l.cp.security");
l.cp.security.menusecurity = "Security";

ns.register("l.cp.defense");
l.cp.defense.self = "IP Auto Defense";
l.cp.defense.add = "Add IP Auto Defense Rule";
l.cp.defense.edit = "Edit IP Auto Defense Rule";
l.cp.defense.rules = "Auto Defense Rules";
l.cp.defense.port = "Port";
l.cp.defense.protocol = "Protocol";
l.cp.defense.rate = "Rate";
l.cp.defense.packets = "Number of IP Packets";
l.cp.defense.fwinterval = "Time Interval (s)";

ns.register("l.cp.blockedip");
l.cp.blockedip.self = "Blocked IP Address";
l.cp.blockedip.datetime = "Time of Attack";
l.cp.blockedip.protocol = "Protocol";
l.cp.blockedip.dstport = "Attacked Port";
l.cp.blockedip.srcip = "Source IP Address";

ns.register("l.cp.fwrules");
l.cp.fwrules.self = "Firewall Rules";
l.cp.fwrules.add = "Add Firewall Rule";
l.cp.fwrules.edit = "Edit Firewall Rule";
l.cp.fwrules.rulename = "Name";
l.cp.fwrules.fwdescribe = "Description";
l.cp.fwrules.action = "Action";
l.cp.fwrules.reject = "Reject";
l.cp.fwrules.accept = "Accept";
l.cp.fwrules.ignore = "Ignore";
l.cp.fwrules.protocol = "Protocol";
l.cp.fwrules.mac = "MAC Address";
l.cp.fwrules.ip = "Source IP Address/Subnet Mask";
l.cp.fwrules.port = "Port";
l.cp.fwrules.enable = "Enable Firewall";
l.cp.fwrules.disableping = "Disable Ping";
l.cp.fwrules.dropall = "Drop All";
l.cp.fwrules.running = "Firewall is running";
l.cp.fwrules.notrunning = "Firewall is not enabled";
  
ns.register("l.cp.service");
l.cp.service.self = "Service";
l.cp.service.webprotocol = "Protocol";
l.cp.service.webport = "Port";
l.cp.service.redirecturl = "Redirect from port 80";
l.cp.service.enablehttp = "Enable HTTP";
l.cp.service.enablehttps = "Enable HTTPS";
l.cp.service.httpscert = "Certificate";
l.cp.service.enablessh = "Enable SSH";
l.cp.service.enableftp = "Enable FTP";
l.cp.service.enabletftp = "Enable TFTP";
l.cp.service.bindport = "IAX Port";
l.cp.service.udpport = "SIP UDP Port";
l.cp.service.enabletcp = "Enable SIP TCP";
l.cp.service.enabletls = "Enable SIP TLS";
l.cp.service.enable = "Enable DHCP Server";
l.cp.service.routers = "Gateway";
l.cp.service.status = "Status";
l.cp.service.dhcprunning = "DHCP is running.";
l.cp.service.dhcpnotrunning = "DHCP is not running";
l.cp.service.subnetmask = "Subnet Mask";
l.cp.service.dns1 = "Preferred DNS Server";
l.cp.service.dns2 = "Alternate DNS Server";
l.cp.service.ipfrom = "DHCP Address Range";
l.cp.service.tftpserver = "TFTP Server";
l.cp.service.ntpserver = "NTP Server";
l.cp.service.enableami = "Enable AMI";
l.cp.service.username = "Username";
l.cp.service.password = "Password";
l.cp.service.amiport = "Port";
l.cp.service.ippermit = "Permitted IP/Subnet Mask";

ns.register("l.cp.cert");
l.cp.cert.self = "Certificate";
l.cp.cert.name = "Name";
l.cp.cert.type = "Type";
l.cp.cert.issuedto = "Issue To";
l.cp.cert.expiration = "Expiration";
l.cp.cert.upload = "Upload Certificate";
l.cp.cert.trusted  = "Trusted Certificate";
l.cp.cert.server = "PBX Certificate";
l.cp.cert.choosefile = "Please choose a certificate";
l.cp.cert.uploadsuccess = "Upload Successfully";
l.cp.cert.uploadfailed = "Upload failed, please choose a correct format file to upload.";

ns.register("l.cp.database");
l.cp.database.self = "Database Grant";
l.cp.database.add = "Add Database Grant";
l.cp.database.edit = "Edit Database Grant";
l.cp.database.username = "Username";
l.cp.database.password = "Password";
l.cp.database.host = "Permitted IP";


ns.register("l.cp.userpermission");
l.cp.userpermission.menuuserpermission = "User Permission";
l.cp.userpermission.self = "User Permission";
l.cp.userpermission.username = "User";
l.cp.userpermission.id = "User";
l.cp.userpermission.type = "Set Privilege As";
l.cp.userpermission.admin = "Administrator";
l.cp.userpermission.operator = "Operator";
l.cp.userpermission.custom = "Custom";
l.cp.userpermission.add = "Grant Privilege";
l.cp.userpermission.edit = "Edit Privilege";
l.cp.userpermission.displaytype = "Role";
l.cp.userpermission.viewrecord = "Recording Permission";
l.cp.userpermission.yes = "All Extensions";
l.cp.userpermission.no = "Selected Extensions";
//l.cp.userpermission.cdrextensions = "Allowed to Check";



ns.register("l.cp.time");
l.cp.time.menutime = "Date & Time";
l.cp.time.self = "Date & Time";
l.cp.time.currenttime = "Current Time";
l.cp.time.timezone = "Time Zone";
l.cp.time.enabledst = "Daylight Saving Time";
l.cp.time.enablentp = "Synchronize With NTP Server";
l.cp.time.ntpserver = "NTP Server";
l.cp.time.enablemanually = "Set Up Manually";
l.cp.time.date = "Date";
l.cp.time.time = "Time";
l.cp.time.no = "Disabled";
l.cp.time.yes = "Automatic";


ns.register("l.cp.email");
l.cp.email.menuemail = "Email";
l.cp.email.self = "Email";
l.cp.email.email = "Email Address";
l.cp.email.secret = "Password";
l.cp.email.sendername = "Sender Name";
l.cp.email.smtpserver = "Outgoing Mail Server (SMTP)";
l.cp.email.pop3server = "Incoming Mail Server (POP3)";
l.cp.email.usessl = "Enable TLS";
        
ns.register("l.cp.storage");
l.cp.storage.menustorage = "Storage";
l.cp.storage.self = "Storage";
l.cp.storage.preference = "Preference";
l.cp.storage.autoclean = "Auto Cleanup";
l.cp.storage.enablecdrautoclean = "Enable Auto Cleanup";
l.cp.storage.maxnumbercdr = "Max Number Of CDR";
l.cp.storage.keepcdrday = "CDR Preservation Duration";
l.cp.storage.enablevmautoclean = "Enable Auto Cleanup";
l.cp.storage.maxnumbervm = "Max Number Of Files";
l.cp.storage.keepvmminute = "Files Preservation Duration";
l.cp.storage.enablerecordautoclean = "Enable Auto Cleanup";
l.cp.storage.maxusagedevice = "Max Usage Of Device";
l.cp.storage.keeprecordday = "Recordings Preservation Duration";
l.cp.storage.enablelogautoclean = "Enable Auto Cleanup";
l.cp.storage.maxnumberlog = "Max Number Of Logs";
l.cp.storage.keeplogday = "Logs Preservation Duration";
l.cp.storage.showcdr = "CDR Auto Cleanup";
l.cp.storage.voicemail = "Voicemail and One Touch Recording Auto Cleanup";
l.cp.storage.showrecording = "Recordings Auto Cleanup";
l.cp.storage.logs = "Logs Auto Cleanup";
l.cp.storage.slotcdr = "CDR";
l.cp.storage.slotvm = "Voicemail & One Touch Recordings";
l.cp.storage.slotrecording = "Recordings";
l.cp.storage.slotlog = "Logs";
l.cp.storage.name = "Name";
l.cp.storage.type = "Type";
l.cp.storage.total = "Total";
l.cp.storage.unused = "Available Size";
l.cp.storage.usepercent = "Usage";
l.cp.storage.list = "Storage Devices";
l.cp.storage.locations = "Storage Locations";
l.cp.storage.netdiskstatus = "Running Status";
l.cp.storage.enable = "Enable";
l.cp.storage.host = "Host/IP";
l.cp.storage.sharename = "Share Name";
l.cp.storage.username = "Access Username";
l.cp.storage.password = "Access Password";
l.cp.storage.recoding = "Recording Settings";

ns.register("l.cp.eventsetting");
l.cp.eventsetting.self = "Event Settings";
l.cp.eventsetting.name = "Name";
l.cp.eventsetting.record = "Record";
l.cp.eventsetting.notification = "Notification";
l.cp.eventsetting.editmessage = "Edit Notification Template";
l.cp.eventsetting.operation = "Operation";
l.cp.eventsetting.telephony = "Telephony";
l.cp.eventsetting.system = "System";
l.cp.eventsetting.msgtemplate = "Edit Notification Template";
l.cp.eventsetting.variable = "Template Variables";
l.cp.eventsetting.subject = "Subject";
l.cp.eventsetting.notifycontext = "Content";
l.cp.eventsetting.variable1000 = "IP Address: ${ipaddr}";
l.cp.eventsetting.variable1001 = "Username: ${username}<br>IP Address: ${ipaddr}";
l.cp.eventsetting.variable1002 = "Username: ${username}<br>IP Address: ${ipaddr}";
l.cp.eventsetting.variable1003 = "Username: ${username}<br>IP Address: ${ipaddr}";
l.cp.eventsetting.variable2000 = "VoIP Peer Trunk Provider: ${provider}<br>Protocol: $(protocol)<br>Hostname: ${hostname}";
l.cp.eventsetting.variable2001 = "VoIP Register Trunk Provider: ${provider}<br>Protocol: $(protocol)<br>Hostname: ${hostname}<br>Username: ${username}";
l.cp.eventsetting.variable2002 = "Trunk Provider: ${provider}<br>Calling Party Number: ${srcnumber}<br>Called Party Number: ${destnumber}";
l.cp.eventsetting.variable3000 = "Current CPU Usage: ${curusage}";
l.cp.eventsetting.variable3001 = "Current Memory Usage: ${curusage}";
l.cp.eventsetting.variable3002 = "The Max Concurrent Call: ${concurrentcall}<br>The Real-Time Concurrent Call: ${realtimecall}";
l.cp.eventsetting.variable3003 = "Hard Disk: ${harddisk}";
l.cp.eventsetting.variable3004 = "Storage Device: ${device}<br>Total Size: ${tsize}<br>Capacity Available: ${asize}";
l.cp.eventsetting.variable3005 = "Cause: ${cause}";
l.cp.eventsetting.variable3006 = "IP Address: ${ipaddr}";
l.cp.eventsetting.variable3007 = "Cause: ${cause}<br>Username: ${username}";
l.cp.eventsetting.variable3008 = "Result: ${result}<br>Old Version: ${oldversion}<br>New Version: ${newversion}";
l.cp.eventsetting.variable3009 = "Username: ${username}";
l.cp.eventsetting.variable3010 = "[None]";


ns.register("l.cp.contact");
l.cp.contact.self = "Notification Contacts";
l.cp.contact.name = "Name";
l.cp.contact.method = "Notification Method";
l.cp.contact.add = "Add Contact";
l.cp.contact.edit = "Edit Contact";
l.cp.contact.extensionid = "Choose Contact";
l.cp.contact.contact = "Contact Name";
l.cp.contact.enableemail = "Email";
l.cp.contact.enablesms = "SMS";
l.cp.contact.enableextension = "Call Extension";
l.cp.contact.enablemobile = "Call Mobile";
l.cp.contact.enablewechat = "Wechat Notification";
l.cp.contact.emailaddress = "Email Address";
l.cp.contact.email = "Email";
l.cp.contact.mobile = "Mobile";
l.cp.contact.wechat = "Wechat";
l.cp.contact.setemail = "Set Email";
l.cp.contact.setmobile = "Set Mobile";
l.cp.contact.setwechat = "Set Wechat";


ns.register("l.cp.eventlog");
l.cp.eventlog.self = "Event Log";
l.cp.eventlog.operation = "Operation";
l.cp.eventlog.telephony = "Telephony";
l.cp.eventlog.system = "System";
l.cp.eventlog.all = "All";
l.cp.eventlog.eventtype = "Event Type";
l.cp.eventlog.eventname= "Event Name";
l.cp.eventlog.time = "Time";
l.cp.eventlog.search = "Search";
l.cp.eventlog.type = "Type";
l.cp.eventlog.eventmessage = "Event Message";

ns.register("l.mt");
ns.register("l.mt.upgrade");
l.mt.upgrade.self = "Upgrade";
l.mt.upgrade.upgrademanually = "Manual Upgrade";
l.mt.upgrade.upgradeautomatically = "Automatic Upgrade";
l.mt.upgrade.type = "Type";
l.mt.upgrade.choosefile = "Choose a file";
l.mt.upgrade.checknew = "Check for new Firmware";
l.mt.upgrade.close = "Never check for updates";
l.mt.upgrade.autocheck = "Check for updates and let me choose whether to upgrade";
l.mt.upgrade.autoinstall = "Check for updates and automatically install";
l.mt.upgrade.checktime = "Automatically check update at";
l.mt.upgrade.upgradetime = "Automatically upgrade at";
l.mt.upgrade.reset = "Reset Configuration to Factory Default";
l.mt.upgrade.releasenote = "Release Notes";

ns.register("l.mt.backuprestore");
l.mt.backuprestore.self = "Backup and Restore";
l.mt.backuprestore.name = "Name";
l.mt.backuprestore.time = "Backup Time";
l.mt.backuprestore.memo = "Memo";
l.mt.backuprestore.file = "File Name";
l.mt.backuprestore.createnew = "Create New Backup File";
l.mt.backuprestore.upload = "Upload a Backup File";
l.mt.backuprestore.choosefile = "Choose a file";

ns.register("l.mt.rebootreset");
l.mt.rebootreset.self = "Reboot and Reset";

ns.register("l.mt.systemlog");
l.mt.systemlog.self = "System Log";
l.mt.systemlog.name = "Name";
l.mt.systemlog.systemlogset = "System Log Settings";
l.mt.systemlog.choosetorec = "Debug Mode";
l.mt.systemlog.debuglevel = "Log Level";
l.mt.systemlog.normal = "Normal";
l.mt.systemlog.debug = "Debug";
// l.mt.systemlog.enablehwlog = "Hardware Log";
// l.mt.systemlog.enabledebuglog = "Debug Log";
l.mt.systemlog.enableverbose = "Information";
l.mt.systemlog.enablenotice = "Notice";
l.mt.systemlog.enablewarning = "Warning";
l.mt.systemlog.enableerror = "Error";
l.mt.systemlog.enabledebug = "Debug";
l.mt.systemlog.enablesiptrace = "Enable SIP Debug";
l.mt.systemlog.sipip = "SIP IP";
l.mt.systemlog.enablertptrace = "Enable RTP Debug";
l.mt.systemlog.rtpip = "RTP IP";
l.mt.systemlog.enablebritrace = "Enable BRI Debug";
l.mt.systemlog.briport = "BRI Port";

ns.register("l.mt.operationlog");
l.mt.operationlog.self = "Operation Log";
l.mt.operationlog.username = "User";
l.mt.operationlog.ipaddress = "IP Address";
l.mt.operationlog.time = "Time";
l.mt.operationlog.pageoperation = "Operation";
l.mt.operationlog.detail = "Details";

ns.register("l.mt.troubleshoot");
l.mt.troubleshoot.self = "Troubleshooting";

ns.register("l.mt.ethcapture");
l.mt.ethcapture.self = "Ethernet Capture Tool";
l.mt.ethcapture.iface = "Ethernet Interface";
l.mt.ethcapture.ip = "IP Address";
l.mt.ethcapture.port = "Port";
l.mt.ethcapture.both = "Both";

ns.register("l.mt.dahdimonitor");
l.mt.dahdimonitor.self = "Port Monitor Tool";

ns.register("l.mt.ipping");
l.mt.ipping.self = "IP Ping";
l.mt.ipping.host = "Host";

ns.register("l.mt.traceroute");
l.mt.traceroute.self = "Traceroute";
l.mt.traceroute.host = "Host";

ns.register("l.app");
l.app.self = "APP Center";
l.app.all = "All";
l.app.installed = "Installed";
l.app.settings = "Settings";
l.app.autoupgrade = "Enable Auto Upgrade";
l.app.status = "Status";
l.app.localversion = "Local Version";
l.app.latestversion = "Latest Version";
//l.app.updatedate = "Update Date";
l.app.filesize = "File Size";
l.app.introduction = "Introduction";
l.app.releasenote = "Release Note";
l.app.upgradeauto = "Update APP Automatically";
l.app.upgrademode = "Upgrade Mode";
l.app.allapp = "All APP";
l.app.below = "Only APP Below";
l.app.autoprovision = "Auto Provision";
l.app.ldap = "LDAP";
l.app.linkus = LINKUS;
l.app.upgradetime = "Automatically upgrade at";
l.app.running = "Running";
l.app.notinstalled = "Not Installed";
l.app.firmwareneed = "Firmware Requirement";

ns.register("l.info");
l.info.self = "Information";
l.info.product = "Product";
l.info.serialnumber = "Serial Number";
l.info.hardwareversion = "Hardware Version";
//l.info.softwareversion = "Software Version";
l.info.systemtime = "System Time";
l.info.uptime = "Uptime";
l.info.extmaxext = "Extensions/Max Extensions";
l.info.callsmaxcalls = "Concurrent Calls/Max Concurrent Calls";

ns.register("l.hardware");
l.hardware.self = "Hardware";
l.hardware.used = "Used";
l.hardware.available = "Available";

ns.register("l.performance");
l.performance.self = "Performance";
l.performance.cpu = "CPU";
l.performance.utilization = "Utilization";
l.performance.memory = "Memory";
//l.performance.ethernet = "Ethernet";
l.performance.ethlan = "LAN";
l.performance.ethwan = "WAN";
l.performance.memorycomp ="Memory Composition";
l.performance.total = "Total";
l.performance.buffer = "Buffer";
l.performance.cached = "Cache";
l.performance.used = "Used";
l.performance.available = "Available";
l.performance.send = "Send";
l.performance.receive = "Receive";

ns.register("l.storage");
l.storage.self = "Storage Usage";
l.storage.used = "Used";
l.storage.available = "Available";

ns.register("l.hardware");
l.hardware.self = "Hardware";

l.cp.valid.invalidrandomport = "The valid port range is 5000-65535";
l.cp.alert.reconfigfirewall = "As the port has been changed, please check whether need to reconfigure the firewall settings.";
l.cp.alert.strongloginpass = "Password must contain numbers and both uppercase and lowercase letters.";
l.cp.alert.networkerror = "The device is unable to connect, please check.";
l.cp.alert.appnewestfirmware = "The new version requires higher firmware version. Please upgrade your firmware at least to version ";
l.cp.common.ok = "OK";
l.cp.common.nomessage = "There are no messages";
l.cp.common.more = "More";
l.cp.common.event3011 = "SMS To Email Failed";
l.cp.common.event3012 = "Email To SMS Failed";
l.cp.common.event3013 = "Application Upgrade";
l.cp.eventsetting.variable3011 = "Phone Number: ${phonenumber}<br>Email Address: ${emailaddr}";
l.cp.eventsetting.variable3012 = "Phone Number: ${phonenumber}<br>Email Address: ${emailaddr}";
l.cp.eventsetting.variable3013 = "Available Upgrade Application: ${appname}";
l.operation.remove = "Remove";
l.operation.format = "Format";
l.operation.detect = "Check for new Firmware";

l.cp.userpermission.controlplanel = "Settings";
l.cp.userpermission.pbx = "PBX";
l.cp.userpermission.extensions = "Extensions";
l.cp.userpermission.trunks = "Trunks";
l.cp.userpermission.callcontrol = "Call Control";
l.cp.userpermission.callfeatures = "Call Features";
l.cp.userpermission.promptsettings = "Voice Prompts ";
l.cp.userpermission.generalsettings = "General";
l.cp.userpermission.recordingsettings = "Recording";
l.cp.userpermission.system = "System";
l.cp.userpermission.networksettings = "Network";
l.cp.userpermission.securitycenter = "Security";
l.cp.userpermission.timesettings = "Date & Time";
l.cp.userpermission.emailsettings = "Email";
l.cp.userpermission.storage = "Storage";
l.cp.userpermission.eventcenter = "Event Center";
l.cp.userpermission.eventsettings = "Event Settings";
l.cp.userpermission.eventlog = "Event Log";
l.cp.userpermission.cdrandrecord = "CDR and Recordings";
l.cp.userpermission.pbxmonitor = "PBX Monitor";
l.cp.userpermission.resourcemonitor = "Resource Monitor";
l.cp.userpermission.information = "Information";
l.cp.userpermission.networkstatus = "Network";
l.cp.userpermission.performance = "Performance";
l.cp.userpermission.storageusage = "Storage Usage";
l.cp.userpermission.applicationcenter = "App Center";
l.cp.userpermission.maintenance = "Maintenance";
l.cp.userpermission.upgrade = "Upgrade";
l.cp.userpermission.backupandrestore = "Backup and Restore";
l.cp.userpermission.rebootandreset = "Reboot and Reset";
l.cp.userpermission.syslog = "System Log";
l.cp.userpermission.operatelog = "Operation Log";
l.cp.userpermission.systemtools = "Troubleshooting";
l.cp.userpermission.help = "Help";
l.cp.userpermission.ldapserver = "LDAP Server";
l.cp.userpermission.autop = "Auto Provisioning";
l.cp.userpermission.conferencepanel = "Conference Panel";
l.cp.network.single = "Single";
l.tip.network.mode = "Select the Ethernet mode. The options are:<br>"
+"· Single: only LAN port will be used for uplink connection. WAN port will be disabled.<br>"
+"· Bridge: LAN port interface will be used for uplink connection. WAN port interface will be used as bridge for PC connection. <br>"
+"· Dual: Both ports can be used for uplink connection. Users will need to assign the default interface and configure &#34;Gateway IP&#34; for this interface.";

ns.register("l.cp.autoclean");
l.cp.autoclean.self = "Auto Clean";

l.operation.mute = "Mute";
l.operation.unmute = "Unmute";
l.operation.kick = "Kick";
l.operation.invite = "Invite";
l.operation.bulkinvite = "Bulk Invite";

ns.register("l.cdrandrecord");
l.cdrandrecord.self = "CDR And Recording" ;

l.cp.network.iface = "Interface";
l.cp.eventsetting.eventname = "Event Name";
l.cp.eventsetting.enablenotify = "notification";
l.cp.eventsetting.enablerecord = "Record";
l.cp.blockedip.blackedsrcip = "Source IP Address";

l.tip.storage.keeplogday="Set the maximum number of days that system logs should be retained respectively. The maximum is &#34;15&#34;. The default is &#34;7&#34;.";
l.tip.storage.maxnumberlog="Set the maximum number of logs that event logs and operation logs  should be retained respectively.The default is &#34;20000&#34;. The oldest logs will be deleted when the threshold is reached.";
l.cp.alert.extrangetip = "Please enter the DID number range and the corresponding extension numbers, e.g.DID range:5503301-5503305, extension range:1001-1005.";

l.cp.common.confirm = "Confirm";
l.cp.common.expire = "The connection with this device will expire in";
ns.register("l.cp.cloud");
l.cp.cloud.menucloudmanagement = "Remote Management";
l.cp.cloud.enablecloud = "Enable this device to be managed by Cloud";
l.cp.cloud.activetype = "Activation Method";
l.cp.cloud.authcode = "By Authentication Code";
l.cp.cloud.ysid = "Yeastar ID";
l.cp.cloud.inputcode = "Authentication Code";
l.cp.cloud.inputyeasatrid = "By Yeastar ID";
l.cp.cloud.password = "Password";
l.cp.cloud.status= "Status";
l.cp.cloud.connected = "Connected";
l.cp.cloud.failed = "(Activate Device Failed)";
l.cp.cloud.incorrect = "(Activation failed. Your Yeastar ID or password was incorrect.)"
l.cp.cloud.maximumlimit = "(Activation failed. The number of managed devices has reached the maximum limit.)"
l.cp.cloud.activated = "(Activation failed. The device has been activated by another account.)"
l.cp.cloud.notmatch = "(Activation failed. The device information did not match the information on the cloud server.)"
l.cp.cloud.timeout = "(Activation timeout. Please check your internet connection.)";
l.cp.cloud.disconnected = "Disconnected";
l.cp.cloud.disconnect = "Disconnect";
l.cp.cloud.disconnectconfirm = "Are you sure to disconnect from Remote Management?";
l.cp.cloud.statustip = "The status of the device's connection to Remote Management. ";
l.cp.cloud.activetypetip = "Please choose the activation method. We support activate this device:<br>"
+"·By Authentication Code: enter the authentication code generated by Remote Management Service.<br>"
+"·By Yeaatar ID: enter the Yeastar ID and password.";
l.cp.cloud.authcodetip = "Please input the Authentication Code";
l.cp.cloud.ysidtip = "Please input the Yeastar ID";
l.cp.cloud.passwordtip = "Please input the password";

l.info.notification = "Notification";
l.cp.alert.portrepeat = "This port already exists.";

ns.register("l.hotstandby");
l.hotstandby.menuhotstandby = 'Hot Standby';
l.hotstandby.self = 'Hot Standby';
l.hotstandby.enable = 'Enable Hot Standby';
l.hotstandby.active = 'Active';
l.hotstandby.disable = 'Disabled';
l.hotstandby.ready = 'Standby';
l.hotstandby.error = 'Error';
l.hotstandby.userbook = 'User Manual';
l.hotstandby.mode = 'Mode';
l.hotstandby.mainserviceinfo = 'Primary Server Information';
l.hotstandby.mainservicename = 'Primary Server Hostname';
l.hotstandby.mainserviceip = 'Primary Server  IP Address';
l.hotstandby.authkeys = 'Access Code';
l.hotstandby.standbyserviceinfo = 'Secondary Server Information';
l.hotstandby.standbyservicename = 'Secondary Server Hostname';
l.hotstandby.standbyserviceip = 'Secondary Server IP Address';
l.hotstandby.advanced = 'Advanced';
l.hotstandby.keepalive = 'Keep Alive (s)';
l.hotstandby.deadtime = 'Dead Time (s)';
l.hotstandby.vipaddress = 'Virtual IP Address';
l.hotstandby.vnetmask = 'Subnet Mask';
l.hotstandby.pingnodes = 'Network Connection Detection';

ns.register("l.tip.hotstandby");
l.tip.hotstandby.mode = 'Make the device a &#34;Primary&#34; or &#34;Secondary&#34; server. The two PBX in the failover pair must choose different model.';
l.tip.hotstandby.mainservicename = 'The hostname of the other PBX in the failover pair.';
l.tip.hotstandby.mainserviceip = 'The IP address of the other PBX in the failover pair. It must be different from that of the currently configured one.';
l.tip.hotstandby.authkeys = 'The two PBX must have the same access code to authenticate connection.';
l.tip.hotstandby.keepalive = 'It sets the interval at which Heartbeat keep-alive packets are sent. The default is 2.';
l.tip.hotstandby.deadtime = 'The time after which heartbeat keep-alive packets do not get response, the system would confirm the failure of the other PBX. If you set this too low you will get the problematic cluster partition problem. The default is 120. We recommend that the time should be greater than the restart time. Otherwise the standby PBX will take over while the active PBX restarts.';
l.tip.hotstandby.vipaddress = 'Enter an unused IP address. The extensions would communicate with the server via the virtual IP address. The two PBX in the failover pair should configure the same Virtual IP address.';
l.tip.hotstandby.vnetmask = 'Enter the Subnet Mask.';
l.tip.hotstandby.pingnodes = "It's recommended that you fill in the gateway address. If all the nodes fail to be detected, it means that the PBX's network connection is abnormal. The PBX would run as the Standby server after the network recovery.";

l.hotstandby.hostname = 'Server Name';
l.hotstandby.ipaddress = 'Server IP address';
l.hotstandby.master = 'Primary';
l.hotstandby.slave = 'Secondary';
l.hotstandby.yes = 'Yes';
l.hotstandby.no = 'No';

l.cp.service.webexpiretime = 'Auto Logout Time (min)';
l.tip.service.webexpiretime = 'After the set time of inactivity, the session will automatically log out. You can set up to 120 minutes.';

l.mt.dahdimonitor.channel = "Port";

l.cp.common.event3014 = "Hot Standby Failover Action";
l.cp.eventsetting.variable3014 = "Primary Hostname: ${hostname1}<br>Primary  IP Address: ${ipaddr1}<br>Secondary Hostname:${hostname2}<br>Secondary IP Address: ${ipaddr2}";
l.cp.common.event3015 = "Abnormal D30 Module";

ns.register("l.cp.vpnserver");
l.cp.vpnserver.vpnserver = "VPN Server";
l.cp.vpnserver.virtualip = "Virtual IP Address";
l.cp.vpnserver.enable = "Running";
l.cp.vpnserver.disable = "Not Running";
l.cp.vpnserver.status = "Status";

l.cp.userpermission.vpnserver = "VPN Server";
l.cp.valid.didpattern = "DID range format: &#34;5503301-5503305&#34; or &#34;+5503301-+5503305&#34;.";
l.cp.alert.hotstandbyupgrade = "Hot Standby has been enabled, please remember to upgrade the failover pair.<br>Do you wish to continue the upgrade?";
l.cp.alert.hotstandbydhcp = "Hot Standby has been enabled, so you cannot enable DHCP in &#34;Network&#34;-&#34;Basic Settings&#34;.";
l.cp.alert.dhcphotstandby = "DHCP has been enabled in &#34;Network&#34;-&#34;Basic Settings&#34;, so you cannot enable Hot Standby.";
l.cp.common.closepanel = 'Close';
l.cp.common.browse = 'Browse';

l.cp.blockedip.blockedsrcip = "Source IP Address";
l.mt.upgrade.language = "Language";
l.cp.alert.nomoreevent = "No more events!";
l.cp.alert.noprivileges = "You do not have privileges, please contact Administrator.";
l.cp.alert.extlistexist = "One or more numbers that you wish to create for extensions has been occupied. Only the extensions whose numbers haven't been occupied can be created. <br>Existing numbers are:";
l.cp.common.mounted = "Mounted";
l.operation.firstText = "First Page";
l.operation.prevText = "Previous Page";
l.operation.nextText = "Next Page";
l.operation.lastText = "Last Page";
l.operation.refreshText = "Refresh";
l.operation.more = "More";
l.operation.back = "Back"
l.operation.invitesel = "Invite Selected";

l.cp.valid.webexpiretime = "The range is between 5-120.";

l.cp.alert.delfile = "Are you sure you want to delete this file?";
l.cp.alert.filenameexist = "Duplicate file name."; 
l.cp.valid.invalidemailpwd = "&\"\'\\<>` are not valid in this field";
l.cp.valid.invalidvpnaccount = "Only alphanumerics, _@-. are allowed.";
//l.login.findpass = "Reset password";
//l.login.findpasstip = "Please input the username.<br>The instructions will be sent to the Email bound with the username.";

l.cp.alert.lastdelete = "It is not allowed to delete the last item";
l.cp.alert.nameisroot = "The name cannot be root.";
l.cp.alert.sshdefault = "To secure your system, please change the default password";
l.cp.alert.appexist = "App already exists, are you sure you want to install again and all the file will be replaced?"
l.cp.alert.allowtrial = "Your trial periods will last for 30 days.<br>If wish to use the App after the trial expires, you can contact your equipment provider and ask for a license key.<br>Ignore this message if you have already activated the App.";
l.cp.alert.linkusinstall = "After enabled, SIP protocol will be enabled in the extensions using "+LINKUS+". And the &#34;Concurrent Registrations&#34; will be increased by 1.";
l.cp.alert.linkusuninstall = "After the uninstallation, the relevant extensions' &#34;Concurrent Registrations&#34; will be decreased by 1.";
l.cp.common.snone = "[None]";
l.cp.common.default = "[Default]";
// l.cp.common.everymonth = "Every Month";
// l.cp.common.everyweek = "Every Week";
l.cp.common.event3017 = "GSM Registration Failure";
l.cp.eventsetting.variable3017 = "GSM Trunk Name: ${trunkname}";
l.cp.common.event3018 = "Emergency Call";
l.cp.eventsetting.variable3018 = "Extension Number: ${extension}<br>Emergency Number:${emernumber}";
l.cp.common.event1004 = LINKUS+" Login Failed";
l.cp.eventsetting.variable1004 = "Extension Number: ${extension}";
l.cp.common.event1005 = LINKUS+" Client has been Locked";
l.cp.eventsetting.variable1005 = "Extension Number: ${extension}";
l.mt.backuprestore.schedule = "Backup Schedule";
l.mt.backuprestore.enable = "Enable Schedule Backup";
l.mt.backuprestore.backuptime = "Schedule";
l.mt.backuprestore.storagetype = "Location Type";
l.mt.backuprestore.backupmaxnumber = "Backup Rotation";

ns.register("l.tip.backup");
l.tip.backup.backuptime = "· Every day: schedule a backup at the specified time every day.<br>"
+"· Every week: schedule a backup at the specified day every week.<br>"
+"· Every month: schedule a backup at the specified day every month.";
l.tip.backup.storagetype = "Select where to store the backup files.";
/*l.tip.backup.backupmaxnumber = "This defines how many backup files at most will be stored in the current location. When the file number exceeds the set value, the oldest file will be replaced with the newest.";*/

ns.register("l.share");
l.share.menufileshare = "File Share";
l.share.self = "File Share";
l.share.enable = "Enable File Sharing";
l.share.sharename = "Shared File Name";
l.share.username = "Account";
l.share.password = "Password";
l.share.enabledelete = "Allow to change shared files";

ns.register("l.tip.share");
l.tip.share.sharename = "Give the shared file a name to help you identify it.";
l.tip.share.username = "The account name is generated by the system. When visiting the shared file, you need to enter the name.";
l.tip.share.password = "Enter the password to access the shared file.";

l.cp.service.loginmode = "Login Mode";
l.cp.service.extloginmode = "Extension";
l.cp.service.emlloginmode = "Email";
l.tip.service.loginmode = "The user can log in with extension number, email address or both. <br>For E-mail login, an email address needs to be tied with the extension. <br>Super administrator's &#34;Admin&#34; account can always access the system regardless of the modes.";
l.cp.userpermission.linkus = LINKUS;
l.cp.userpermission.billing = "Billing";
l.cp.userpermission.emergency = "Emergency Number";
l.cp.userpermission.charhotel = "char utile h<sup>+</sup> Integration";

l.app.billing = "Billing";
l.app.charhotel = "char utile h<sup>+</sup> Integration";
l.operation.license = "License";
l.operation.clear = "Clear";
l.operation.activate = "Activate";
l.app.local = "Local";
l.app.remote = "Remote";
l.app.upload = "Upload";
l.app.choosefile = "Please choose an installation package";
l.app.license = "License";
l.app.licenseenter = "Please input your license key";
l.cp.alert.activesucceeded = "Activation succeeded.";
l.cp.alert.activefailed = "Active failed";
l.cp.alert.appdepends = "To install the application, you need to upgrade {0} at least to version {1}.";

ns.register("l.tip.app");
l.tip.app.choosefile = "Please choose an Installation package";

l.cp.valid.invaliddoublenumber = "The maximum length for this field is 15, including decimal point.";
l.cp.common.appexpire = "Your trial period of {0} has run out. If you wish to use the App, please contact your equipment provider and ask for a license key.";
l.tip.userpermission.viewrecord="Allow the user to check and download recording files.";
l.cp.userpermission.cdrextensions = "Allowed to Check and Download";
l.tip.userpermission.cdrextensions="Allow the user to check and download CDR of all extensions or the selected extensions.";
l.cp.email.needauth = "Password Authentication";
l.cp.alert.appnewestfirmware = "The new version requires higher firmware version. Please upgrade your firmware at least to version ";
l.cp.valid.invalid = "{0} are not valid in this field";
l.cp.valid.valid = "Only alphanumerics, {0} are allowed.";
l.cp.alert.numberlen =  "The number length should be less than {0}.";
l.cp.alert.maxdel = " You can delete at most {0} items one time.";
l.cp.alert.strongsharepass = "Password must contain numbers and both uppercase and lowercase letters.";
l.operation.active = "Active";
l.operation.disconnect = "Disconnect";
l.cp.cloud.self = "Remote Management";
l.app.updatedate = "Release Date";
l.info.softwareversion = "Firmware Version";

l.mt.rebootreset.self = "Reboot";
ns.register("l.mt.webreset");
l.mt.webreset.self = "Reset";
l.mt.webreset.resetcode = "Verification Code";
l.cp.alert.codeerror = "Please enter a correct verification code";
l.cp.alert.gwnichotstandby = "Default Interface should be LAN in &#34;Network&#34;-&#34;Basic Settings&#34;, so you cannot enable Hot Standby.";
l.cp.alert.hotstandbygwnic = "Hot Standby has been enabled, so you cannot change the Default Interface to WAN.";

l.cp.common.event3019 = "Cellular Network Connected";
l.cp.common.event3020 = "About to Reach Data Allowance";
l.cp.common.event3021 = "Network Drive Lost Connection";
l.cp.common.event3022 = "Auto Cleanup Reminder";
l.cp.eventsetting.variable3019 = "New IP Address: ${ipaddr}";
l.cp.eventsetting.variable3020 = "Data Used: ${used}<br>Percentage Used: ${per}";
l.cp.eventsetting.variable3021 = "Network Drive Name: ${networkdrivename}<br>Cause: ${cause}<br>IP Address of Network Drive: ${ipaddr}";
l.cp.eventsetting.variable3022 = "Data Type: ${datatype}";

l.cp.common.nowritepermit = "No Write Permission";
l.mt.systemlog.enablesmsdebug = "Enable SMS Debug";

l.cp.userpermission.downloadcdr = "Download CDR";
l.cp.userpermission.deletecdr = "Delete CDR";
l.cp.userpermission.playrecord = "Play Recordings";
l.cp.userpermission.downloadrecord = "Download Recordings";
l.cp.userpermission.deleterecord = "Delete Recordings";
l.cp.userpermission.cdrpermit = "CDR Permission";

l.tip.storage.maxnumbercdr="Set the maximum number of CDR that should be retained. The old CDR will be deleted when the threshold is reached.";
l.tip.storage.keepcdrday="Set the maximum number of days that CDR should be retained (&#34;0&#34; for no limit).";
l.tip.storage.keepvmminute="Set the maximum number of minutes that voicemail and one touch recording files should be retained respectively for each extension (&#34;0&#34; for no limit). ";
l.tip.storage.keeprecordday="Set the maximum number of days that recording files should be retained (&#34;0&#34; for no limit).";
l.cp.alert.applimit = "The APP you uploaded is not supported by this device.";

//4G
l.cp.network.lteprority = "Cellular Network";
l.tip.network.lteprority = "Decide when to use cellular network:"
+"<br>· Never : turn off cellular network and always use wired internet connection."
+"<br>· Failover : if wired connection is lost, cellular network will kick in; when wired connection is back, cellular network will step down. "
+"<br>· Always : always use cellular network for internet connection."
+"<br>Note : if you select 'Always', you need to configure DNS server; if you select 'Failover', you need to enable ICMP detection and configure DNS server. ";
l.cp.network.none = "Never";
l.cp.network.bak = "Failover";
l.cp.network.first = "Always";
l.cp.network.cellular = "Cellular Network";
l.cp.network.icmp = "ICMP Detection";

ns.register("l.cp.cellular");
l.cp.cellular.self = "Cellular Network";
l.cp.cellular.enable = "Enable cellular";
l.cp.cellular.dial = "Dial-up Settings";
l.cp.cellular.apn = "APN";
l.cp.cellular.number = "Dial-up Number";
l.cp.cellular.username = "Username";
l.cp.cellular.password = "Password";
l.cp.cellular.data = "Data Control";
l.cp.cellular.usedflow ="Data Used";
l.cp.cellular.totalflow ="Data Allowance";
l.cp.cellular.enabledisconnect="Automatically Cut Off";
l.cp.cellular.resettype ="Reset Cycle Time";
l.cp.cellular.everyyear ="Every year";
l.cp.cellular.everymon ="Every month";
l.cp.cellular.everyday ="Every day";
l.cp.cellular.everyweek ="Every week";
l.cp.cellular.mon ="month";
l.cp.cellular.day ="day";
l.cp.cellular.hour ="hour";
l.cp.cellular.minute ="minute";
l.cp.cellular.cellular = "Cellular Network";
l.cp.cellular.used = "Data Usage";

ns.register("l.tip.cellular");
l.tip.cellular.usedflow ="Enter the data that has been used. By default, it is 0.";
l.tip.cellular.totalflow ="Set up the data allowance. You can configure to cut off cellular data and send event notification when the allowance is reached. By default, it is 0, meaning unlimited.";
l.tip.cellular.enabledisconnect="Cut off the cellular data automatically when the data allowance is reached.";
l.tip.cellular.resettype ="Reset the 'Data Used' to zero following the reset cycle time.";
l.tip.cellular.apn = "Enter the APN string provided by your operator.";
l.tip.cellular.number = "Enter the dial-up number provided by your operator.";
l.tip.cellular.username = "Enter the username provided by your operator.";
l.tip.cellular.password = "Enter the password provided by your operator.";

ns.register("l.cp.icmp");
l.cp.icmp.enable = "Enable ICMP Detection";
l.cp.icmp.server = "ICMP Detection Server";
l.cp.icmp.detectinterval = "ICMP Detection Interval";
l.cp.icmp.timeout = "ICMP Detection Timeout";
l.cp.icmp.trycount = "ICMP Detection Retries";
l.cp.icmp.test = "Test";
l.cp.icmp.disabled = "Disabled";
l.cp.icmp.self = "ICMP Detection";
l.cp.icmp.sever1 = "ICMP Detection Server";

ns.register("l.tip.icmp");
l.tip.icmp.enable = "Enable ICMP detection to check if the current connectivity is active";
l.tip.icmp.server = "PBX will ping this server regularly to check if the current connectivity is active so to take actions accordingly. Usually you could fill in the DNS server IP address.";
l.tip.icmp.detectinterval = "Set the time interval between ICMP packages.";
l.tip.icmp.timeout = "Set the timeout for each ICMP package";
l.tip.icmp.trycount = "Set the max number of retries if the ICMP detection failed.";
l.tip.icmp.testsuccess = "Test successfully.";
l.tip.icmp.testfail = "Test failed.";

l.cp.alert.icmpdisable = "ICMP has not been enabled.";
l.cp.alert.lteprority = "Please enable &#34;Cellular Network Connected&#34; notification in event center to be notified of the new IP address. Or you can check the &#34;Network Status&#34; later and take note of the cellular network's IP address.";
l.cp.alert.icmpenable = "When disabled, the cellular failover related features will not be available.";
l.cp.alert.vlanid = "The VLAN ID can't be the same. Please set up different VLAN IDs.";

l.cp.network.usenet = "Current Network";
l.cp.network.wired = "Wired Network";
l.cp.network.nonetwork = "No Network";
l.cp.alert.checked = "{0} is checked.";
l.cp.alert.resettext = "It will take about 5 minute to reset, please wait.";
l.cp.userpermission.hotel = "Hotel";
l.cp.userpermission.queuemetrics = "QueueMetrics Integration";
l.app.hotel = "Hotel";
l.app.queuemetrics = "QueueMetrics Integration";
l.cp.alert.resetting = "Resetting";

l.cp.valid.invalidnetmask = "Invalid subnet mask. The subnet mask must be adjacent. ";
l.cp.alert.disablefirewall = "Disabling Firewall will bring down the overall system security. Are you sure to turn off Firewall?";
l.cp.alert.findpasserror = "Incorrect username or email address. Please verify your input and try again.";
l.login.findpassfiveerror = "Sorry, you have reached 5 failed attempts. You can only try again after 10 minutes.";
//l.login.findpasstip = "Please enter the username and the email address associated with the username.<br>The instructions will be sent to the Email bound with the username.";
l.cp.storage.maxpbxlogsize = "Max Size of Total Logs";
l.tip.storage.maxpbxlogsize = "Limit the total size of pbxlog files in syslog.<br>The default size is 5 MB.<br>The older logs will be deleted when the threshold is reached.<br>The maximum value you can enter here is 50.";
l.mt.rebootreset.enable = "Enable Auto Reboot";
l.mt.rebootreset.tipenable = "If you configure to auto reboot the system on the 31st of each month, then in the months that have less than 31 days, the system will not be rebooted automatically.";
l.cp.network.ipaddress2 = "IP Address 2";
l.cp.network.netmask2 = "Subnet Mask 2";
l.cp.fwrules.type = "Type";
l.tip.fwrules.type="The IP address or domain name for this rule.<br>The format of IP address is: IP address/subnet mask.For example: <br>"
+"192.168.5.100/255.255.255.255 means this rule is for 192.168.5.100; <br>"
+"216.207.245.47/255.255.255.255 is for 216.207.245.47; <br>"
+"192.168.5.0/255.255.255.0 is for IP from 192.168.5.0 to 192.168.5.255.";
l.cp.fwrules.typeip = "IP";
l.cp.fwrules.domain = "Domain Name";
// l.cp.service.rectoftp = "Mount call recording files to FTP directory";
// l.tip.service.rectoftp = "Enable this option and the call recording files will be mounted to the FTP directory.";
l.cp.common.event3023 = "Extension Outbound Calls Prohibited";
l.cp.eventsetting.variable3023 = "Extension Number: ${numb}<br>Extension Name: ${name}";
l.cp.common.everyday = "Daily";
l.cp.common.everyweek = "Weekly";
l.cp.common.everymonth = "Monthly";

l.cp.alert.portstartltend="The end port must be equal to or greater than start port.";

l.mt.upgrade.tips = "You might want to make a backup before upgrade.";

l.cp.email.needauth = "SMTP Authentication";
l.tip.email.needauth = "Select one of the following method for SMTP authentication:<br>"
+"· Same with the incoming mail server.<br>"
+"· Custom.<br>"
+"· Don’t require authentication.";
l.cp.email.yes = "Same with the incoming mail server";
l.cp.email.no = "Don’t require authentication";
l.cp.email.custom = "Custom";
l.cp.email.account = "Account";

l.share.enableftp = "Enable FTP File Sharing";
l.tip.share.enableftp = "Enable this option to mount shared files to FTP.";

l.cp.network.enablevlan1 = "Enable VLAN Subinterface 1";
l.cp.network.enablevlan2 = "Enable VLAN Subinterface 2";

l.cp.alert.emailrepeat = "Email Login Mode has been enabled, so you cannot associate the same email address with multiple extensions.";
l.cp.alert.haverepeatemail = "You cannot enable Email Login Mode because there are multiple extensions associated with the same email address.";

l.cp.alert.backupapp = "{0} usage will be affected after the restore.";

l.tip.systemlog.debuglevel="Choose which level of log messages will be recorded.<br>"
+"Note: to use the BRI debug feature, you also need to check the box before &#34;Information&#34;.";

l.hotstandby.disksync = "Disk Synchronization";
l.tip.hotstandby.disksync = "Check the box to enable real-time disk synchronization.";
l.tip.service.enableami="The Asterisk Management Interface (AMI) is a system monitoring and management interface provided by Asterisk. The third party software can work with PBX using AMI interface. It is disabled by default.";
l.cp.common.event3004 = "Storage Full";
l.tip.backup.backupmaxnumber = "This defines how many backup files at most will be stored in the current location. When the file number exceeds the set value, the oldest file will be replaced with the newest.";

l.app.conferencepanel = "Conference Panel";
l.app.vpnserver = "VPN Server";
l.app.ldapserver = "LDAP Server";

l.cp.common.appuploading = "Please do not power off the device or operate on the Web GUI during the upload, otherwise, the upgrade might fail.";

l.app.autop = "Auto Provision";
l.app.mikocti = "Miko CTI";

l.tip.network.enablevlan = "Configure LAN/WAN as Tag VLAN mode.";

l.tip.storage.username="The username to access the network drive.";
l.tip.storage.password="The password to access the network drive.";
l.cp.storage.cdr = "CDR";
l.cp.storage.vm = "Voicemail and One Touch Recordings";
l.cp.storage.recording = "Recordings";
l.cp.storage.log = "Logs";

l.cp.alert.ltehotstandby = "Network Failover has been enabled, so you cannot enable Hot Standby.";
l.cp.alert.hotstandbylte = "Hot Standby is running, so Network Failover cannot be enabled.";

l.cp.alert.emailempty = "Please enter the email.";

l.cp.valid.invalidpromptfile = "Please select a \".wav\",\".WAV\" or \".gsm\" file, and the file name cannot contain only numbers neither can it contain special characters.";
l.cp.valid.invalidpromptname = "Only alphanumeric are valid, and it cannot contain only numbers.";
l.cp.common.event3024 = "API Authentication Lockout";
l.cp.eventsetting.variable3024 = "IP address: ${ipaddr}";

l.cp.storage.domain = "Work Group";
l.tip.storage.domain = "If you have set up work group for your Network Drive, please input the name of the work group. If not, leave it blank.";
l.cp.valid.invalidcrtfile = "Please select a \".crt\" file, and the file name should not have special characters.";
l.cp.valid.invalidkeyfile = "Please select a \".key\" file, and the file name should not have special characters.";
l.cp.valid.invalidpemfile = "Please select a \".pem\" file, and the file name should not have special characters.";
l.cp.alert.portrepeat = "{0} port has been occupied.";
l.mt.backuprestore.tip = "The backup file will include";
l.mt.backuprestore.systembackup = "System Settings";
l.mt.backuprestore.soundbackup = "Custom Prompts";
l.mt.backuprestore.cdrbackup  = "Call Logs";
l.login.loginlocked = "Your account has been locked. Please contact your PBX system administrator.";
l.cp.storage.maxusagedevice = "Max Usage Of Device (%)";
l.app.netstatus = "Unable to connect the server. ";
l.cp.alert.fwdropall = "Before enabling &#34;Drop All&#34;, please at least add the following accept rules:"
+"<br>• Allow TCP connection for SSH: {0}, HTTPS: {2};"
+"<br>• Allow UDP connection for DNS: {3}. ";
l.cp.alert.importfailed  = "Part of contacts failed to be imported. The reason for the import failure is as follows:";
l.cp.alert.macipempty = "Please fill in MAC or Source IP Address(At least one item is required).";

l.login.loginfiveerror = "You have reached the limit attempts. Please try again {0} minutes later.";
l.login.loginlocked = "You have reached the limit for failed login attempts and the account has been locked. Please contact the PBX System Administrator.";
l.login.loginiplocked = "You have reached the limit for failed login attempts and the IP address used has been blocked. Please contact the PBX System Administrator.";
l.cp.blockedip.typeautop = "Auto Provisioning";
l.cp.blockedip.typedefense = "IP Auto Defense";
l.cp.blockedip.typeloginip = "Web-IP";
l.cp.blockedip.typeloginaccount = "Web-Account";
l.cp.blockedip.typeregisterip = "Register-IP";
l.cp.blockedip.typeregisteraccount = "Register-Account";
l.cp.eventsetting.variable1003 = "Username: ${username}<br>IP Address: ${ipaddr}<br>Locked reason: ${reason}<br><br>"+
"The user might be locked due to: <br>1.Too many failed login attempts;<br>2.Too many failed registration attempts.";
l.cp.eventsetting.variable3006 = "IP Address: ${ipaddr}<br>Locked reason: ${reason}<br><br>"+
"IP address might be locked due to: <br>1.Too many failed login attempts;<br>2.Too many failed registration attempts;<br>3.The IP has triggered Auto Defense;<br>4.Too many failed authentications for Auto Provisioning.";

l.cp.common.event3025 = "Extension User Password Changed";
l.cp.eventsetting.variable3025 = "Username: ${username}<br>IP Address: ${ipaddr}";

ns.register("l.cp.ua");
l.cp.ua.tip = "System firmware upgraded. And the following apps in the App Center also need to be upgraded, or they might stop working.";
l.cp.ua.noshow = "Don't show it again.";

l.mt.systemlog.enabless7debug = "Enable SS7/PRI Debug";

l.app.pbxcenter = "PBX Center";


l.cp.alert.extcontact = "The extension data is abnormal: ";
l.cp.alert.extcontactrepeat = "The extension is repeated: ";
l.cp.alert.ldapcontact = "Incorrect contact information of {0}. Please verify your input and try again.";
l.cp.alert.ldapcontactrepeat = "Create contact failed. Duplicate nickname in this phonebook node.";

l.cp.fwrules.choosefile = "Please choose a UTF-8 .csv file to import.";
l.cp.fwrules.import = "Import Firewall Rules";
l.cp.fwrules.filename = "Firewall Rules File";

l.cp.alert.dropalltip = "To ensure that your system has access to the APP Center, we've automatically added the following accept rule for you :"
+"<br>• Allow BOTH connection for App Center: appcenter.yeastar.com."
+"<br><br>Besides, we strongly recommend that you add the following accept rule to keep services working: "
+"<br>• Allow BOTH connection for the configured Outgoing Mail Server (SMTP){0}, and the configured Incoming Mail Server (POP3){1}.";


l.app.ldapcenter = "LDAP Server";

l.cp.cloud.ysidremark = "Only open to Yeastar Authorized Partners, Remote Management is used to manage S-Series remotely. Please activate via your Yeastar ID. If you haven't got a Yeastar ID, sign up for Yeastar Partner Program <a href=\"https://www.yeastar.com/channel-program/\" target=\"_blank\">here</a>. ";

l.cp.alert.numberused = "The number already been used.";

l.cp.service.sshpasstip1 = "To secure your system,";
l.cp.service.sshpasstip2 = "please change the default password";
l.cp.service.regenerate = "Regenerate";

ns.register("l.snmp");
l.snmp.menusnmp = "SNMP" ;
l.snmp.self = "SNMP" ;
l.snmp.status = "Status";
l.snmp.running = "SNMP is running";
l.snmp.notrunning = "SNMP is  not running";
l.snmp.enable = "Enable";
l.snmp.sendport = "Local Port";
l.snmp.v3user = "SNMPv3 User";
l.snmp.access = "Access Limit";
l.snmp.noauth = "NoAuth";
l.snmp.auth = "Auth";
l.snmp.priv = "Priv";
l.snmp.authpasswd = "Auth Passwd";
l.snmp.encryptionpasswd = "Encryption Passwd";
l.snmp.communitymode = "SNMP Mode";
l.snmp.localcommunity = "Community";
l.snmp.showaccess = "Access";
l.snmp.communityread = "Read";
l.snmp.communitywrite = "Write";
l.snmp.mode = "Trap Mode";
l.snmp.ip = "IP/SubnetMask";
l.snmp.servercommunity = "Trap Community";
l.snmp.targetip = "Trap IP";