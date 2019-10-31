<template>
  <div class="flights_filter">
    <div class="filter_main">
      <div class="left_path">单程:&nbsp; &nbsp;上海&nbsp; -&nbsp; 广州&nbsp; / &nbsp;2019-11-06</div>

      <div class="right_select">
          <div class="select_item">
        <el-select v-model="value" size="mini" placeholder="起飞机场">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        </div>

          <div class="select_item">
        <el-select v-model="value" size="mini"  placeholder="起飞时间">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        </div>

        <div class="select_item">
        <el-select v-model="value" size="mini" placeholder="航空公司">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        </div>


          <div class="select_item">
        <el-select v-model="value" size="mini" placeholder="机型">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        </div>
      </div>
    </div>
    <div class="filter_btn">
     筛选:&nbsp; <el-button type="primary" round size="mini" plain>撤销</el-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.flights_filter{

.filter_main{
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left_path{
      font-size: 13px;
      margin-right: 70px;
    }
    .right_select{
      display: flex;
      .select_item{
         width: 120px;
        margin-left: 5px;
      }
    }
  }
  .filters_btn{
    padding: 10px 0;
    // background-color: #ecf5ff;
  }

}

</style>
