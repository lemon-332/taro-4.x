<template>
  <div>
    <span class="title">{{ counter.count }}</span>
    <nut-button class="button" @click="onAdd">ADD</nut-button>
  </div>
</template>

<script setup>
import { useStore } from '@/stores'

const counter = useStore('count')

const onAdd = () => {
  counter.count++
}
</script>

<style lang="scss">
.title {
  font-size: 32px;
}
.button {
  border: 1px solid lightgray;
  padding: 5px 10px;
}
</style>
