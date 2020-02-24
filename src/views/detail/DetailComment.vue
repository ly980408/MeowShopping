<template>
  <div class="comment">
    <div class="header">
      <div class="title">用户评论</div>
      <div class="more">
        <span>更多 </span>
        <span class="iconfont icon-diandian"></span>
      </div>
    </div>
    <div v-if="Object.keys(commentInfo).length !== 0" class="container">
      <div class="user">
        <img :src="commentInfo.user.avatar" class="user-avatar">
        <span class="user-name">{{ commentInfo.user.uname }}</span>
      </div>
      <div class="content">
        <div class="text">
          <p>{{ commentInfo.content }}</p>
        </div>
        <div class="explain" v-if="commentInfo.explain">
          <div class="van-multi-ellipsis--l3">{{ commentInfo.explain }}</div>
        </div>
        <div v-if="commentInfo.images" class="image-box">
          <img v-for="item in commentInfo.images" :key="item" :src="item" class="image">
        </div>
      </div>
      <div class="footer">
        <span class="time">{{ commentInfo.created | formatDate }}</span>
        <span class="style">{{ commentInfo.style }}</span>
      </div>
    </div>
    <div v-else class="no-comment">暂无评论</div>
  </div>
</template>

<script>
export default {
  props: {
    commentInfo: {}
  },
  filters: {
    formatDate (value) {
      const date = new Date(value * 1000)
      const y = date.getFullYear()
      const m = date.getMonth() + 1
      const d = date.getDay() + 1
      return y + '/' + m + '/' + d
    }
  }
}
</script>

<style lang="scss" scoped>
  .comment{
    width: 100%;
    position: relative;
    padding: 15px;
    border-bottom: 4px solid #cdcdcd;
    .header{
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      .title{
        font-size: 18px;
        color: #666;
      }
    }
    .container{
      .user{
        display: flex;
        .user-avatar{
          width: 35px;
          height: 36px;
          border-radius: 50%;
        }
        .user-name{
          padding-left: 15px;
          margin: auto 0;
          color: #333;
        }
      }
      .content{
        .text{
          padding: 10px;
          font-size: 15px;
          color: #333;
        }
        .explain{
          margin: 10px;
          padding: 10px;
          padding-right: 25px;
          background-color: #f6f6f6;
          border-radius: 10px;
          position: relative;
        }
        .image-box{
          padding-left: 15px;
          .image{
            width: 85px;
            height: 85px;
            margin-right: 15px;
          }
        }
      }
      .footer{
        padding: 6px;
        .time{
          margin-right: 8px;
        }
        .style{
          font-size: 14px;
          color:#cdcdcd;
        }
      }
    }
    .no-comment{
      padding: 15px;
      text-align: center;
      color: #cdcdcd;
    }
  }
</style>
