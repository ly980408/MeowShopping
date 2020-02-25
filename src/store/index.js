import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCartItem (state, data) {
      // 获取类别 id 并判断是否存在相同类别项
      const id = data.id
      let index // 用于保存相同项的索引，方便改数据
      const item = state.cartList.find((el, i) => {
        if (el.id === id) {
          index = i
          return true
        }
      })
      if (item) { // 如果存在相同，则数量叠加
        const thisNum = data.num
        const oldNum = item.num
        const newNum = thisNum + oldNum
        state.cartList[index].num = newNum
      } else { // 如果不存在，则新添项目
        state.cartList.push(data)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
