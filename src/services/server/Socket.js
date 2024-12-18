import { io } from "socket.io-client";
import { url } from "./url";

class Socket {
  static instance = null;

  constructor() {
    if (Socket.instance) {
      return Socket.instance;
    }
    Socket.instance = this;
    this.socket = io(url, {
      transports: ["websocket"],
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
