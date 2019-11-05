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

      <!--3. 机票列表开始 -->
      <div class="air_list">
        <FlightsItem v-for="(item) in currentFlights" :key="item.id" :data="item"/>
      </div>
      <!-- 机票列表结束 -->

        <!--4. 底部分页开始 -->


         <!-- :current-page  当前的页码
          :page-sizes= 页容量 数组
          :page-size  当前 页容量
          @size-change 页容量改变事件
          @current-change 页码改变事件-->
    <div class="changePages">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.currentPage"
        :page-sizes="page.pageSizeArr"
        :page-size="page.pageSizes"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total"
      ></el-pagination>
    </div>
    <!-- 底部分页结束 -->
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
      flightsData: {
        //机票列表的数组
        flights: [],
        info: {},
        options: {}
      },
      //被分页后的当前机票列表
      currentFlights:[],
      //分页对象
      page:{
        //当前页码
        currentPage:1,
        //页容量
        pageSizes:10,
        //页容量数组
        pageSizeArr:[1,2,5,10,20,100],
        //总条数
        total:1
      }
    }
  },
  components: {
    FlightsItem, FlightsFilter
  },
  methods: {
    //获取机票数据
    getList() {
      let form = this.$route.query
      this.$axios.get('/airs', { params: form })
        .then(res => {
          console.log(res)
          //定义过滤后的数组
          this.flightsData = res.data
          this.page.total=this.flightsData.total//等于从后台获取到的数据总数

           // 需要实现 数组分页  this.flightsData.flights
        // 记公式
        // let list =totalList.slice()使用它

        // let list =totalList.slice(
        // (当前的页码-1)*当前的页容量 ),
        // 当前的页码* 当前的页容量
        // )

        this.currentFlights=this.flightsData.flights.slice(
          // //页码2  页容量是10  第二页
          // //第10条开始 20
          (this.page.currentPage-1)*this.page.pageSizes,
          //20
          this.page.currentPage*this.page.pageSizes
// 0,8

        )
        console.log(this.currentFlights)
        //  console.log(this.currentFlights)
        })
    },
    //页容量改变事件
   handleSizeChange(value){
     //value 就是你选择的 页容量 你的值
      console.log(value);

      this.page.pageSizes=value

      this.currentFlights=this.flightsData.flights.slice(
           (this.page.currentPage-1)*this.page.pageSizes,//0
          //20
          this.page.currentPage*this.page.pageSizes//2

      )

   },
   //当前页码改变事件
    handleCurrentChange(value){
        //选择后的当前页码
        console.log(value);

        this.page.currentPage=value

        this.currentFlights=this.flightsData.flights.slice(
           (this.page.currentPage-1)*this.page.pageSizes,
          //20
          this.page.currentPage*this.page.pageSizes//2
        )
    }

  },
  mounted() {
    this.getList()
  }
}
</script>

<style lang="less" scoped>

  .changePages{
    display: flex;
    justify-content:center;
    margin-top: 15px;
  }
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
