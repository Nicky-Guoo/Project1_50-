//存放所有从html里面找元素的函数
export const getProfileImageEle = () => {
  return document.querySelector('nav .profile-photo img');
};

//步骤6
export const createCardDom = () => {
  const cardDom = document.createElement('div'); //用 document.createElement 方法创建了一个空的 div 元素，赋值给变量 cardDom。
  cardDom.innerHTML = `
  <div class="card-profile"></div>
  <div class="card-picture"></div>
  `;

  return cardDom; //将创建好的 cardDom 返回，以便调用者可以使用。
};

//div.card-profile 是一个空的 div，通常用于显示卡片的用户信息或头像。
//div.card-picture 是另一个空的 div，通常用于显示卡片的图片或其他视觉内容。
//这个函数的功能是创建一个卡片的 DOM 元素，包含 card-profile 和 card-picture 两部分，且没有任何初始内容。它适用于动态生成 HTML 内容的场景，比如：
//渲染用户卡片列表
//动态加载数据后生成 UI
