import { timestampToTime } from "@/utils/index"
L.Control.info = L.Control.extend({
    //在此定义参数
    options: {
        position: "topright",
        content: ""
    },
    //在此初始化
    initialize: function(options) {
        L.Util.extend(this.options, options);
    },
    onAdd: function(map) {
        this._div = L.DomUtil.create("div", "info-control"); // create a div with a class "info"
        this.update();
        return this._div;
    },
    update: function(props) {
        let _prefix = "<h4><b>目标参数</b></h4>"
        let _content = ""
        if (!props) {
            this._div.classList.remove("info-control-background")
                // _content = `请将鼠标滑过目标`
            this._div.innerHTML = ""
            return
        } else {
            this._div.classList.add("info-control-background")
            _content = `<b>飞机标识：${props.airId}</b><br/>` +
                `<b>航班号：${props.flightNumber?props.flightNumber:""}</b><br/>` +
                `<b>SAC：${props.sac?props.sac:""}</b><br/>` +
                `<b>SIC:${props.sic?props.sic:""}</b><br/>` +
                `<b>线路名称:${props.routeName}</b><br/>` +
                `<b>航段标识：${props.airlineId}</b><br/>` +
                `<b>获取时间：${timestampToTime(props.createTime)}</b><br/>` +
                `<b>经度：${this.switchLatlng(props.lon)}</b><br/>` +
                `<b>纬度：${this.switchLatlng(props.lat)}</b><br/>` +
                `<b>高度：${props.height} 米</b><br/>`
        }

        this._div.innerHTML = _prefix + _content
    },
    switchLatlng: function(arg) {
        let latitude = arg; //纬度，以小数形式表示
        let lat_D = Math.trunc(latitude); //经度整数部分
        let lat_tmp = (latitude - lat_D) * 60; //经度小数部分*60
        let lat_F = Math.trunc(lat_tmp); //经度分
        let lat_M = Math.trunc((lat_tmp - lat_F) * 60);

        return lat_D + "°" + lat_F + "'" + lat_M;
    }
});
