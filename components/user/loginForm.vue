<template>
  <div class="login_form">

    <el-form :model="form" ref="form">
      <el-form-item>
        <el-input v-model="form.username" placeholder="用户名/手机"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" placeholder="密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary"
         @click="login_button"
         class="login_button"
         style="width:100%;">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      form:{
        username:'1380013800',
        password:'1380013800'
      }
    }
  },
  methods:{
    login_button(){
      //把token和用户信息都存起来
          //在vuex中 或者 存储到本地
      this.$store.dispatch('user/setUser',this.form)
      .then(res=>{

          //弹出提示, 跳转页面
          this.$message.success('登录成功')
          this.$router.push('/')
      })
    }
  }
}
</script>

<style lang="less" scoped>

  .login_form{
    padding: 20px;
  }
  .login_button{
    margin-top: 20px;
  }
</style>
