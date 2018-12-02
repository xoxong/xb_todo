<template>
  <div class="helper">
    <span class="left">{{unfinishedTodoLength}} items left</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="[state,filter===state?'actived':'']"
        @click="toggleFillter(state)"
      >{{state}}</span>
    </span>
    <span class="clear" @click="clearCompleted">Clear completed</span>
  </div>
</template>
<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      states: ["all", "active", "completed"]
    };
  },
  computed: {
    unfinishedTodoLength() {
      return this.todos.filter(todo => !todo.completed).length;
    }
  },
  methods: {
    toggleFillter(state) {
      this.$emit("toggle", state);
    },
    clearCompleted() {
      this.$emit("clearCompleted");
    }
  }
};
</script>
<style lang="scss" scoped>
.helper {
  z-index: 10;
  font-weight: 100;
  width: 95%;
  height: 40px;
  float: left;
  font-size: 15px;
  line-height: 40px;
  margin-left: 2.5%;
  .left,
  .clear {
    width: 150px;
    float: left;
  }
  .clear {
    float: right;
    text-align: right;
    cursor: pointer;
  }
  .tabs {
    height: 30px;
    line-height: 30px;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    float: left;
    margin-left: 30px;
    * {
      display: inline-block;
      padding: 0 10px;
      margin-right: 5px;
      cursor: pointer;
      border: 1px solid rgba(175, 47, 47, 0);
      &.actived {
        border: 1px solid rgba(175, 47, 47, 0.4);
        border-radius: 5px;
      }
      &:hover {
        border: 1px solid rgba(175, 47, 47, 0.4);
        border-radius: 5px;
      }
    }
  }
}
</style>

