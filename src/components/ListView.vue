<template>
  <section class="real-app">
    <input type="text" class="add-input" autofocus placeholder="接下去要做什么？"
      @keyup.enter="addTodo"/>
    <item></item>
  </section>
</template>

<script>
import Item from './item'
export default {
  components: {
    Item
  },
  methods: {
    addTodo () {

    }
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/styles/global';
.real-app{
  position: absolute;
  top: px2rem(60);
  bottom: px2rem(60);
  background: red;
  width:600px;
  box-shadow: 0 0 px2rem(4) #666;
  .add-input{
    position: relative;
    margin: 0;
    width: 100%;
    font-size: px2rem(24);
    outline: none;
    box-sizing: border-box;
    padding: px2rem(16) px2rem(16) px2rem(16) px2rem(36);
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0,0,0,.03);
  }
}
</style>
