<template>
  <div :class="['todo-item',todo.completed?'completed':'']">
    <input type="checkbox" class="toggle" v-model="todo.completed">
    <label>{{todo.content}}</label>
    <button class="destory" @click="deleteTodo"></button>
  </div>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo: function() {
      this.$emit("del", this.todo.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.todo-item {
  width: 95%;
  height: 50px;
  margin-left: 2.5%;
  border-bottom: 1px solid rgba($color: gray, $alpha: 0.3);
  font-size: 20px;
  float: left;
  &:hover {
    .destory::after {
      content: "x";
    }
  }

  label {
    //   white-space 属性设置如何处理元素内的空白。pre-line	合并空白符序列，但是保留换行符。
    white-space: pre-line;
    //word-break 属性规定自动换行的处理方法。break-all
    word-break: break-all;
    padding: 0px 60px 0px 15px;
    margin-left: 0px;
    line-height: 50px;
    display: block;
    transition: color 0.4s;
    float: left;
  }
  &.completed {
    label {
      color: #999999;
      text-decoration: line-through;
    }
  }
  .toggle {
    text-align: center;
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-left: 0px;
    border: none;
    appearance: none;
    outline: none;
    float: left;
    overflow: hidden;
    background-size: 100%;
    &:after {
      content: url("../assets/false.png");
    }
    &:checked:after {
      content: url("../assets/true.png");
    }
  }
  .destory {
    float: right;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border: 0px solid;
    margin-top: 5px;
    font-size: 30px;
    color: #cc9a9a;
    transition: all 0.2s ease-out;
    outline: none;
    cursor: pointer;
    background-color: transparent;
  }
}
</style>

