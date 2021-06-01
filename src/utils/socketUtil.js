//这里需要引入vuex
import store from '@/store';
import { Message } from 'element-ui';

let wsConnection = {
    $ws: null,
    lockReturn: false,
    timeout: 60 * 1000 * 5,
    timeoutObj: null,
    timeoutNum: null,
    serverTimeoutObj: null,
    //初始化webSocket长连接

    initWebSocket: function(clientId) {
        // let corpId = localStorage.getItem('corpId');
        // let name = localStorage.getItem('username');
        if (typeof WebSocket === "undefined") {
            alert("您的浏览器不支持socket");
            return;
        }
        //写入地址 这里的地址可以在initWebSocket方法加入参数
        this.$ws = new WebSocket(window.baseConfig.SOCKET_SERVER + "/" + clientId);
        this.$ws.onopen = this.wsOpen;
        this.$ws.onclose = this.wsClose;
        this.$ws.onmessage = this.wsMsg;
        this.$ws.onerror = this.wsError;

    },
    //打开websocket
    wsOpen: function(e) {
        //开始websocket心跳
        wsConnection.startWsHeartbeat();
        console.log('websocket success')
    },
    wsClose: function(e) {
        console.log(e, 'websocket close')
    },
    wsMsg: function(msg) {
        //每次接收到服务端消息后 重置websocket心跳
        wsConnection.resetHeartbeat();
        //服务端发送来的消息存到vuex
        store.dispatch('wss/setMessage', msg.data)
    },
    wsError: function() {
        Message({
            showClose: true,
            message: '服务连接断开，正在尝试重连！',
            type: 'error'
        })
        wsConnection.reconnect()
    },
    //重启websocket
    reconnect: function(e) {
        let _this = this;
        if (_this.lockReturn) {
            return;
        }
        _this.lockReturn = true;
        _this.timeoutNum && clearTimeout(_this.timeoutNum);
        _this.timeoutNum = setTimeout(function() {
            _this.initWebSocket(store.clientId);
            _this.lockReturn = false;
        }, 3000);
    },
    startWsHeartbeat: function() {
        let _this = this;
        _this.timeoutObj && clearTimeout(_this.timeoutObj);
        _this.serverTimeoutObj && clearTimeout(_this.serverTimeoutObj);
        _this.timeoutObj = setInterval(function() {
            //判断websocket当前状态
            if (_this.$ws.readyState != 1) {
                _this.reconnect()
            }
        }, _this.timeout);
    },
    //重置websocket心跳
    resetHeartbeat: function() {
        let _this = this;
        clearTimeout(_this.timeoutObj);
        clearTimeout(_this.serverTimeoutObj);
        _this.startWsHeartbeat()
    }
};

//抛出websocket对象
export default wsConnection