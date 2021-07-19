import axiosInstance from "../service/axios";
import type { Task } from "./model";
import taskStore from "./tasks-store"

class TaskService {
  get = async (): Promise<Task[]> => {
    const tasks: Task[] = await axiosInstance.get("/api/secured/tasks").then(res => res.data);
    taskStore.set(tasks);
    return tasks;
  }

  add = async (task: Task): Promise<Task[]> => {
    return axiosInstance.post("/api/secured/tasks", [task]);
  }

  update = async (task: Partial<Task>): Promise<Task[]> => {
    return axiosInstance.patch(`/api/secured/tasks/${task.id}/`, task);
  }
}

export default new TaskService();
