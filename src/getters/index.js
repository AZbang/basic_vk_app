export function getImage(url, size=500) {
  return `https://image.tmdb.org/t/p/w${size}${url}`;
}
