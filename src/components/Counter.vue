<template>
  <div>
    <span class="title">{{ counter.count }}</span>
    <div class="button" @tap="onAdd">ADD</div>
  </div>
</template>

<script>
import { useCounterStore } from '../stores/counter'

export default {
  setup() {
    const counter = useCounterStore()

    const onAdd = () => {
      counter.count++

      // with autocompletion ✨
      // counter.$patch({count: counter.count + 1})

      // or using an action instead
      // counter.increment()
    }

    return {
      counter,
      onAdd
    }
  }
}
</script>

<style>
.title {
  font-size: 32px;
}
.button {
  border: 1px solid lightgray;
  padding: 5px 10px;
}
</style>
