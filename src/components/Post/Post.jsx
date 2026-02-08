import convertTime from '@/convert_time';
import { useEffect, useState, memo } from 'react';

const Post = memo(function Post({
  user,
  post,
}) {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    function updateTime() {
      setTimeAgo(convertTime(new Date(post.createdAt), new Date()));
    }

    updateTime();
    const ONE_MINUTE = 60 * 1000;
    const id = setInterval(updateTime, ONE_MINUTE);
    return (() => clearInterval(id));
  }, [post.createdAt]);

  return (
    <li className="messages-item user">
      <div className="user-inner">
        <div className="user-photo">
          <img src={user.avatar} alt="user photo"/>
        </div>
        <div className="user-info">
          <div className="user-header name">
            <div className="name-wrap">
              <h3 className="name-title">{user.userName}</h3>
              <p className="name-nickname">{user.mail}</p>
            </div>
            <div className="name-last-seen">
              <p className="name-last-seen-desc">{timeAgo}</p>
            </div>
          </div>
          <div className="user-body">
            <p className="user-body-desc">{post.postMessage}</p>
            <div className="user-body-img">
              {post.image
                && (<img src={post.imgMessage} alt="message photo"/>)}
            </div>
          </div>
          <div className="user-footer">
            <div className="user-footer-btn">
              <button className="repost-btn">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.6875 2.8125L1.40625 6.5625M1.40625 6.5625L4.6875 10.3125M1.40625 6.5625H8.4375C12.1875 6.5625 14.0625 8.4375 14.0625 12.1875"
                    stroke="#ABACB1" strokeLinecap="round"
                    strokeLinejoin="round"/>
                </svg>
              </button>
              <p className="repost-btn-desc">{post.quantityReposts}</p>
            </div>
            <div className="user-footer-btn">
              <button className="like-btn">
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.2887 6.38067C-0.117554 4.50567 0.351196 1.69317 2.69495 0.755669C5.0387 -0.181831 6.44495 1.69317 6.9137 2.63067C7.38245 1.69317 9.25745 -0.181831 11.6012 0.755669C13.9449 1.69317 13.9449 4.50567 12.5387 6.38067C11.1324 8.25567 6.9137 12.0057 6.9137 12.0057C6.9137 12.0057 2.69495 8.25567 1.2887 6.38067Z"
                    stroke="#ABACB1" strokeLinecap="round"
                    strokeLinejoin="round"/>
                </svg>
              </button>
              <p className="like-btn-desc">{post.quantityLike}</p>
            </div>
            <div className="user-footer-btn">
              <button className="share-btn">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.75 8.9375V12.6875H0.5V8.9375M6.125 0.5V9.875M6.125 0.5L2.375 4.25M6.125 0.5L9.875 4.25"
                    stroke="#ABACB1" strokeLinecap="round"
                    strokeLinejoin="round"/>
                </svg>
              </button>
              <p className="share-btn-desc">{post.quantityShare}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
});

export default Post;
