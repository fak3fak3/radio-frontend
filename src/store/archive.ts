import { createEffect, createEvent, createStore, sample } from "effector";
import { fetchMedias } from "../api/archive";
import { Media } from "../types";

const $medias = createStore<Media[]>([]);
const getMedias = createEvent();
const getMediasFx = createEffect(fetchMedias);

sample({
    clock: getMedias,
    target: getMediasFx,
});

sample({
    clock: getMediasFx.doneData,
    fn: (resp) => resp.media,
    target: $medias,
});

export { $medias, getMedias };
