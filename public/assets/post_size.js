function postSize(post) {
    const urlRegex = /\b(?:https?:\/\/|www\.|t\.me\/)?(?:[\w-]+\.)+[a-z]{2,}(?:\/[^\s.,!?;:]*)?(?:\?[^\s.,!?;:]*)?(?:#[^\s.,!?;:]*)?/gi;
    const matches = post.match(urlRegex) || [];
    const urlsLength = matches.reduce((sum, url) => sum + url.length, 0);

    return post.length - urlsLength + matches.length;
}

export default postSize;
