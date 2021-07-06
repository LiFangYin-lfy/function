import timeFormat from '../../libs/function/timeFormat.js';

/**
 * 时间戳转为多久之前
 * @param String timestamp 时间戳
 * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
 * 如果为布尔值false，无论什么时间，都返回多久以前的格式
 */
function timeFrom(timestamp = null, format = 'yyyy-mm-dd') {
	if (timestamp == null) timestamp = Number(new Date());
	timestamp = parseInt(timestamp);
	// 判断用户输入的时间戳是秒还是毫秒,一般前端js获取的时间戳是毫秒(13位),后端传过来的为秒(10位)
	if (timestamp.toString().length == 10) timestamp *= 1000;
	var timer = (new Date()).getTime() - timestamp;
	timer = parseInt(timer / 1000);
	// 如果小于5分钟,则返回"刚刚",其他以此类推
	let tips = '';
	switch (true) {
		case timer < 300:
			tips = '刚刚';
			break;
		case timer >= 300 && timer < 3600:
			tips = parseInt(timer / 60) + '分钟前';
			break;
		case timer >= 3600 && timer < 86400:
			tips = parseInt(timer / 3600) + '小时前';
			break;
		case timer >= 86400 && timer < 2592000:
			tips = parseInt(timer / 86400) + '天前';
			break;
		default:
			// 如果format为false，则无论什么时间戳，都显示xx之前
			if (format === false) {
				if (timer >= 2592000 && timer < 365 * 86400) {
					tips = parseInt(timer / (86400 * 30)) + '个月前';
				} else {
					tips = parseInt(timer / (86400 * 365)) + '年前';
				}
			} else {
				tips = timeFormat(timestamp, format);
			}
	}
	return tips;
}
/**
 *  获取当天日期 
 * 
 */
function timeToday() { // 获取当天日期 
	var now = new Date()
	var year = now.getFullYear()
	var month = now.getMonth() + 1
	var day = now.getDate()
	if (month < 10) {
		month = '0' + month;
	}
	if (day < 10) {
		day = '0' + day;
	}
	var formatDate = year + '-' + month + '-' + day
	return formatDate;
}
/**
 * 返回当前的时间（ 年月日时分秒）
 * 
 */
function getDateTime() {
	var date = new Date(),
		year = date.getFullYear(),
		month = date.getMonth() + 1,
		day = date.getDate(),
		hour = date.getHours() + 1,
		minute = date.getMinutes(),
		second = date.getSeconds();
	month = checkTime(month);
	day = checkTime(day);
	hour = checkTime(hour);
	minute = checkTime(minute);
	second = checkTime(second);

	function checkTime(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}
	return "" + year + "年" + month + "月" + day + "日" + hour + "时" + minute + "分" + second + "秒"
}
/**
 * 中国标准时间， 转换为日期格式Sat Dec 12 2020 15: 40: 54 GMT + 0800 = 》2020-12-12
 * 
 */
function dateFormat(data) {

	var now = data
	var year = now.getFullYear()
	var month = now.getMonth() + 1
	var day = now.getDate()
	if (month < 10) {
		month = '0' + month;
	}
	if (day < 10) {
		day = '0' + day;
	}
	var formatDate = year + '-' + month + '-' + day
	return formatDate;
}
/**
 *  多少天之后的日期
 * 
 */
function fewdaysAfter(date) {
	let date1 = new Date(),
		date2 = new Date(date1);
	console.log(date1);
	console.log(date2);
	date2.setDate(date1.getDate() + date);
	let endDate = date2.getFullYear() + "-" + (date2.getMonth() + 1) + "-" + date2.getDate()
	return endDate;
}
/**
 * 从A天到B天之间的日期 == > 数组
 * 
 */
