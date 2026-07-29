import { create } from 'zustand';
import { PartySocket } from 'partysocket';

interface SocketState {
  sockets: Record<string, PartySocket>;
  getSocket: (roomId: string, chatbotId: string) => PartySocket;
}

export const useSocketStore = create<SocketState>((set, get) => ({
  sockets: {},
  getSocket: (roomId: string, chatbotId: string) => {
    const key = `${chatbotId}_${roomId}`;
    const existing = get().sockets[key];
    if (existing) return existing;

    const socket = new PartySocket({
      host: import.meta.env.PROD
        ? 'https://api.ticketdesk.ai'
        : 'http://localhost:8787',
      prefix: "ws",
      party: 'chatroom',
      room: roomId,
      query: {
        chatbot_id: chatbotId,
        session_id: localStorage.getItem(`ti_${chatbotId}_session_id`),
      },
    });

    set((state) => ({
      sockets: { ...state.sockets, [key]: socket },
    }));

    return socket;
  },
}));
