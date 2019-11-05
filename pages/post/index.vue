<template>
  <div class="post">
    <div class="left">
      <div class="aside_nav">
        <div class="item_title" v-for="(item,index) in titleType" :key="index">
          <span>{{item.type}}</span>
          <i class="iconfont el-icon-arrow-right sgy"></i>
          <div class="item_content">
            <div v-for="(item2,index2) in item.children" :key="index2"
            @click="handleSearch(item2.city)">
              <span>{{index2+1}}</span>
              <i>{{item2.city}}</i>
              <em>{{item2.desc}}</em>
            </div>
          </div>
        </div>
      </div>

      <div class="recommend">
        <p>推荐城市</p>
        <img src="http://157.122.54.189:9093/images/pic_sea.jpeg" alt />
      </div>
    </div>
    <div class="main">
      <div class="top">
        <el-input placeholder="请输入城市名"
         suffix-icon="el-icon-search"
         style="font-size:25px;"
         v-model="searchValue"
         @blur="lost"></el-input>
        <div>
          <P>推荐: 北京 上海 广州</P>
        </div>
        <div class="plan">
          <div class="left">推荐攻略</div>
          <el-button type="primary" icon="el-icon-edit" @click="$router.push('/post/create')">写游记</el-button>
        </div>
      </div>
    </div>
    <!-- <p v-html="articalList"></p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleType: [],  //主体类型
      articalList:[],
      searchValue:'北京',
      city:''
    }
  },
  methods:{
    getCity(){

      this.$axios.get('/posts',{params:{city:this.city}})
      .then(res=>{
        console.log(res);
      this.articalList=res.data.data
      })

    },
    handleSearch(city){
      this.$router.push({path:'/post',query:{city}})
      this.getCity()

    },
    lost(){
      console.log(this.searchValue)
      // this.$axios.get('/posts',{params:{city}})
      this.city=this.searchValue
      this.getCity()
    }
  },
  mounted(){
     this.$axios.get('/posts/cities')
      .then(res => {
        console.log(res.data.data)
        this.titleType = res.data.data
      })
      this.city=this.$route.query.city
    this.getCity();
  }
}
</script>

<style lang="less" scoped>
.post {
  display: flex;
  width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
  justify-content: space-between;
}
.left {
  width: 260px;
  height: 400px;
  // background-color: pink;
  .aside_nav {
    position: relative;
  }
  .item_title {
    display: flex;
    height: 40px;
    width: 259px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #dddddd;
    border-bottom: 0px;
    padding: 0 20px;
    // position: relative;
    &:hover {
      border-right: 0;
      cursor: pointer;
      color: #f93;
      .sgy {
        position: relative;
        &::after {
          content: "";
          height: 38px;
          width: 1px;
          position: absolute;
          right: -19px;
          top: -10px;
          background-color: #fff;
          z-index: 99;
        }
      }

      .item_content {
        display: block;
        height: 220px;
      }
    }

    span {
      font-size: 15px;
    }
    i {
      font-size: 18px;
    }
    .item_content {
      display: none;
      font-size: 16px;
      height: 40px;
      padding: 0 15px;
      line-height: 40px;
      position: absolute;
      top: 0;
      left: 257px;
      width: 350px;
      z-index: 1;
      border: 1px solid #dddddd;
      background-color: #ffffff;
      i {
        font-style: normal;
        font-size: 16px;
        padding: 0 10px;
      }
      span {
        font-size: 20px;
      }
      em {
        color: #999999;
        font-style: normal;
        font-size: 14px;
      }
    }
  }

  .recommend {
    border-top: 1px solid #dddddd;
    padding-top: 30px;
    font-size: 18px;
    font-weight: 400;
    p {
      padding: 10px;
      border-bottom: 1px solid #dddddd;
    }
    img {
      margin: 10px 0;
      width: 100%;
    }
  }
}
.main {
  /deep/ input {
    width: 700px;
    height: 40px;
    border: 3px solid #ffa500;
    font-size: 16px;
    margin-bottom: 10px;

  }
  .top div p {
    font-size: 14px;
  }
  .plan {
    height: 55px;
    line-height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eeeeee;
    .left {
      width: 80px;
      height: 55px;
      font-size: 20px;
      color: #ffa500;
      border-bottom: 2px solid #ffa500;
    }
  }
}
</style>
