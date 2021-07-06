/**
 * 验证电子邮箱格式
 */
function email(value) {
	return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}
/**
 *  邮箱验证规则 
 * 
 */
function isEmail(s) {
	return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}
/**
 * 验证手机格式
 */
function mobile(value) {
	return /^1[23456789]\d{9}$/.test(value)
}

/**
 * 验证URL格式
 */
function url(value) {
	return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/
		.test(value)
}

/**
 * 验证日期格式
 */
function date(value) {
	return !/Invalid|NaN/.test(new Date(value).toString())
}

/**
 * 验证ISO类型的日期格式
 */
function dateISO(value) {
	return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value)
}

/**
 * 验证十进制数字
 */
function number(value) {
	return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
}

/**
 * 验证整数
 */
function digits(value) {
	return /^\d+$/.test(value)
}

/**
 * 验证身份证号码
 */
function idCard(value) {
	return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
		value)
}
/**
 * 严格的身份证校验
 */
export const isCardID = (sId) => {
	if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
		console.log('你输入的身份证长度或格式错误')
		return false
	}
	//身份证城市
	var aCity = {
		11: "北京",
		12: "天津",
		13: "河北",
		14: "山西",
		15: "内蒙古",
		21: "辽宁",
		22: "吉林",
		23: "黑龙江",
		31: "上海",
		32: "江苏",
		33: "浙江",
		34: "安徽",
		35: "福建",
		36: "江西",
		37: "山东",
		41: "河南",
		42: "湖北",
		43: "湖南",
		44: "广东",
		45: "广西",
		46: "海南",
		50: "重庆",
		51: "四川",
		52: "贵州",
		53: "云南",
		54: "西藏",
		61: "陕西",
		62: "甘肃",
		63: "青海",
		64: "宁夏",
		65: "新疆",
		71: "台湾",
		81: "香港",
		82: "澳门",
		91: "国外"
	};
	if (!aCity[parseInt(sId.substr(0, 2))]) {
		console.log('你的身份证地区非法')
		return false
	}

	// 出生日期验证
	var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"),
		d = new Date(sBirthday)
	if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
		console.log('身份证上的出生日期非法')
		return false
	}

	// 身份证号码校验
	var sum = 0,
		weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
		codes = "10X98765432"
	for (var i = 0; i < sId.length - 1; i++) {
		sum += sId[i] * weights[i];
	}
	var last = codes[sum % 11]; //计算出来的最后一位身份证号码
	if (sId[sId.length - 1] != last) {
		console.log('你输入的身份证号非法')
		return false
	}

	return true
}

/**
 * 是否车牌号
 */
function carNo(value) {
	// 新能源车牌
	const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
	// 旧车牌
	const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
	if (value.length === 7) {
		return creg.test(value);
	} else if (value.length === 8) {
		return xreg.test(value);
	} else {
		return false;
	}
}

/**
 * 金额,只允许2位小数
 */
function amount(value) {
	//金额，只允许保留两位小数
	return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
 * 中文
 */
function chinese(value) {
	let reg = /^[\u4e00-\u9fa5]+$/gi;
	return reg.test(value);
}

/**
 * 只能输入字母
 */
function letter(value) {
	return /^[a-zA-Z]*$/.test(value);
}

/**
 * 只能是字母或者数字
 */
function enOrNum(value) {
	//英文或者数字
	let reg = /^[0-9a-zA-Z]*$/g;
	return reg.test(value);
}

/**
 * 验证是否包含某个值
 */
function contains(value, param) {
	return value.indexOf(param) >= 0
}

/**
 * 验证一个值范围[min, max]
 */
function range(value, param) {
	return value >= param[0] && value <= param[1]
}

/**
 * 验证一个长度范围[min, max]
 */
function rangeLength(value, param) {
	return value.length >= param[0] && value.length <= param[1]
}

/**
 * 是否固定电话
 */
function landline(value) {
	let reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
	return reg.test(value);
}

/**
 * 判断是否为空
 */
function empty(value) {
	switch (typeof value) {
		case 'undefined':
			return true;
		case 'string':
			if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
			break;
		case 'boolean':
			if (!value) return true;
			break;
		case 'number':
			if (0 === value || isNaN(value)) return true;
			break;
		case 'object':
			if (null === value || value.length === 0) return true;
			for (var i in value) {
				return false;
			}
			return true;
	}
	return false;
}

/**
 * 是否json字符串
 */
function jsonString(value) {
	if (typeof value == 'string') {
		try {
			var obj = JSON.parse(value);
			if (typeof obj == 'object' && obj) {
				return true;
			} else {
				return false;
			}
		} catch (e) {
			return false;
		}
	}
	return false;
}


/**
 * 是否数组
 */
function array(value) {
	if (typeof Array.isArray === "function") {
		return Array.isArray(value);
	} else {
		return Object.prototype.toString.call(value) === "[object Array]";
	}
}

/**
 * 是否对象
 */
function object(value) {
	return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * 是否短信验证码
 */
function code(value, len = 6) {
	return new RegExp(`^\\d{${len}}$`).test(value);
}


export default {
	email,
	isEmail,
	mobile,
	url,
	date,
	dateISO,
	number,
	digits,
	idCard,
	carNo,
	amount,
	chinese,
	letter,
	enOrNum,
	contains,
	range,
	rangeLength,
	empty,
	isEmpty: empty,
	jsonString,
	landline,
	object,
	array,
	code
}