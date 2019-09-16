<template>
  <ul class="list-group">
      <li
              class="list-group-item"
              v-for="index in 5">
          Server #{{ index }}
      </li>
  </ul>
</template>

<script>

</script>

<style scoped>
  ul {
    border: 12px solid blue;
  }
</style>
