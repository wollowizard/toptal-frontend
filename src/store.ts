import { derived, writable, Writable } from "svelte/store";

export const isAuthenticated: Writable<boolean> = writable(false);
export const token: Writable<string | null> = writable(null);
export const user: Writable<{ email?: string }> = writable({});
export const popupOpen: Writable<boolean> = writable(false);
export const error: Writable<any> = writable();

export const tasks = writable([]);

export const user_tasks = derived([tasks, user], ([$tasks, $user]) => {
  let logged_in_user_tasks = [];

  if ($user && $user.email) {
    logged_in_user_tasks = $tasks.filter((task) => task.user === $user.email);
  }

  return logged_in_user_tasks;
});
