//所有跟页面渲染有关的都放在这里管理
import { fetchProfile, fetchCards } from './api';
import { getProfileImageEle, createCardDom } from './element';

export const renderProfile = async () => {
  // step 1: fetch profile data from backend
  const profile = await fetchProfile();
  // console.log('profile', profile);

  // // step 2: get the target DOM from html
  const profileImageDOM = getProfileImageEle();

  // // step 3: apply the profile data on above DOM element
  profileImageDOM.src = profile.img_src;
  console.log(profileImageDOM);
};

//步骤5
const renderSingleCards = (card) => {
  //渲染单张卡片。
  //传进卡片（每张卡片的数据：id, picture,profile）
  const cardDom = createCardDom(); //调用 createCardDom 函数，生成一个基础卡片 DOM 元素（包含空的 card-profile 和 card-picture）。
  // cardDom 长成这个样子
  // <div>
  // <div class="card-profile"></div>
  //<div class="card-picture"></div>
  // </div>
  renderCardPicture(
    //调用 renderCardPicture 函数，将卡片数据中的图片渲染到卡片的 card-picture 部分。
    //只获取card下picture相关的东西
    cardDom.querySelector('.card-picture'), //找到卡片中 card-picture 的 DOM 元素。
    card.picture.img_src, //将 card.picture.img_src（图片地址）作为参数，传递给 renderCardPicture。
  );
  document.querySelector('.card').appendChild(cardDom); //将渲染好的卡片插入到页面中。
  // 查找页面上类名为 card 的容器，将 cardDom 添加为其子元素。
};

//步骤7
const renderCardPicture = (renderCardPictureDom, pic) => {
  //renderCardPictureDom：目标 DOM 元素（.card-picture）。
  //pic：图片地址。
  //将图片数据渲染到指定的 DOM 元素中。
  //给传进来的标签做美化
  //cardPictureDom === <div class="card-picture"></div>
  const imgTag = document.createElement('img'); //生成一个img标签
  imgTag.setAttribute('width', '100%'); //img width=100% 自适应屏幕宽度
  renderCardPictureDom.appendChild(imgTag); //将<div class = "card-picture">变成
  // <div class = "card-picture"><img width=100% /></div>
  imgTag.src = pic; //设置 imgTag.src 为 pic（图片地址）。
};
//生成后的DOM结构为：
//<div class="card-picture">
//<img width="100%" src="图片地址">
//</div>

//步骤3
export const renderCards = async () => {
  //渲染所有卡片。
  // step 1: fetch posts data from backend
  const cards = await fetchCards(); //通过 fetchCards 函数获取后端返回的卡片数据
  console.log(cards);
  // step 2: start render single card one by one
  cards.forEach((card) => {
    renderSingleCards(card); //对每张卡片的数据调用 renderSingleCards 函数，依次渲染。
  });
};
