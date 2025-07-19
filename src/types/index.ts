export type Device = 'pc' | 'ps' | 'switch' | 'xbox';

export type Member = {
  id: string;
  name: string;
  avatarUrl: string;
  device: Device;
  isHost?: boolean;
};

export type Party = {
  id: string;
  gameTitle: string;
  hostId: string;
  type: 'casual' | 'rank' | 'other';
  startAt: string;
  requireFull: boolean;
  maxMembers: number;
  members: Member[];
  acceptedDevices?: Device[];
  rankRange?: string[];
  vcTool: string;
  message: string;
};