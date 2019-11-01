<template>
  <div class="flights">
    <!-- main部分开始 -->
    <div class="main">
      <!-- 筛选模块开始 -->

      <FlightsFilter />
      <!-- 筛选模块结束 -->
      <!-- 2 表单的头部 开始 -->
      <div class="flights_head">
        <div class="flights_head_item">航空信息</div>
        <div class="flights_head_item">起飞时间</div>
        <div class="flights_head_item">到达时间</div>
        <div class="flights_head_item">价格</div>
      </div>
      <!-- 2 表单的头部 结束 -->

      <!-- 机票列表开始 -->
      <div class="air_list">
        <FlightsItem v-for="item in flightsData.flights" :key="item.id" :data="item" />
      </div>
      <!-- 机票列表结束 -->
    </div>
    <!-- main部分结束 -->

    <!-- 侧边栏开始 -->
    <div class="flights_aside">侧边栏</div>
    <!-- 侧边栏结束 -->
  </div>
</template>

<script>
import FlightsFilter from '@/components/air/flightsFilter.vue'
import FlightsItem from '@/components/air/flightsItem.vue'
export default {
  data() {
    return {
      flightsData:{
        //机票列表的数组
        flights:[],
        info:{},
        options:{}
      }
    }
  },
  components: {
     FlightsItem, FlightsFilter
      },
      methods:{
        //获取机票数据
        getList(){
        let form=this.$route.query
        this.$axios.get('/airs',{params:form})
        .then(res=>{
          console.log(res)
          this.flightsData=res.data
        })
      }
      },
      mounted(){
       this.getList()
      }
}
</script>

<style lang="less" scoped>
.flights {
  width: 1000px;
  margin: 0 auto;
  display: flex;
}
.flights_main {
  flex: 5;
}
.flights_aside {
  flex: 2;
}

//表单头部样式
.flights_head {
  margin-top: 20px;
  background-color: #f6f6f6;
  height: 35px;
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 13px;
  border: 1px solid #ccc;
  color: #666;
  .flights_head_item {
    flex: 1;
  }
}
</style>
