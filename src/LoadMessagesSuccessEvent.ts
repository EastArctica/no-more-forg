import { FluxEvent } from "./FluxEvent";
import { Message } from "./Message";

export interface LoadMessagesSuccessEvent extends FluxEvent {
  type: "LOAD_MESSAGES_SUCCESS";
  channelId: string;
  messages: Message[];
  isBefore: boolean;
  isAfter: boolean;
  hasMoreBefore: boolean;
  hasMoreAfter: boolean;
  limit: number;
  isStale: boolean;
  truncate: boolean;
}
