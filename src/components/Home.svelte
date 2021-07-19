<script lang="ts">
  import { user } from "../auth/auth-store";
  import tasks from "../tasks/tasks-store"
  import { nanoid } from "nanoid";
  import TaskItem from "./TaskItem.svelte";
  import { onMount } from "svelte";
  import taskService from "../tasks/task-service"

  onMount(() => {
    taskService.get();
  })
  let newTask;
  const addItem = async () => {
    taskService.add({
      id: nanoid(),
      description: newTask,
      completed: false,
      user: $user.email
    }).then(() => taskService.get())
    newTask = "";
  }
</script>
<main>

  <div class="container" id="main-application">
    <div class="row">
      <div class="col-md-6">
        <ul class="list-group">
          {#each $tasks as item (item.id)}
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
