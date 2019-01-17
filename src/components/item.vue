<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
    <input type="checkbox" class="toggle" v-model="todo.completed"/>
    <label for="">{{todo.content}}</label>
    <button class="destroy" @click="deleteTodo"></button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    todo: Object
  },
  methods: {
    deleteTodo () {
      this.$emit('del', this.todo.id)
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/styles/global';
.todo-item{
  position: relative;
  background: #fff;
  font-size: px2rem(24);
  border-bottom: px2rem(1) solid rgba(0, 0, 0, 0.6);
  &:hover{
    .destroy:after{
      content: 'x'
    }
  }
  .toggle{
    text-align: center;
    width: px2rem(40);
    height: px2rem(40);
    position: absolute;
    top: px2rem(10);
    bottom: 0;
    border: none;
    outline: none;
    appearance: none;
    &:after{
      content: url('../assets/img/round.svg');
    }
    &:checked:after{
      content: url('../assets/img/done.svg');
    }
  }
  label{
    white-space: pre-line;
    word-break: break-all;
    padding: px2rem(15) px2rem(60) px2rem(15) px2rem(15);
    margin-left: px2rem(45);
  }
  &.completed{
    label{
      color: #d9d9d9;
      text-decoration: line-through;
    }
  }
  .destroy{
    position: absolute;
    top: 0;
    right: px2rem(10);
    width: px2rem(40);
    height: px2rem(40);
    margin: auto 0;
    margin-bottom: px2rem(11);
    background-color: transparent;
    outline: none;
    border: none;
  }
}
</style>
