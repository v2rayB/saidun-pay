var serverIp = "https://api.nozhj.cn"

ServerIP = function() {
	let ipList = ["114.55.252.4","47.98.218.237","47.98.210.234","47.98.192.170","47.98.193.129"]
	return "https://" + ipList[Math.floor(Math.random()*ipList.length)]
}

gotoDownloadPage = function() {
	if (window.navigator.platform.indexOf('Android') !== -1 || window.navigator.platform.indexOf('Linux') !== -1) {
		gotoDownloadAndroidPage()
		return
	}

	if (window.navigator.platform.indexOf('iPhone') !== -1 || window.navigator.platform.indexOf('iPod') !== -1 ||
		window.navigator.platform.indexOf('iPad') !== -1) {
		gotoDownloadIosPage()
		return
	}

	if (window.navigator.platform.indexOf('Win') !== -1) {
		gotoDownloadWinPage()
		return
	}

	if (window.navigator.platform.indexOf('Mac') !== -1) {
		gotoDownloadMacPage()
		return
	}

	alert("您好，目前设备无法识别 ，请选择其他平台下载 ，真的很抱歉耽误了您！")
	return
};
gotoDownloadWinPage = function() {
	window.location.href = ServerIP() + "/windows/exe/saidun.exe"
};
gotoDownloadGooglePlayPage = function() {
	alert("您好，目前 谷歌商店 版本无法下载，正在紧急处理。真的很抱歉耽误了您！")
};
gotoDownloadAndroidPage = function() {
	window.location.href = ServerIP() + "/android/saidun.apk"
};
// gotoDownloadMacPage = function(i) {
// 	switch (i){
// 		case 1:
// 			window.location.href = ServerIP() + "/mac/saidun_intel.dmg"
// 			break;
// 		case 2:
// 			window.location.href = ServerIP() + "/mac/saidun_arm.dmg"
// 			break;	
// 	}
// };
gotoDownloadMacPage = function() {
	window.location.href = ServerIP() + "/mac/saidun.dmg"
};
gotoDownloadIosPage = function() {
	window.location.href = "help/appstore.html"
};
gotoAboutPage = function() {
	window.location.href = "about.html"
};
gotoNavPage = function() {
	window.location.href = "nav.html"
};
gotoContactMe = function(val) {
	switch (val) {
		case "telegram":
			// window.location.href = "https://t.me/xgvpnkf"
			alert("telegram正在创建中...")
			break;
		case "twitter":
			alert("twitter正在创建中...")
			break;
		case "share":
			window.location.href = "share.html"
			break;
		default:
			alert("未知的联系方式")
			break;
	}
}

showEmail = function() {
	alert("saidunguge@gmail.com");
}

gotoPrivite = function() {
	window.location.href = "privacy-agreement.html"
};

gotoUser = function() {
	window.location.href = "user-agreement.html"
};

gotoLogin = function() {
	window.location.href = "login.html"
};

function forgotPassword() {
	window.location.href = "forgot-password.html"
};

gotoIndex = function() {
	window.location.href = "index.html"
};

gotoRegister = function() {
	window.location.href = "register.html"
};

gotoHelp = function() {
	window.location.href = "help.html"
};
gotoIosAppStore = function() {
	window.location.href = "https://apps.apple.com/hk/app/%E8%B5%9B%E7%9B%BEvpn/id6476829505"
};

kflink = function() {
	window.location.href = "http://xkf.zhimakf.com/s/107176gz41"
};

gotoFaceBook = function () {
	window.location.href = "https://www.facebook.com/share/1GGECjTr1q/?mibextid=wwXIfr"
}

gotoTwitter = function () {
	window.location.href = "https://x.com/setonvpn?s=21"
}

gotoTelegram = function () {
	window.location.href = "https://t.me/saidunvpn"
}

gotoInstagram = function () {
	window.location.href = "https://www.instagram.com/setonvpn?igsh=MWhvNXY1dHg5YzJhag%3D%3D&utm_source=qr"
}