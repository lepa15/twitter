import convertToISO from '@/convert_to_ISO';

export default function normalizePostsAdapter(messages, avatars) {
  const usersById = {};
  const postsList = [];

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

    postsList.push({
      id,
      userId,
      text,
      image: image ?? null,
      createdAt: convertToISO(createdAt),
      ...rest,
    });
  });

  avatars.forEach((avatar) => {
    const {
      user_id: userId,
      url: avatarUrl,
    } = avatar;

    usersById[userId] ??= { userId };
    usersById[userId].avatarUrl ??= avatarUrl ?? 'default.png';
  });

  return {
    usersById,
    postsList,
  };
}
