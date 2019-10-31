<template>
  <div class="register_form">
    <el-form
     :rules="rules"
     :model="form"
     ref="form"
    >
      <el-form-item prop="username">
        <el-input v-model="form.username" placeholder="用户名/手机"></el-input>
      </el-form-item>
      <el-form-item prop="captcha">
        <el-input v-model="form.captcha" placeholder="验证码">
          <!-- template只是一个占位符,不能绑定事件 -->
           <template slot="append">
             <div @click="send_captcha">发送验证码</div>
             </template>
        </el-input>
      </el-form-item>
       <el-form-item prop="nickname">
        <el-input v-model="form.nickname" placeholder="你的名字">
        </el-input>
      </el-form-item>
       <el-form-item prop="password">
        <el-input v-model="form.password" placeholder="密码"></el-input>
      </el-form-item>
       <el-form-item prop="password2">
        <el-input v-model="form.password2" placeholder="确认密码"></el-input>
      </el-form-item>


      <el-form-item>
        <el-button type="primary"
        @click="submitForm"
        style="width:100%;">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    //确认密码输入框 失去焦点的时候被调用
       var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.password){
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      form:{
        username:'13800013800',
        captcha:'000000',
        password:'13800013800',
        nickname:'13800013800',
        password2:'13800013800'
      },
      rules:{
        username:[
          {required:true,message:'请输入手机号码',trigger:'blur'}
        ],
        captcha:[
          {
            required:true,message:'请输入验证码',trigger:'blur'
          }
        ],
        nickname:[
          {required:true,message:"请输入用户名",trigger:'blur'}
        ],
        password:[
          {required:true,message:'请输入密码',trigger:'blur'}
        ],
        password2:[
          {validator:validatePass2, trigger:'blur'}
        ]
      }
    }
  },
  methods:{
    //获取用户手机号码
    send_captcha(){
      let reg=/^(?:(?:\+|00)86)?1[3-9]\d{9}$/
      if(reg.test(this.form.username)){
        this.$axios.post('/captchas',{tel:this.form.username
        })
        .then(res=>{
          console.log(res)

        })
      }else{
        this.$message.warning('手机号不合法')
      }
    },
    //点击 注册
    submitForm(){
      this.$refs.form.validate(valid=>{
        if(valid){
          //1.构造表单  发送异步请求
          //2.删除对象的一个属性 this.form.['password2']
          //3. resform 等于 this.form 对象中除了 password2以外的所有属性集合 ==对象

          //jwt  json web token  成功后的跳转

          let {password2,...resForm}=this.form
          console.log(resForm);
          this.$axios.post('/accounts/register',resForm)
          .then(res=>{
            this.$router.push('/user/login/0')
          })

        }else{
          console.log('输入不合法')
          return false

        }
      })
    }
  }

}
</script>

<style lang="less" scoped>

.register_form{
  padding:20px;
}
</style>
