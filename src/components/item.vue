<template>
  <div :class="['todo-item']">
    <input type="checkbox" class="toggle"/>
    <label for="">123</label>
    <button class="destroy" @click="deleteTodo"></button>
  </div>
</template>

<script>
export default {
  methods: {
    detedeTodo () {

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
    width: px2rem(50);
    height: px2rem(30);
    border-radius: 50%;
    position: absolute;
  }
  label{
    white-space: pre-line;
    word-break: break-all;
    padding: px2rem(15) px2rem(60) px2rem(15) px2rem(15);
    margin-left: px2rem(45);
    line-height: 1.2;
  }
  .destroy{
    position: absolute;
    top: 0;
    right: px2rem(10);
    width: px2rem(40);
    height: px2rem(40);
    margin: auto 0;
    font-size: px2rem(30);
    margin-bottom: px2rem(11);
    background-color: transparent;
    outline: none;
    border: none;
  }
}
</style>
