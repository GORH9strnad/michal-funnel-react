import { io } from "socket.io-client";
import axios from "axios";

class Server {
  static instance = null;

  constructor() {
    if (Server.instance) {
      return Server.instance;
    }
    Server.instance = this;
    const url = "http://127.0.0.1:8000/";
    this.baseUrl = url;
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

  async get(path) {
    try {
      const response = await axios.get(`${this.baseUrl}${path}`);
      return response.data;
    } catch (error) {
      console.error("GET request failed: ", error);
      throw error;
    }
  }

  async post(path, data) {
    try {
      const response = await axios.post(`${this.baseUrl}${path}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("POST request failed: ", error);
      throw error;
    }
  }

  async put(path, data) {
    try {
      const response = await axios.put(`${this.baseUrl}${path}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("PUT request failed: ", error);
      throw error;
    }
  }

  async delete(path) {
    try {
      const response = await axios.delete(`${this.baseUrl}${path}`);
      return response.data;
    } catch (error) {
      console.error("DELETE request failed: ", error);
      throw error;
    }
  }
}

export const server = new Server();
