import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList:[{
    "id": 1,
    "title": "社会热点",
    "imgUrl": "//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  }, {
    "id": 2,
    "title": "手手绘",
    "imgUrl": "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  }],
  "articleList": [{
    "id": 1,
    "title": "胡歌12年后首谈车祸",
    "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
    "imgUrl": "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
  }, {
    "id": 2,
    "title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
    "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
    "imgUrl": "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
  }]
});

export default (state = defaultState, action) => {
  switch (action.type) {
   
    default:
      return state;
  }
}