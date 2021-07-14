<script lang="ts">
  import { tasks, user, user_tasks } from "../store";
  import { nanoid } from "nanoid";
  import TaskItem from "./TaskItem.svelte";
  import axiosInstance from "../service/axios";

  let newTask;
  const addItem = async () => {
    const res = await axiosInstance.get("http://ip-api.com/json");
    console.log(res.data)
    let newTaskObject = {
      id: nanoid(),
      description: newTask,
      completed: false,
      user: $user.email
    };
    console.log(newTaskObject);
    let updatedTasks = [...$tasks, newTaskObject];
    tasks.set(updatedTasks);
    newTask = "";
  }
</script>
<main>

  <div class="container" id="main-application">
    <div class="row">
      <div class="col-md-6">
        <ul class="list-group">
          {#each $user_tasks as item (item.id)}
            <TaskItem task={item}/>
          {/each}
        </ul>
      </div>

      <div class="col-md-6">
        <input
            class="form-control"
            bind:value={newTask}
            placeholder="Enter New Task"/>
        <br/>
        <button type="button" class="btn btn-primary" on:click={addItem}>
          Add Task
        </button>
      </div>
    </div>
  </div>
</main>
