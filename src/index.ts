import { common } from "replugged";

import { MessageCreateEvent } from "./MessageCreateEvent";
import { FluxEvent } from "./FluxEvent";
import { Message } from "./Message";
import { LoadMessagesSuccessEvent } from "./LoadMessagesSuccessEvent";
import { SearchFinishEvent } from "./SearchFinishEvent";

const OFF_TOPIC_CHANNEL_ID = "1000955978449178684";
const CARL_BOT_ID = "235148962103951360";

function isForg(message: Message): boolean {
  if (
    message.channel_id === OFF_TOPIC_CHANNEL_ID &&
    message.author.id === CARL_BOT_ID &&
    message.content ===
      "<:forg1:1004880422980817056><:forg2:1004880423790334042><:forg3:1004880424624980111><:forg4:1004880426541793310><:forg5:1004880427552624650>"
  ) {
    return true;
  }

  if (
    message.author.id === CARL_BOT_ID &&
    message.content === "forg is eternal <:forg:1004880213081075772>"
  ) {
    return true;
  }

  return false;
}

function interceptor(e: FluxEvent): boolean {
  switch (e.type) {
    case "MESSAGE_CREATE": {
      let evt = e as MessageCreateEvent;

      return isForg(evt.message);
    }
    case "LOAD_MESSAGES_SUCCESS": {
      let evt = e as LoadMessagesSuccessEvent;
      evt.messages = evt.messages.filter((msg) => !isForg(msg));

      return false;
    }
    case "SEARCH_FINISH": {
      let evt = e as SearchFinishEvent;
      for (let i = 0; i < evt.messages.length; i++) {
        evt.messages[i] = evt.messages[i].filter((msg) => !isForg(msg));
      }
      evt.messages = evt.messages.filter((arr) => arr.length !== 0);
      return false;
    }
    default:
      return false;
  }
}

export function start(): void {
  common.fluxDispatcher.addInterceptor(interceptor as (...rest: unknown[]) => unknown);
}

export function stop(): void {
  common.fluxDispatcher._interceptors = common.fluxDispatcher._interceptors.filter(
    (cb) => cb === interceptor,
  );
}
