<template>
  <div class="todo">
    <div class="mask"></div>
    <div class="header"><span>JTodo</span></div>
    <list-view></list-view>
    <div class="footer"><span>Written By Joey</span></div>
  </div>
</template>

<script>
import ListView from './ListView'
export default {
  components: {
    ListView
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/styles/global';
.todo{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @include center;
  .mask{
    background: black;
    opacity: 0.5;
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: px2rem(60);
    @include center;
    color: #e3170d;
  }
  .footer{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: px2rem(60);
    @include center;
    font-size: px2rem(12);
    font-weight: normal;
    color: #ffffff;
  }
}
</style>
