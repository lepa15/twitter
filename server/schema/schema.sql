CREATE
EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE users
(
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email         TEXT UNIQUE NOT NULL,
    password_hash TEXT        NOT NULL,
    username      TEXT UNIQUE,
    avatar_url    TEXT,
    created_at    TIMESTAMPTZ      DEFAULT NOW()
);

CREATE TABLE sessions
(
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id    UUID REFERENCES users (id) ON DELETE CASCADE,
    token      VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ      DEFAULT NOW()
);

CREATE TABLE posts
(
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id    UUID REFERENCES users (id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ      DEFAULT NOW(),
    content    TEXT NOT NULL,
    image_url  TEXT
);

CREATE TABLE likes
(
    user_id    UUID REFERENCES users (id) ON DELETE CASCADE,
    post_id    UUID REFERENCES posts (id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (user_id, post_id)
);

SELECT posts.id             AS post_id,
       COUNT(likes.user_id) AS likes_count
FROM posts
         LEFT JOIN likes ON likes.post_id = posts.id
GROUP BY posts.id

SELECT (SELECT COUNT(*) FROM users)                                  AS users_count,
       (SELECT COUNT(*) FROM posts)                                  AS posts_count,
       (SELECT COUNT(*) FROM POSTS WHERE created_at >= CURRENT_DATE) AS posts_today_count;


