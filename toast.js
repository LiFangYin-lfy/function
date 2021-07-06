function toast(title, duration = 1500) {
	uni.showToast({
		title: title,
		icon: 'none',
		duration: duration
	})
}

function popTest(msg) { //  提示弹窗
	wx.showToast({
		title: msg,
		icon: 'none',
		duration: 1300
	})
}

function popSuccessTest(msg) { //  提示弹窗
	wx.showToast({
		title: msg,
		icon: '',
		duration: 1300,
	})
}
export default {
	toast,
	popTest,
	popSuccessTest,
}