function dataArray(startDate, endDate, day) { // 从A天到B天之间的日期  ==>  数组
	var startDate = startDate;
	var endDate = endDate;
	endDate.setDate(startDate.getDate() + day);
	var dataArr = [];
	var weeks = ['日', '一', '二', '三', '四', '五', '六'];
	while ((endDate.getTime() - startDate.getTime()) >= 0) {
		var year = startDate.getFullYear()
		var month = (startDate.getMonth() + 1).toString().length == 1 ? "0" + (startDate.getMonth() + 1).toString() : (startDate.getMonth() + 1);
		var day = startDate.getDate().toString().length == 1 ? "0" + startDate.getDate() : startDate.getDate();
		var week = weeks[startDate.getDay()];
		let ayr = {}
		ayr.date = month + '-' + day
		ayr.week = '周 ' + week
		ayr.yearDate = year + '-' + month + '-' + day
		dataArr.push(ayr)
		startDate.setDate(startDate.getDate() + 1);
	}
	// dataArr[0].week = '今天' + dataArr[0].date.slice(6, 10);
	// dataArr[1].week = '明天' + dataArr[1].date.slice(6, 10);
	// dataArr[2].week = '后天' + dataArr[2].date.slice(6, 10);
	console.log(year);
	console.log(month);
	console.log(dataArr, "日期");
	return dataArr
}
/**
 * 手机号验证
 */
function phoneRule(mobile) {
	var myreg = /^1[23456789]\d{9}$/;
	if (mobile == '') {
		wx.showToast({
			title: '手机号不能为空',
			icon: 'none',
			duration: 1000,
		})
		return false;
	} else if (mobile.length != 11) {
		wx.showToast({
			title: '手机号长度有误！',
			icon: 'none',
			duration: 1000,
		})
		return false;
	}
	if (!myreg.test(mobile)) {
		wx.showToast({
			title: '手机号有误！',
			icon: 'none',
			duration: 1000,
		})
		return false;
	}
	return mobile
}

/**
 * 身份证号验证
 */
function idcardRule(idcard) {
	let myidcard = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
	if (idcard == '') {
		wx.showToast({
			title: '身份证号不能为空',
			icon: 'none',
			duration: 1000,
		})
		return false;
	} else if (!myidcard.test(idcard)) {
		wx.showToast({
			title: '身份证号码有误',
			duration: 1000,
			icon: 'none'
		});
		return false;
	} else {
		return idcard
	}

}
/**
 * 获取星期 
 */
function weekRule(date) {
	let weekArray = ['日', '一', '二', '三', '四', '五', '六'];
	return weekArray[date.getDay()];
}

/**
 * 获取当月最后一天日期
 * 获取上一个月最后一天日期
 */
function afterDay() {
	let that = this;
	let now = new Date(),
		year = now.getFullYear(),
		month = now.getMonth(),
		weekday = that.getWeek(now);
	day = now.getDate();
	prevMonth = month == 0 ? 11 : month - 1,
		nextMonth = month == 11 ? 0 : month + 1,
		lastDay = new Date((new Date().setMonth(month + 1, 1) - 1000 * 60 * 60 * 24)).getDate(), //获取当月最后一天日期;
		prevLastDay = new Date((new Date().setMonth(month, 1) - 1000 * 60 * 60 * 24)).getDate(); //获取上一个月最后一天日期; 
	console.log(now, "年月日");
	console.log(year);
	console.log(month, "当月");
	console.log(weekday, "当周几");
	console.log(day, "当月第几天");
	console.log(prevMonth, "前一个月《10");
	console.log(nextMonth, "后一个月》10");
	console.log(lastDay, "当月最后一天日期");
	console.log(prevLastDay, "上一个月最后一天日期");
	let currentMonthDateArray = [], //当前月份的日期和星期的数据集合
		prevMonthDateArray = [], //上月日期和星期的数据集合
		nextMonthDateArray = []; //下月日期和星期的数据集合
	for (let i = 1; i <= lastDay; i++) {
		currentMonthDateArray.push({
			day: i,
			weekDay: that.getWeek(new Date(new Date().setDate(i)))
		})
	}
	for (let i = day; i <= prevLastDay; i++) {
		prevMonthDateArray.push({
			day: i,
			weekDay: that.getWeek(new Date(new Date().setMonth(month - 1, i)))
		})
	}
	for (let i = 1; i <= day; i++) {
		nextMonthDateArray.push({
			day: i,
			weekDay: that.getWeek(new Date(new Date().setMonth(month + 1, i)))
		})
	}
	console.log(weekday);
	return weekday
}
/**
 * 截取字符串， 某个值后的全部
 * 
 */
function subString(obj) { // 截取字符串，某个值后的全部
	var index = obj.lastIndexOf(".");
	// obj = obj.substring(index + 1, obj.length);
	return obj.substring(index + 1, obj.length);
}
export default {
	timeFrom,
	timeToday,
	fewdaysAfter,
	dateFormat,
	dataArray,
	phoneRule,
	idcardRule,
	weekRule,
	afterDay,
	subString,
	getDateTime,
};