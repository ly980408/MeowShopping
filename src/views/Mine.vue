<template>
  <div class="mine">
    <div class="header">
      <div class="title">我的</div>
      <div class="user">
        <van-icon name="user-circle-o" class="avatar" />
        <div class="info">
          <div>登陆 / 注册</div>
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <div class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>
          <span> 元</span>
        </div>
        <div class="text">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>
          <span> 个</span>
        </div>
        <div class="text">优惠券</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>
          <span> 分</span>
        </div>
        <div class="text">我的积分</div>
      </div>
    </div>
    <div class="list">
      <van-cell title="我的订单" icon="orders-o" is-link />
      <van-cell title="我的收藏" icon="star-o" is-link />
      <van-cell title="我的消息" icon="envelop-o" is-link />
      <van-cell title="积分商城" icon="bag-o" is-link />
      <van-cell title="设置" icon="setting-o" is-link />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
  .mine{
    width: 100%;
    height: 100vh;
    .header{
      max-height: 150px;
      width: 100%;
      background-color: #d4237a;
      color: #fff;
      .title{
        height: 44px;
        line-height: 44px;
        text-align: center;
      }
      .user{
        display: flex;
        padding: 15px 5px;
        .avatar{
          font-size: 66px;
        }
        .info{
          display: flex;
          width: 100%;
          margin: auto;
          padding-left: 6px;
          justify-content: space-between;
        }
      }
    }
    .account{
      display: flex;
      width: 100%;
      justify-content: space-around;
      text-align: center;
      border-bottom: 8px solid #f2f2f2;
      .account-item{
        padding: 18px;
        width: 100%;
        border-right: 1px solid #cdcdcd;
        font-size: 15px;
        .number{
          padding-bottom: 5px;
          .balance{
            font-size: 24px;
            font-weight: 700;
            color: #ff5f3e;
          }
        }
      }
      .account-item:last-of-type{
        border-right: 0;
      }
    }
    .list{
      .van-cell{
        font-size: 18px;
        color: inherit;
        line-height: 27px;
        .van-cell__left-icon{
          font-size: 22px;
          color: #d4237a;
        }
      }
    }
  }
</style>
