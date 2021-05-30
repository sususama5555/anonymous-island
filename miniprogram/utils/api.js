// const baseUrl = 'https://api.notspr.com/api/'
const baseUrl = 'http://127.0.0.1:8000/api/'
const apiList = {
    moods: 'moods/',
    comments: 'comments/',
    users: 'users/'
}

function getData(apiName, data, type, func) {
    wx.request({
        url: baseUrl + apiList[apiName],
        data: data,
        method: type,
        success: res => {
            return typeof func == "function" && func(res.data)
        },
        fail: function () {
            reject:('网络错误')
            wx.showToast({
                icon: 'none',
                title: '网络错误',
            })
        }
    })
}

module.exports = {
    ppApi: getData
}