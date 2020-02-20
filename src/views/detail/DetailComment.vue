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
    </div>
    <div v-else class="no-comment">暂无评论</div>
  </div>
</template>

<script>
export default {
  props: {
    commentInfo: {}
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
        vertical-align: middle;
        .user-avatar{
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .user-name{
          padding-left: 15px;
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
