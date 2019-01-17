<template>
 <div class="helper">
   <span class="left">{{unFinishedTodoLength}} items left</span>
   <span class="tabs">
     <span v-for="state in states" :key="state" class="state"
      :class="{actived: filter === state}" @click="toggleFilter(state)">
       {{state}}
     </span>
   </span>
   <span class="clear" @click="clearAllCompleted">clear Completed</span>
 </div>
</template>

<script>
export default {
  props: {
    filter: String,
    todos: Array
  },
  data () {
    return {
      states: ['all', 'active', 'completed']
    }
  },
  computed: {
    unFinishedTodoLength () {
      return this.todos.filter(todo => !todo.completed).length
    }
  },
  methods: {
    toggleFilter (state) {
      this.$emit('toggle', state)
    },
    clearAllCompleted () {
      this.$emit('clear')
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/styles/global';
.helper{
  font-weight: 100;
  display: flex;
  justify-content: space-between;
  padding: px2rem(5) 0;
  line-height: px2rem(30);
  background-color: #ffffff;
  font-size: px2rem(14);
  .left,.clear,.tabs{
    padding: 0 px2rem(10);
    box-sizing: border-box;
  }
  .left,.clear{
    width: px2rem(150);
  }
  .tabs{
    width: px2rem(200);
    display: flex;
    justify-content: space-around;
    .state{
      display: inline-block;
      padding: 0 px2rem(10);
      border: px2rem(1) solid rgba(175,47,47,0);
      &.actived{
        border-color: rgba(175,47,47,0.7);
        border-radius: px2rem(5);
      }
    }
  }
}
</style>
