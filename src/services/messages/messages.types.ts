export interface MessageDTO {
  id: string;
  user_id: string;
  name: string;
  mail: string;
  message: string;
  img_message?: string;
  date: string;
  quantityReposts: string;
  quantityLike: string;
  quantityShare: string;
}

export interface MessagesResponse {
  messages: MessageDTO[];
}

export function isMessageDTO(obj: any): obj is MessageDTO {
  return (
    obj
        && typeof obj === 'object'
        && typeof obj.id === 'string'
        && typeof obj.user_id === 'string'
        && typeof obj.name === 'string'
        && typeof obj.mail === 'string'
        && typeof obj.message === 'string'
        && typeof obj.date === 'string'
        && typeof obj.quantityReposts === 'string'
        && typeof obj.quantityLike === 'string'
        && typeof obj.quantityShare === 'string'
        && (obj.img_message === undefined || typeof obj.img_message === 'string')
  );
}

export function isMessagesResponse(obj: any): obj is MessagesResponse {
  return obj && Array.isArray(obj.messages) && obj.messages.every(isMessageDTO);
}
