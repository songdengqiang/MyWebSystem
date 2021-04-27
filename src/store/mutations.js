export default {
    //原方法
    changInputState(state){
        state.inputState = true
    },
    changInputState1(state){
        state.inputState = false
    },
    //初始化全局变量
    initStateData(state){
        state.loginInfo = '';
        state.loginState = false;
    },
    editLogin(state,param){
        state.loginState = true;
        state.loginInfo = param
    },
    //请求数据并初始化背景图片列表和天气数据
    initBgImgList(state,param){
        state.bgImgList = param
    },
    editBgPath(state,param){
        state.bgImgPath = param
    },
    initWeatherInfo(state,param){
        state.weatherInfo = param
    }


}
