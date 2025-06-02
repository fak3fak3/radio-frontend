import { createEvent, createStore } from "effector";

const $isAnySelectOpen = createStore(0);
const toggleSelect = createEvent<number>();

$isAnySelectOpen.on(toggleSelect, (store, inc) => store + inc);

export { $isAnySelectOpen, toggleSelect };
