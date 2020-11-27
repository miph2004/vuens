<template>
  <Page>
    <ActionBar>
      <Label text="Gestures Todolist" />
    </ActionBar>
    <ScrollView>
      <FlexboxLayout flexDirection="column" @swipe="toggleInput">
        <TextField
          v-show="isOpen"
          hint="Add new to do"
          v-model="inputContent"
          backgroundColor="lightyellow"
          padding="10"
          textDecoration="none"
          width="200"
          height="50"
          fontSize="16"
        />
        <Label
          v-for="todo in filteredTodos"
          :key="todo.id"
          :text="todo.title"
          :backgroundColor="!todo.completed ? 'yellow' : 'green'"
          :textDecoration="!todo.completed ? 'none' : 'line-through'"
          textAlignment="center"
          height="50"
          borderWidth="1"
          borderColor="black"
          marginBottom="5"
          fontSize="16"
          @swipe="slideOut($event, todo)"
        ></Label>
        >
      </FlexboxLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: "HomePage",
  data() {
    return {
      inputContent: '',
      isOpen: false,
    };
  },
  computed: {
     ...mapGetters(["filteredTodos"])
  },
  methods: {
    ...mapMutations(["addTodo","toggleTodo", "destroyTodo"]),

    slideOut(event, todo) {
      if (todo.completed) {
        switch(event.direction) {
          case 1: this.toggleTodo(todo); return; //Swipe right
          case 2: //Swipe left
          let elm = event.object;
          elm.animate({
            translate: {
              x: -500,
              y: 0,
            },
            duration: 1000,
          });

          setTimeout(() => {
            this.destroyTodo(todo);
          }, 1000);
          return;
        }
      } else {
        switch(event.direction) {
          case 1: //Swipe right
            let elm = event.object;
            elm.animate({
              translate: {
                x: 500,
                y: 0,
              },
              duration: 1000,
            });
            setTimeout(() => {
              this.destroyTodo(todo);
            }, 1000);
            return;
          case 2: this.toggleTodo(todo); return; //Swipe left
        }
      }
    },
    toggleInput(event) {
      //Swipe Down
      if (event.direction === 8) {
        this.isOpen = true;
      }
      //Swipe Up
      if (event.direction === 4) {
        if (this.inputContent !== "") {
          this.addTodo(this.inputContent);
          this.inputContent = "";
        }
        this.isOpen = false;
      }
    },
  },
};
</script>