<template>
  <div class="login">
    <div class="login_main">
      <div class="login_title">
        <div class="title_item"
              :class="currentIndex===index?'active' : ''"
              @click="currentIndex=index"
              v-for="(item,index) in ['登录','注册']"
              :key="index"
        >{{item}}</div>
      </div>
      <div class="login_main_content">
        <!-- 登录组件 -->
        <div v-if="currentIndex===0">登陸</div>
      <div v-else>注册</div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      currentIndex:0
    }
  }
}
</script>

<style lang="less" scoped>
  .login{
      height: 700px;
      min-width: 1000px;
      background: url(http://157.122.54.189:9093/images/bar1.jpg)center center;
      position: relative;
      .login_main{
        position: absolute;
        top:50%;
        left:50%;
        width: 400px;
        height: 284px;
        background-color: #fff;
        transform: translate(-50%,-50%);
        .login_title{
          height: 50px;
          color: #666;
          background-color: #eeeeee;
        display: flex;
      .title_item{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        }
        .active{
          color: orange;
          position: relative;
          background-color: #fff;
          font-weight: 600;
          // cursor: pointer;
          &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: orange;
          }
        }
      }
      }
  }
</style>
