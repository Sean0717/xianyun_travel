import {Message} from 'element-ui'

export default function({$axios,redirect}){
  //请求失败会在这里处理

  $axios.onError(error=>{
    //获取失败后的返回值
    const {statusCode,message}=error.response.data;
    if(statusCode===400){
      //密码错误 时的提醒
      Message.warning(message)
    }
  })
}
