import axiosInstance from "../service/axios";
import type { Task } from "./model";
import taskStore from "./tasks-store"

class TaskService {
  get = async (): Promise<Task[]> => {
    const tasks: Task[] = await axiosInstance.get("/rest/tasks").then(res => res.data);
    taskStore.set(tasks);
    return tasks;
  }

  add = async (task: Task): Promise<Task[]> => {
    return axiosInstance.post("/rest/tasks", [task]);
  }

  update = async (task: Partial<Task>): Promise<Task[]> => {
    return axiosInstance.patch(`/rest/tasks/${task._id}/`, task);
  }
}

export default new TaskService();
