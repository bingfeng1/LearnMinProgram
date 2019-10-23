Page({
  data: {
    name: 'world',
    age: 19,
    students: [{
        id: 1,
        name: 'aaaa',
        age: 10
      },
      {
        id: 2,
        name: 'bbbb',
        age: 20
      },
      {
        id: 3,
        name: 'ccccc',
        age: 30
      },
      {
        id: 4,
        name: 'ddddd',
        age: 40
      },
      {
        id: 5,
        name: 'eeee',
        age: 50
      },
    ],
    counter: 0
  },
  handleBtnClick() {
    let num = this.data.counter + 1
    this.setData({
      counter: num
    })
  },
  handleSubtraction() {
    let num = this.data.counter - 1
    this.setData({
      counter: num
    })
  }
})