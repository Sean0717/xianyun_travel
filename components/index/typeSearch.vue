<template>
 <div class="types_search">
      <div class="types_tab_title">
        <div class="title_item"
        @click="changeTitle(index)"
        :class="index===currentIndex?'active': ''"
        v-for="(item,index) in titles"
        :key="index">
          {{item.text}}
        </div>
      </div>
    <div class="types_tab_content">
      <input type="text" :placeholder="titles[currentIndex].ph">
      <i class="iconfont el-icon-search mysearch"></i>
    </div>
 </div>
</template>

 <script>
export default {
  data(){
    return {
    titles:[
      {text:'攻略',ph:'请输入攻略'},
      {text:'酒店',ph:'请输入酒店'},
      {text:'机票',ph:'请输入机票'}
    ],
  currentIndex:0
    }
  },
  methods:{
    changeTitle(index){
      //点击后把currentIndex的索引值改成传进来的参数值
      this.currentIndex=index;
      // if(index===2){
      //   this.$router.push('/air')
      // }
    }
  }
}
</script>

 <style  lang="less" scoped>
.types_search{
  width: 550px;
}
.types_tab_title{
  height: 40px;
  display: flex;
  .title_item{
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.5);
    color: #fff;
    transform:skewX(10deg);
    // margin-left: 15px;
    outline: none;
    font-size: 20px;
    text-indent: 15px;

    &:hover{
      color: #0094ff;
        // background-color: #fff;
        cursor: pointer;
    }
  }
  .active{
    background-color: #eeeeee;
    color:black;
  // border-radius: 5px;
    // border-top-left-radius: 0px;
  }
}
.types_tab_content{
  height: 50px;
  position: relative;
  .mysearch{
    font-size: 25px;
    position: absolute;
    top:11px;
    left:511px;
  }
  input{
    display: block;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: none;
    outline: none;
    font-size: 16px;
    text-indent: 15px;
  }
}
</style>
