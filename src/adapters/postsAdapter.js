import convertToISO from '@/convert_to_ISO';

export default function normalizePostsAdapter(messages, avatars) {
  const avatarsById = avatars.reduce((acc, avs) => {
    acc[avs.user_id] = avs.url;
    return acc;
  }, {});

  return messages.reduce((acc, msg) => {
    const {
      id,
      user_id: userId,
      name,
      message,
      img_message: imgMessage,
      date,
      mail,
      ...rest
    } = msg;

    acc.usersById[userId] ??= {
      userId,
      userName: name,
      mail,
      avatar: avatarsById[userId] ?? null,
    };

    acc.postsList.push({
      id,
      userId,
      postMessage: message,
      imgMessage,
      createdAt: convertToISO(date),
      ...rest,
    });
    return acc;
  }, {
    usersById: {},
    postsList: [],
  });
}
