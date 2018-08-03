require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
//图片数据处理
let datas =(function imageDatas(datas) {
  for (let element of datas) {
    element.fileName = 'url-loader!../images /'+element.fileName
  }
  return datas;
})(datas);

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <image src={imageSrc}/>
      </div>
    );

  }
}

export default AppComponent;
