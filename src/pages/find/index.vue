<template>
  <div class="create">
    <Counter />
    <div>{{ count.count }}</div>
  </div>
</template>

<script lang="ts" setup>
import Counter from '@/components/Counter.vue'
import { useStore } from '@/stores'

const count = useStore('count')
</script>

<style lang="scss">
.create {
  padding: 0 15px;
}
</style>
