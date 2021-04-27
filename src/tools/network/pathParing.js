import {getData} from './requests'
/*********************数据的请求(get)**************************/
//登录界面
export function initLogin(){
  return getData({
      url:'/user/sendImg',
      method:'get'
  })
}
