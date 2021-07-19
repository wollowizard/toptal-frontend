import { writable, Writable } from "svelte/store";

export const isAuthenticated: Writable<boolean> = writable(false);
export const user: Writable<{ email?: string }> = writable({});
export const popupOpen: Writable<boolean> = writable(false);
export const error: Writable<any> = writable();

