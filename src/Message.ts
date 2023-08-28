/* eslint-disable @typescript-eslint/naming-convention */
// TODO: A lot of these are optional.

export interface Message {
  guild_id?: string;
  attachments: unknown[];
  author: {
    avatar: string;
    avatar_decoration_data: null;
    discriminator: string;
    global_name: string;
    id: string;
    public_flags: number;
    username: string;
  };
  channel_id: string;
  components: unknown[];
  content: string;
  edited_timestamp: null;
  embeds: unknown[];
  flags: number;
  id: string;
  member: {
    avatar: null;
    communication_disabled_until: null;
    deaf: boolean;
    flags: number;
    joined_at: string;
    mute: boolean;
    nick: null;
    pending: boolean;
    premium_since: null;
    roles: string[];
  };
  mention_everyone: boolean;
  mention_roles: unknown[];
  mentions: unknown[];
  nonce: string;
  pinned: boolean;
  referenced_message: null;
  timestamp: string;
  tts: boolean;
  type: number;
}
