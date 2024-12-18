import { io } from "socket.io-client";
import { url } from "./url";

class Socket {
  static instance = null;

  constructor() {
    if (Socket.instance) {
      return Socket.instance;
    }
    Socket.instance = this;
    this.socket = io("wss://funnel-backend-cc55b5f5c548.herokuapp.com", {
      transports: ["websocket"],
      withCredentials: true,
    });
  }

  async emit(event, data) {
    this.socket.emit(event, data);
  }

  async on(event, callback) {
    this.socket.on(event, callback);
  }

  off(event, callback) {
    if (callback) {
      this.socket.off(event, callback);
    } else {
      this.socket.off(event);
    }
  }
}

export const socket = new Socket();
