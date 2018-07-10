Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:'init data!',
    num:0,
    array:[{msg:'1'},{msg:'2'}],
    Object:{text:'init data'}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("执行onLoad方法！")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("执行onReady方法！")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("执行onShow方法！")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("执行onHide方法！")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("执行onUnload方法！")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("执行onPullDownRefresh方法！")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("执行onReachBottom方法！")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("执行onShareAppMessage方法！")
    return {
      title:'lris-first-calc-onShareAppMessage',
      path:'/page/success/success?id=123'

    }
  },
  wiewTap: function(){
    console.log('view tap')
  },
  changeText: function () {
    // this.data.text = 'changed data'  // bad, it can not work
    this.setData({
      text: 'changed data'
    })
  },
  changeNum: function () {
    this.data.num = 1
    this.setData({
      num: this.data.num
    })
  },
  changeItemInArray: function () {
    // you can use this way to modify a danamic data path
    this.setData({
      'array[0].text': 'changed data'
    })
  },
  changeItemInObject: function () {
    this.setData({
      'object.text': 'changed data'
    });
  },
  addNewField: function () {
    this.setData({
      'newField.text': 'new data'
    })
  }
})