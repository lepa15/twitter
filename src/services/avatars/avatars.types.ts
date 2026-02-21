export interface AvatarDTO {
  user_id: string;
  url: string;
}

export interface AvatarsResponse {
  pictures: AvatarDTO[];
}

export function isAvatarDTO(obj: any): obj is AvatarDTO {
  return (
    obj
        && typeof obj === 'object'
        && typeof obj.user_id === 'string'
        && typeof obj.url === 'string'
  );
}

export function isAvatarsResponse(data: any): data is AvatarsResponse {
  return data && typeof Array.isArray(data.pictures) && data.pictures.every(isAvatarDTO);
}
