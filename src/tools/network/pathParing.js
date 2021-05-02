import {getData} from './requests'
/*********************数据的请求(get)**************************/
//背景图片信息初始化
export function getImgList(){
  return getData({
      url:'/user/sendImg',
      method:'get'
  })
}
export function getImgBg(){
  return getData({
    url:'/user/getBKurl',
    method:'get'
  })
}
export function addImgData(data){
  return getData({
    url:'/user/addImgs',
    method:'post',
    header:{ "Content-Type": "multipart/form-data" },
    data
  })
}
export function editBgInfo(data){
  return getData({
    url:'/user/changeBK',
    method:'post',
    data
  })
}
//天气数据获取
export function getWeather(){
  return getData({
    url:'/user/weathers',
    method:'get'
  })
}

//neo4j数据库的请求
export function connectDB(data){
  return getData({
    url:'/user/graphs/connectNetwork',
    method:'post',
    data
  })
}
export function getPartNeo4j(data){
  return getData({
    url:'/user/graphs/getNeo4jPartData',
    method:'post',
    data
  })
}
export function getAllNeo4j(){
  return getData({
    url:'/user/graphs/getNeo4jAllData',
    method:'get',
  })
}
export function deleteNeo4j(){
  return getData({
    url:'/user/graphs/deleteD',
    method:'get',
  })
}
export function appendNeo4jEntity(data){
  return getData({
    url:'/user/graphs/insertEntity',
    method:'post',
    data
  })
}

