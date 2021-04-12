import * as d3 from 'd3'
import axios from "axios";
// import { zl_calculator_zl } from 'zl_calculator_zl'
const commonF = {
  // 获取实时时间
  get_today_time: () => {
    let strictIsoParse1 = d3.timeFormat('%Y-%m-%d/周%w/%H:%M:%S')
    let strictIsoParse2 = d3.timeFormat('%Y-%m-%d')
    return [strictIsoParse1(new Date()),strictIsoParse2(new Date())]
  },
  // 随机产生介于min和max之间的数字
  getRndInteger: (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
  },
  //获取数据库的数据
  getDBdata:(path,param,callback)=>{
    // console.log(path,param)
    axios
          .post(path, param)
          .then((res) => {
            // console.log(res.data)
            if(res.data === '失败'){
              alert('数据库连接失败！')
            }else{
              // alert('数据库连接成功！')
              callback(res.data)
            }
          })
  },
  //获取input上传文件得路径
  getobjurl: (file) => {
    let url = null
    if (window.createObjectURL !== undefined) {
      url = window.createObjectURL(file)
    } else if (window.URL !== undefined) {
      url = window.URL.createObjectURL(file)
    } else if (window.webkitURL !== undefined) {
      url = window.webkitURL.createObjectURL(file)
    }
    return url
  }
}

export default commonF
