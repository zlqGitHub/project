Page({
  data: {
    markers: [
      {
      iconPath: '../../resources/images/0.png',
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 30,
      height: 35
      }, 
      {
        iconPath: '../../resources/images/0.png',
        id: 1,
        latitude: 23.099994,
        longitude: 113.342520,
        width: 30,
        height: 35
      }
    ],     
   
  },
  markertap:function(e){
    console.log(e);
    
  }

})