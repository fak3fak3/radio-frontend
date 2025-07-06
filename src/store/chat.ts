// store/chat.ts
import { createStore, createEvent, restore, forward, sample } from "effector";
import { createEffect } from "effector";
import { Message } from "../types";
import { create } from "domain";
import { on } from "events";
import { platform } from "os";
import { API_WS_URL } from "../api";

let socket: WebSocket;

export const messageReceived = createEvent<Message>();
export const resetMessages = createEvent();
export const sendMessage = createEvent<string>();

export const $messages = createStore<Message[]>([])
    .on(messageReceived, (state, msg) =>
        msg.type === "chat" ? [...state, msg] : [...state]
    )
    .reset(resetMessages);

export const $username = createStore<string | null>(null);
export const setUsername = createEvent<string>();

const connectWebSocketFx = createEffect(() => {
    socket = new WebSocket(API_WS_URL + "/ws/chat");

    socket.onmessage = (event) => {
        try {
            const msg: Message = JSON.parse(event.data);
            messageReceived(msg);
        } catch (e) {
            console.error("Invalid message", e);
        }
    };

    socket.onerror = (err) => console.error("WebSocket error:", err);
});

const sendMessageFx = createEffect((message: string) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(
            JSON.stringify({
                text: message,
                platform: "web",
                date: new Date(),
                username: $username.getState(),
                type: "chat",
            })
        );
    } else {
        console.error("WebSocket is not open. Unable to send message.");
    }
});

sample({
    clock: sendMessage,
    target: sendMessageFx,
});

sample({
    clock: setUsername,
    target: $username,
});

connectWebSocketFx(); // init on load
