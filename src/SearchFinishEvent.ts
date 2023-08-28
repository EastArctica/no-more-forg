import { FluxEvent } from "./FluxEvent";
import { Message } from "./Message";

export interface SearchFinishEvent extends FluxEvent {
  type: "SEARCH_FINISH";
  searchId: string;
  guildId: string;
  analyticsId: string;
  totalResults: number;
  messages: Message[][];
  threads: unknown[];
  members: unknown[];
  hasError: boolean;
  doingHistoricalIndex: boolean;
}
