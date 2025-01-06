import './index.css';
//步骤2
import { renderProfile, renderCards } from './js/render';

window.onload = async () => {
  //windows 加载好之后开始执行js
  await renderProfile(); //第一件事是渲染profile （将图片渲染到右上角profile圈里）

  //步骤1
  await renderCards();
};
//renderProfile 函数被定义在render.js
