let storage = { //设置一个storage对象，用来实现sessionStorage本地存储
    set(key, value) {
        try {
            sessionStorage.setItem(key, JSON.stringify(value))
        } catch (oException) {
            if (oException.name == 'QuotaExceededError') {
                console.log('超出本地存储限额！')
                    //如果历史信息不重要了，可清空后再设置
                localStorage.clear()
                sessionStorage.setItem(key, JSON.stringify(value))
            }
        }
    },

    get(key) {
        return JSON.parse(sessionStorage.getItem(key))
    },
    key(i) {
        return sessionStorage.key(i)
    },
    length() {
        return sessionStorage.length
    },
    has(key) {
        return sessionStorage.getItem(key) != null ? true : false
    },
    remove(key) {
        sessionStorage.removeItem(key)
    },
    clear() {
        sessionStorage.clear()
    }
}
export default storage