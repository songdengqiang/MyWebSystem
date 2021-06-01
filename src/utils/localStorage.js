let storage = { //设置一个storage对象，用来实现localStorage本地存储
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (oException) {
            if (oException.name == 'QuotaExceededError') {
                console.log('超出本地存储限额！')
                    //如果历史信息不重要了，可清空后再设置
                localStorage.clear()
                localStorage.setItem(key, JSON.stringify(value))
            }
        }
    },

    get(key) {
        return JSON.parse(localStorage.getItem(key))
    },
    key(i) {
        return localStorage.key(i)
    },
    length() {
        return localStorage.length
    },
    has(key) {
        return localStorage.getItem(key) != null ? true : false
    },
    remove(key) {
        localStorage.removeItem(key)
    },
    clear() {
        localStorage.clear()
    }
}
export default storage