<template>
  <div class="project-preview">
    <h1>{{convertedId()}}</h1>
    <MoneyMonth v-if="displayMoneyMonth()"/>

  </div>
</template>

<script>
import MoneyMonth from '@/components/MoneyMonth.vue'
export default {
  data () {
    return {

      id: this.$route.params.id

    }
  },
  components: {
    MoneyMonth
  },
  methods: {
    convertedId () {
      return this.id.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase() })
    },
    displayMoneyMonth () {
      if (this.id === 'MoneyMonth') {
        return true
      } else {
        return false
      }
    }
  }

}
</script>

<style>

</style>
