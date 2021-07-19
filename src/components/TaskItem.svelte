<script>
  import taskService from "../tasks/task-service"

  export let task = {};

  let isChecked;

  function taskDone() {
    taskService.update({id: task.id, completed: !task.completed}).then(() => taskService.get())
    //tasks.toggleCompleted(task.id);
  }
</script>

<style>
  .completed {
    color: red;
    text-decoration: line-through;
  }
</style>

<main>
  <li class="list-group-item">
    <input
        type="checkbox"
        class="form-check-input"
        id="exampleCheck1"
        bind:checked={isChecked}
        on:change={(e) => taskDone(e)}/>
    <span class:completed={task.completed}>{task.description}</span>
  </li>
</main>
