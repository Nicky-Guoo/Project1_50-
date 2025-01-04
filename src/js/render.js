//所有跟页面渲染有关的都放在这里管理
import { fetchProfile } from './api';
import { getProfileImageEle } from './element';

export const renderProfile = async () => {
  // step 1: fetch profile data from backend
  const profile = await fetchProfile();

  // // step 2: get the target DOM from html
  const profileImageDOM = getProfileImageEle();

  // // step 3: apply the profile data on above DOM element
  profileImageDOM.src = profile.img_src;
  console.log(profileImageDOM);
};
