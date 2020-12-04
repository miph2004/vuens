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
    register: {
      fullName: "",
      email: "",
      password: "",
    },
  },
  getters: {
    filteredTodos(state) {
      return state.todos;
    },
    registerUser(state) {
      return state.register;
    },
  },
  mutations: {
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
    updateRegisterUser(state, payload) {
      switch (payload.type) {
        case "FULLNAME":
          state.register.fullName = payload.value;
          return;
        case "EMAIL":
          state.register.email = payload.value;
          return;
        case "PASSWORD":
          state.register.password = payload.value;
          return;
      }
    },
  },
};
