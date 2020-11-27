export default {
  state: {
    todos: [
      {
        id: 0,
        title: "Todo one",
        completed: false,
      },
      {
        id: 1,
        title: "Todo two",
        completed: false,
      },
      {
        id: 2,
        title: "Todo three",
        completed: false,
      },
    ],
    visibilityFilters: "SHOW_ALL",
  },
  getters: {
    filteredTodos(state) {
      switch (state.visibilityFilters) {
        case "SHOW_ALL":
          return state.todos;
        case "SHOW_ACTIVE":
          return state.todos.filter((t) => !t.completed);
        case "SHOW_COMPLETED":
          return state.todos.filter((t) => t.completed);
        default:
          throw new Error("Unknown filter: " + state.visibilityFilters);
      }
    },
  },
  mutations: {
    test() {
      console.log("Testing")
    },
    addTodo(state, title) {
      const newTodo = {
        id: Date.now(),
        title,
        completed: false,
      };

      state.todos = [...state.todos, newTodo];
    },

    toggleTodo(state, payload) {
      state.todos = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo
      );
    },

    destroyTodo(state, payload) {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== payload.id;
      });
    },

    clearCompleted(state) {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },

    toggleAllTodo(state) {
      for (let todo of state.todos) {
        if (!todo.completed) {
          return (state.todos = state.todos.map((todo) => ({
            ...todo,
            completed: true,
          })));
        }
      }
      return (state.todos = state.todos.map((todo) => ({
        ...todo,
        completed: false,
      })));
    },

    mutateFilter(state, payload) {
      switch (payload.filter) {
        case "SHOW_ALL":
          return (state.visibilityFilters = "SHOW_ALL");
        case "SHOW_ACTIVE":
          return (state.visibilityFilters = "SHOW_ACTIVE");
        case "SHOW_COMPLETED":
          return (state.visibilityFilters = "SHOW_COMPLETED");

        default:
          return (state.visibilityFilters = "SHOW_ALL");
      }
    }
  }
}
