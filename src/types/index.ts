// types/index.ts
export type Message = {
    text: string;
    username: string;
    date: Date;
    platform: string;
};

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

export type Media = {
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
