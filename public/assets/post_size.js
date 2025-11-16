export default function postSize(post) {
    const length = Array.from(post).length;
    const urlRegex = /\b(?:https?:\/\/|www\.|t\.me\/)?(?:[\w-]+\.)+[a-z]{2,}(?:\/[^\s.,!?;:]*)?(?:\?[^\s.,!?;:]*)?(?:#[^\s.,!?;:]*)?/gi;
    const matches = post.match(urlRegex) || [];
    const urlsLength = matches.reduce((sum, url) => sum + url.length, 0);

    return length - urlsLength + matches.length;
}

