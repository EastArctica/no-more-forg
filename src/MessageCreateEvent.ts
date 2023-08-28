import { FluxEvent } from "./FluxEvent";
import { Message } from "./Message";

export interface MessageCreateEvent extends FluxEvent {
  type: "MESSAGE_CREATE";
  guildId?: string;
  channelId: string;
  message: Message;
  optimistic: boolean;
  isPushNotification: boolean;
}
