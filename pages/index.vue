
<template>
  <div class="xyly_index">
    <!-- 轮播图开始 -->
    <div class="index_carousel">
      <el-carousel height="700px">
        <el-carousel-item
        v-for="(item,index) in swiperList"
        :key="index">
          <div
            :style="`background:url(${$axios.defaults.baseURL+item.url}) center center ;height:700px;`"
          ></div>
        </el-carousel-item>
      </el-carousel>
      <!-- 中间tab栏开始 -->

      <div class="index_tabs">
        <TypeSearch />
      </div>
      <!-- 中间tab栏结束 -->
    </div>
    <!-- 轮播图结束 -->
  </div>
</template>

<script>
import TypeSearch from '@/components/index/typeSearch.vue'
export default {
components:{
  TypeSearch
},
  data() {
    return {
      swiperList: []
    }
  },
//  mounted(){
//    this.$axios.get('/scenics/banners')
//    .then(res=>{
//      console.log(res)
//      this.swiperList=res.data.data
//    })
//  }
asyncData(context){
   const $axios=context.app.$axios

   return $axios.get('/scenics/banners').then(res=>{
     console.log(res)
     return {
     swiperList: res.data.data
     }
   })

}
}
</script>

<style lang="less" scoped>
.xyly_index{
  min-width:1000px;
}
  .index_carousel{
    position: relative;
    .index_tabs{
      position: absolute;
      top: 45%;
      left: 50%;
      z-index:999;
      transform:translate(-50%,-50%)
    }
  }
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
