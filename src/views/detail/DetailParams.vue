<template>
  <div v-if="Object.keys(params).length !== 0" class="params">
    <van-divider class="divider">{{ params.info.key }}</van-divider>
    <table class="params-info" rules="rows">
      <tr v-for="item in params.info.set" :key="item.key">
        <td class="info-key">{{ item.key }}</td>
        <td class="info-val">{{ item.value }}</td>
      </tr>
    </table>
    <van-divider class="divider">{{ params.rule.key }}</van-divider>
    <p class="disclaimer">{{ params.rule.disclaimer }}</p>
    <table v-for="(table, index) in params.rule.tables" :key="index" class="params-rule" rules="rows">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    params: Object
  }
}
</script>

<style lang="scss" scoped>
  .params{
    padding: 15px;
    border-bottom: 5px solid #cdcdcd;
    .divider{
      border-color: #666;
      color: #666;
    }
    table{
      width: 100%;
      td{
        padding: 10px 2px 2px;
      }
    }
    .params-info{
      .info-key{
        width: 80px;
        color: #666;
      }
      .info-val{
        color: tomato;
      }
    }
    .disclaimer{
      color: #cdcdcd;
      font-size: 12px;
    }
    .params-rule{
      width: 100%;
      margin-top: 15px;
    }
  }
</style>
