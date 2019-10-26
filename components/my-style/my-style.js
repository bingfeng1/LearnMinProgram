// components/my-style/my-style.js
Component({
  options:{
    // 默认样式不影响外层
    // styleIsolation:"isolated"

    // 外层影响内层，但内存不影响外层
    // styleIsolation:'apply-shared'

    // 互相影响
    styleIsolation:'shared'
  }
})
