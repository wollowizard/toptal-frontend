export interface Task {
  _id?: string,
  description: string,
  completed: boolean,
  createdBy?: { sub: string, email?: string, name?: string }
}
