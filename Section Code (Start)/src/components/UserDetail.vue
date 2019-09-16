<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
  import { eventBus } from '../main';

  export default {
    props: {
      myName: {
        type: String
      },
      resetFn: Function,
      userAge: Number
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
    },
    created() {
      eventBus.$on('ageWasEdited', (age) => {
        this.userAge = age;
      });
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
