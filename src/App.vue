<template>
  <div id="app">
    <router-view/>
    <PrototypeManager :managerProps="managerProps"/>
  </div>
</template>

<script>
import PrototypeManager from './components/PrototypeManager'

export default {
  components: {
    PrototypeManager
  },
  name: 'app',
  data () {
    return {
      toggleManager: false,
      managerProps: {
        name: 'prototypeName',
        description: 'prototypeDescription',
        author: 'prototypeAuthor',
        website: 'authorWebsite',
        date: 'prototypeDate',
        iterations: [
          {
            name: 'initial',
            description: 'Start-off designs',
            versions: [
              {
                name: 'home',
                description: 'First prototype'
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
</style>
