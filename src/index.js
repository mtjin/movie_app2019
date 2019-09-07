import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//component를 사용하고자할때의 형태
//react는 component를 사용해서 html처럼 작성하려는 경우 필요, 하나의 component만을 rendering 가능
ReactDOM.render(<App />, document.getElementById('root'));
