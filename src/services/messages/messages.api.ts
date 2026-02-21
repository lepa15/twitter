import type { MessagesResponse } from '@/services/messages/messages.types';
import { Message } from '@/entities/messages/types';
import { isMessagesResponse } from '@/services/messages/messages.types';
import { normalize } from '@/services/messages/messages.mapper';

export default async function getMessages(): Promise<Message[]> {
  const response = await fetch('https://burtovoy.github.io/messages.json');
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json() as MessagesResponse;
  if (!isMessagesResponse(data)) {
    throw new Error('Invalid message response');
  }

  return data.messages.map(normalize);
}
