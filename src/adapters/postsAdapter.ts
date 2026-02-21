import type { Avatar } from '@/entities/avatars/types';
import { Message } from '@/entities/messages/types';
import { PostsData } from '@/entities/postsAdapter/types';

export default function normalizePostsAdapter(messages: Message[], avatars: Avatar[]): PostsData {
  const avatarsById: Record<number, string> = avatars.reduce((acc, avs) => {
    acc[avs.userId] = avs.avatarUrl;
    return acc;
  }, {} as Record<number, string>);

  return messages.reduce<PostsData>((acc, msg: Message) => {
    const {
      id,
      userId,
      userName,
      postMessage,
      imgMessage,
      createdAt,
      mail,
      ...rest
    } = msg;

    acc.usersById[userId] ??= {
      userId,
      userName,
      mail,
      avatar: avatarsById[userId] ?? null,
    };

    acc.postsList.push({
      id,
      userId,
      postMessage,
      imgMessage: imgMessage ?? null,
      createdAt,
      ...rest,
    });
    return acc;
  }, {
    usersById: {},
    postsList: [],
  });
}
