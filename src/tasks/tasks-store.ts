import { writable } from "svelte/store";
import type { Task } from "./model";

const tasks = writable<Task[]>([]);

export default {
  ...tasks,
  add: (task: Task) => tasks.update(old => [task, ...old]),
  setCompleted: (id: string, isCompleted: boolean) =>
    tasks.update(old => old.map(e => e.id === id ? {...e, completed: isCompleted} : e)),
  toggleCompleted: (id: string) => tasks.update(old => old.map(e => e.id === id ? {
    ...e,
    completed: !e.completed
  } : e))
};
