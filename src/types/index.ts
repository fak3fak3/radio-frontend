// types/index.ts
type Message = {
    text: string;
    username: string;
    date: Date;
    platform: string;
    type: MessageType;
    action: MessageAction;
};

type MessageType = "chat" | "info";

type MessageAction = "stream_start" | "stream_over";

type MediaType =
    | "audio_self_hosted"
    | "audio_soundcloud"
    | "video_self_hosted"
    | "video_youtube";

type FileUploadResponse = {
    id: number;
    media_id?: number;
    path: string;
    type: string;
};

type Tag = {
    id?: number;
    key: string;
    name: string;
    color: string;
};

type Media = {
    id?: number;
    type: MediaType;
    duration: number;
    title: string;
    description: string;
    cover: Partial<FileUploadResponse>;
    source?: Partial<FileUploadResponse>;
    url?: string;
    tags?: Tag[];
};

export type {
    Message,
    MessageAction,
    MessageType,
    MediaType,
    FileUploadResponse,
    Tag,
    Media,
};
