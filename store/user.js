
//1.定义state函数的返回对象,名称不能改

export const state=()=>({
  //this.$store.state.user.userinfo.user.nickname

  userinfo:{
    token:'',
    user:{}
  }
})


//2.定义  mutation

export const mutations={
  setUser(state,userinfo){
    state.userinfo=userinfo
  }
}

// 3.定义action 负责异步操作

export const actions={
  setUser(context,form){
    //this.$axios.post  执行完毕后会返回一个promise对象
    //第一个return是必须的 文档规定
     return this.$axios.post('/accounts/login',form)
    .then (res=>{
      context.commit('setUser',res.data)
      //提交后 把用户信息存入本地存储中
      localStorage.setItem('userinfo',JSON.stringify(res.data))

      return res.data
    })
  }
}

