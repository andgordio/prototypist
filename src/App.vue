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
        // todo: allow to define FAB style — fab: 'white' // options: 'white', 'transparent', 'transparent-dark'
        date: 'prototypeDate',
        iterations: [
          {
            code: 'A',
            name: 'Start-off designs',
            versions: [
              {
                code: '1',
                name: 'First prototype'
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
