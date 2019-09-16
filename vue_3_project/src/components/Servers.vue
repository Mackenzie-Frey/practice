<template>
  <div class="row">
      <div class="col-xs-12 col-sm-6">
          <app-server-details></app-server-details>
      </div>
      <div class="col-xs-12 col-sm-6">
          <p>Server Details are currently not updated</p>
      </div>
  </div>
</template>

<script>
  import ServerDetails from './ServerDetails.vue';

  export default {
    components: {
      'app-server-details': ServerDetails
    }
  }

</script>

<!-- Styles are applied globally automatically, but can be scoped -->
<style scoped>
  div {
    border: 1px solid red;
  }
</style>
