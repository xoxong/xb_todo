<template>
  <section class="real-app">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下来要做什么"
      @keyup.enter="addTodo"
    >
    <div class="itemBox">
      <Item :todo="todo" v-for="todo in filterenTodos" :key="todo.id" @del="deleteTodo"/>
    </div>
    <Tabs :filter="filter" :todos="todos" @toggle="togglefilter" @clearCompleted="clearCompleted"></Tabs>
  </section>
</template>

<script>
import Item from "./item";
import Tabs from "./tabs";
import Store from "../store.js";
let id = Store.fetch("todoitem-id");
export default {
  data() {
    return {
      todos: Store.fetch("todos-vuejs"),
      filter: "all"
    };
  },
  watch: {
    todos: {
      handler: function(todos) {
        Store.save("todos-vuejs", todos);
      },
      deep: true
    },
    id: {
      handler: function(id) {
        Store.save("todoitem-id", id);
      },
      deep: true
    }
  },
  components: {
    Item,
    Tabs
  },
  computed: {
    filterenTodos() {
      if (this.filter == "all") {
        return this.todos;
      }
      const completed = this.filter === "completed";
      return this.todos.filter(todo => completed === todo.completed);
    }
  },
  methods: {
    addTodo(e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      });
      Store.save("todoitem-id", id);
      e.target.value = "";
    },
    deleteTodo(id) {
      // findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。
      // findIndex() 方法为数组中的每个元素都调用一次函数执行：当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数。如果没有符合条件的元素返回 -1
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
    },
    togglefilter(state) {
      this.filter = state;
    },
    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  }
};
</script>

<style lang="scss" scoped>
.real-app {
  width: 600px;
  overflow: scroll;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
  background-color: white;
  overflow: hidden;
  .add-input {
    width: 100%;
    height: 50px;
    border: 0px solid;
    font-size: 20px;
    padding-left: 60px;
    outline: none;
  }
  .itemBox {
    width: 600px;
    max-height: 350px;
    overflow: scroll;
  }
}
</style>


