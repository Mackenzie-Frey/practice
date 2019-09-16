<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change My Name</button>
        <p>Name is {{ name }}</p>
        <p>Age is {{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
              <!-- The colon aka the v-bind shortcut :name passes data from the parent to the child and makes the name dynamic rather than hard coded -->
              <!-- nameWasReset event refers to data passed through the event and passing through the updated name -->
                <app-user-detail
                    :myName="name"
                    @nameWasReset="name = $event"
                    :resetFn="resetName"
                    :userAge="age"></app-user-detail>

            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                  :userAge="age"
                  @ageWasEdited="age = $event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
      data: function() {
        return {
          name: 'Mackenzie',
          age: 99
        };
      },
      methods: {
        changeName() {
          this.name = 'Anna';
        },
        resetName() {
          this.name = 'Max'
        }
      },
      components: {
          appUserDetail: UserDetail,
          appUserEdit: UserEdit
      }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
