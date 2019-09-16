<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
  export default {
    props: {
      myName: {
        type: String
      }
    },
    methods: {
      switchName() {
        return this.myName.split("").reverse().join("");
      },
      resetName() {
        this.myName = 'max';
        this.$emit('nameWasReset', this.myName);
        // THis allows me to emit a custom event, inside specificy name of event
        // We can pass data in the  second argument
        // In the parent component (user vue file we can listen for the event)
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
