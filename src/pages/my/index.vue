<template>
  <div class="my">
    <Counter />
  </div>
</template>

<script>
import './index.scss'
import Counter from '../../components/Counter.vue'

export default {
  name: 'Index',
  components: {
    Counter
  }
}
</script>
