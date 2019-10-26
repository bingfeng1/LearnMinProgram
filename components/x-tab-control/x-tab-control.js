// components/x-tab-control/x-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getTitle(event) {
      this.setData({
        currentIndex: event.currentTarget.dataset.index
      })
      this.triggerEvent('getTitle', {index:event.currentTarget.dataset.index}, {})
    }
  }
})
