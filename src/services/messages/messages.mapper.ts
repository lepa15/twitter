import type { MessageDTO } from '@/services/messages/messages.types';
import type { Message } from '@/entities/messages/types';
import convertToISO from '@/utility/convert_to_ISO';

export function normalize(dto: MessageDTO): Message {
  return {
    id: Number(dto.id),
    userId: Number(dto.user_id),
    userName: dto.name,
    postMessage: dto.message,
    imgMessage: dto.img_message ? dto.img_message : null,
    createdAt: convertToISO(dto.date),
    mail: dto.mail,
    quantityReposts: dto.quantityReposts,
    quantityLike: dto.quantityLike,
    quantityShare: dto.quantityShare,
  };
}
