export default async function getMessagesInfo() {
  const response = await fetch('https://burtovoy.github.io/messages.json');
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const { messages } = await response.json();

  return messages;
}
