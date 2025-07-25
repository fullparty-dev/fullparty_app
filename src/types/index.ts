export type Device = 'PC' | 'PS' | 'Switch' | 'Xbox';

export type Member = {
  id: string;
  name: string;
  avatarUrl: string;
  device: Device;
  isHost?: boolean;
  ingameId?: string;
  vcId?: string;
};

export type Party = {
  id: string;
  gameTitle: string;
  hostId: string;
  type: 'casual' | 'rank' | 'other';
  startAt: string;
  requireFull: boolean;
  maxMembers: number;
  memberIds: string[];
  acceptedDevices?: Device[];
  rankRange?: string[];
  vcTool: string;
  message: string;
  playStyleTag?: 'キルムーブ' | 'アンチムーブ' | 'ハイド' | 'エンジョイ';
  ageTag?: '10代歓迎' | '20代歓迎' | '30代以上歓迎' | '誰でも歓迎';
};

export type User = {
  id: string;
  name: string;
  avatar: string;
  banner: string;
  ingameId: {
    [key: string]: string;
  };
  vcId: {
    [key: string]: string;
  };
  clipUrl: string;
  devices: Device[];
};

export type DisplayItem =
  | { type: 'member'; data: User; isHost: boolean }
  | { type: 'empty'; key: string };