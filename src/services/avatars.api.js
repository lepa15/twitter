export default async function getAvatars() {
  const response = await fetch('https://burtovoy.github.io/pictures.json');
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const { pictures } = await response.json();
  return pictures;
}
