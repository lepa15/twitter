import convertTime from './convert_time.js';
import convertToISO from './convert_to_ISO.js';

async function getMessagesInfo() {
  const messagesResponse = await fetch('https://burtovoy.github.io/messages.json');
  if (!messagesResponse.ok) {
    throw new Error(messagesResponse.statusText);
  }
  const { messages } = await messagesResponse.json();

  return messages;
}

async function getPicturesInfo() {
  const picturesResponse = await fetch('https://burtovoy.github.io/pictures.json');
  if (!picturesResponse.ok) {
    throw new Error(picturesResponse.statusText);
  }
  const { pictures } = await picturesResponse.json();
  return pictures;
}

async function getStatisticsInfo() {
  const statisticResponse = await fetch('https://burtovoy.github.io/statistic.json');
  if (!statisticResponse.ok) {
    throw new Error(statisticResponse.statusText);
  }
  const { statistic } = await statisticResponse.json();
  return statistic;
}

function normalize(messages, pictures, statistics) {
  const usersById = {};
  const messagesList = [];

  messages.forEach((msg) => {
    const {
      id,
      user_id: userId,
      name: userName,
      message: text,
      img_message: image,
      date: createdAt,
      mail,
      ...rest
    } = msg;

    usersById[userId] ??= { userId };
    usersById[userId] = {
      ...usersById[userId],
      userId,
      userName,
      mail,
    };

    messagesList.push({
      id,
      userId,
      text,
      image: image ?? null,
      createdAt: convertToISO(createdAt),
      ...rest,
    });
  });

  pictures.forEach((picture) => {
    const {
      user_id: userId,
      url: avatarUrl,
    } = picture;

    usersById[userId] ??= { userId };
    usersById[userId].avatarUrl ??= avatarUrl ?? 'default.png';
  });

  return {
    usersById,
    messagesList,
    statistics,
  };
}

function renderUserPost(userPostsData) {
  const {
    usersById,
    messagesList,
    statistics,
  } = userPostsData;

  const messagesWrap = document.querySelector('.messages-list');
  if (!messagesWrap) return;
  const statisticsWrap = document.querySelector('.about-list');
  if (!statisticsWrap) return;
  messagesWrap.innerHTML = '';

  messagesList.forEach((msg) => {
    const user = usersById[msg.userId];
    const messageItem = document.createElement('li');
    messageItem.className = 'messages-item user';
    messageItem.innerHTML = `
       <div class="user-inner">
           <div class="user-photo">
               <img src="${user.avatarUrl}" alt="user photo">
           </div>
           <div class="user-info">
               <div class="user-header name">
                   <div class="name-wrap">
                       <h3 class="name-title">${user.userName}</h3>
                       <p class="name-nickname">${user.mail}</p>
                   </div>
                   <div class="name-last-seen">
                       <p class="name-last-seen-desc"></p>
                   </div>
               </div>
               <div class="user-body">
                   <p class="user-body-desc">${msg.text}</p>
                   <div class="user-body-img">
                       ${msg.image ? `<img src="${msg.image}" alt="message photo">` : ''}
                   </div>
               </div>
               <div class="user-footer">
                   <div class="user-footer-btn">
                       <button class="repost-btn">
                           <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                               <path d="M4.6875 2.8125L1.40625 6.5625M1.40625 6.5625L4.6875 10.3125M1.40625 6.5625H8.4375C12.1875 6.5625 14.0625 8.4375 14.0625 12.1875"
                                     stroke="#ABACB1" stroke-linecap="round"
                                     stroke-linejoin="round"/>
                           </svg>
                       </button>
                       <p class="repost-btn-desc">${msg.quantityReposts}</p>
                   </div>
                   <div class="user-footer-btn">
                       <button class="like-btn">
                           <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                               <path d="M1.2887 6.38067C-0.117554 4.50567 0.351196 1.69317 2.69495 0.755669C5.0387 -0.181831 6.44495 1.69317 6.9137 2.63067C7.38245 1.69317 9.25745 -0.181831 11.6012 0.755669C13.9449 1.69317 13.9449 4.50567 12.5387 6.38067C11.1324 8.25567 6.9137 12.0057 6.9137 12.0057C6.9137 12.0057 2.69495 8.25567 1.2887 6.38067Z"
                                     stroke="#ABACB1" stroke-linecap="round"
                                     stroke-linejoin="round"/>
                           </svg>
                       </button>
                       <p class="like-btn-desc">${msg.quantityLike}</p>
                   </div>
                   <div class="user-footer-btn">
                       <button class="share-btn">
                           <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                               <path d="M11.75 8.9375V12.6875H0.5V8.9375M6.125 0.5V9.875M6.125 0.5L2.375 4.25M6.125 0.5L9.875 4.25"
                                     stroke="#ABACB1" stroke-linecap="round"
                                     stroke-linejoin="round"/>
                           </svg>
                       </button>
                       <p class="share-btn-desc">${msg.quantityShare}</p>
                   </div>
               </div>
           </div>
       </div>
    `;
    messagesWrap.appendChild(messageItem);

    const timeEl = messageItem.querySelector('.name-last-seen-desc');
    const postDate = new Date(msg.createdAt);

    function updatePostDate() {
      timeEl.textContent = `${convertTime(postDate, new Date())}`;
    }
    updatePostDate();
    setInterval(updatePostDate, 1000);
  });

  const {
    usersRegistr,
    writMessages,
    writToday,
  } = statistics;

  statisticsWrap.innerHTML = `
    <li class="list__item item">
        <p class="item__count">${usersRegistr}</p>
        <p class="item__desc">Пользователей зарегестрировано</p>
    </li>
    <li class="list__item item">
        <p class="item__count">${writMessages}</p>
        <p class="item__desc">Сообщений <br> написано</p>
    </li>
    <li class="list__item item">
        <p class="item__count">${writToday}</p>
        <p class="item__desc">Написано <br> сегодня</p>
    </li>
  `;
}

async function initUserPosts() {
  const [messages, pictures, statistics] = await Promise.all([
    getMessagesInfo(),
    getPicturesInfo(),
    getStatisticsInfo(),
  ]);
  const usersData = normalize(messages, pictures, statistics);
  renderUserPost(usersData);
}

let loader = null;

function initLoader() {
  loader = document.getElementById('loader');
  if (!loader) {
    throw new Error('Loader element is not found');
  }
}

function hideLoader() {
  loader.classList.add('hidden');
}

window.addEventListener('DOMContentLoaded', async () => {
  initLoader();
  try {
    await initUserPosts();
  } catch (error) {
    throw new Error('Unable to load user data');
  } finally {
    hideLoader();
  }
});
