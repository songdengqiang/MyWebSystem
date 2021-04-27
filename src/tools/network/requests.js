import axios from "axios";

export function getData(config){
    const instance = axios.create({
        baseURL:'http://127.0.0.1:8888',
        // timeout: 100000
    })

    //请求的拦截
    instance.interceptors.request.use(config =>{
        //在这里可以为请求增加一些条件
        return config
    },(error) => {
        console.log(error)
    })
    //反应的拦截
    instance.interceptors.response.use(res =>{
        return res.data
    },(error) => {
        console.log('数据请求失败，失败原因：'+error +"  请检查后台是否出错！")
        // console.log(error)
    })
    return  instance(config)

}
