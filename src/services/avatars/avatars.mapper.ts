import { AvatarDTO } from '@/services/avatars/avatars.types';
import { Avatar } from '@/entities/avatars/types';

export function normalize(dto: AvatarDTO): Avatar {
  return {
    userId: Number(dto.user_id),
    avatarUrl: dto.url,
  };
}
