<script lang="ts">
  import { isAuthenticated, tasks, user, user_tasks } from "../store";
  import authService from "../auth/auth-service";
  import { nanoid } from "nanoid";
  import TaskItem from "../components/TaskItem.svelte";

  let newTask;
  const addItem = () => {
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
  {#if !$isAuthenticated}
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <div class="jumbotron">
            <h1 class="display-4">Task Management made Easy!</h1>
            <p class="lead">Instructions</p>
            <ul>
              <li>Login to start &#128272;</li>
              <li>Create Tasks &#128221;</li>
              <li>Tick off completed tasks &#9989;</li>
            </ul>

            <a
                class="btn btn-primary btn-lg mr-auto ml-auto"
                href="/#"
                role="button"
                on:click={authService.loginWithPopup}>Log In</a>
          </div>
        </div>
      </div>
    </div>
  {:else}
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
  {/if}
</main>
