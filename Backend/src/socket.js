import { Server } from "socket.io";

const CHAT_ROOMS = new Set(["government", "private", "it"]);
const roomMessages = new Map();
const roomMembers = new Map();

const getRoomMessages = (room) => roomMessages.get(room) || [];

const emitRoomState = (io, room) => {
  io.to(room).emit("room-state", {
    room,
    members: roomMembers.get(room)?.size || 0,
    messages: getRoomMessages(room),
  });
};

export const initSocket = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: [process.env.CLIENT_URL, "http://localhost:5173"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    socket.on("join-room", ({ room }) => {
      if (!CHAT_ROOMS.has(room)) {
        return socket.emit(
          "chat-error",
          "This chat room is unavailable."
        );
      }

      if (socket.data.room) {
        socket.leave(socket.data.room);

        roomMembers.get(socket.data.room)?.delete(socket.id);

        emitRoomState(io, socket.data.room);
      }

      const members = roomMembers.get(room) || new Set();

      members.add(socket.id);
      roomMembers.set(room, members);

      socket.data.room = room;
      socket.data.anonymousName = `Anonymous ${socket.id
        .slice(-4)
        .toUpperCase()}`;

      socket.join(room);

      socket.emit("room-history", getRoomMessages(room));

      emitRoomState(io, room);
    });

    socket.on("send-message", ({ text }) => {
      const room = socket.data.room;

      const cleanText =
        typeof text === "string"
          ? text.trim().slice(0, 500)
          : "";

      if (!room || !cleanText) return;

      const message = {
        id: `${Date.now()}-${socket.id}`,
        sender: socket.data.anonymousName,
        text: cleanText,
        createdAt: Date.now(),
      };

      const messages = [
        ...getRoomMessages(room),
        message,
      ].slice(-5);

      roomMessages.set(room, messages);

      io.to(room).emit("new-message", message);
    });

    const leaveRoom = () => {
      const room = socket.data.room;

      if (!room) return;

      socket.leave(room);

      roomMembers.get(room)?.delete(socket.id);

      if (roomMembers.get(room)?.size === 0) {
        roomMembers.delete(room);
      }

      socket.data.room = null;

      emitRoomState(io, room);
    };

    socket.on("leave-room", leaveRoom);
    socket.on("disconnect", leaveRoom);
  });

  return io;
};