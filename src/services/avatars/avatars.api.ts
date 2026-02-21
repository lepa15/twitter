import type { AvatarsResponse } from '@/services/avatars/avatars.types';
import type { Avatar } from '@/entities/avatars/types';
import { isAvatarsResponse } from '@/services/avatars/avatars.types';
import { normalize } from '@/services/avatars/avatars.mapper';

export default async function getAvatars(): Promise<Avatar[]> {
  const response = await fetch('https://burtovoy.github.io/pictures.json');
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json() as AvatarsResponse;
  if (!isAvatarsResponse(data)) {
    throw new Error('Invalid avatar response');
  }

  return data.pictures.map(normalize);
}
