require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
//图片数据处理
let datas = require('json-loader!../data/imageData.json');
let data =(function imageDatas(datas) {
  for (let element of datas) {
    element.fileName = '../images /'+element.fileName
  }
  return datas;
})(datas);
class ImgFigure extends React.Component {
  render(){
    let testimage = require('../images/yeoman.png');
    return (
      <figure>
      <image className='imagefigure' src={this.props.data.fileName}
      alt={this.props.data.title}/>
      <image src ={testimage}/>
      <figcaption>
        <h2>{this.props.data.desc}</h2>
      </figcaption>
    </figure>
    );
  }
}
class AppComponent extends React.Component {
  render() {
    let controllerUnits = [],
        imgFigures = [];
    data.forEach(element => {
      imgFigures.push(<ImgFigure data={element}/>);
    });
    return (
      <div>
        <h1>test</h1>
        {imgFigures}
        {controllerUnits}
      </div>
    );
  }
}

export default AppComponent;
