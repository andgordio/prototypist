<template>
  <div>
    <div class="fixed h-16 w-screen pin-t pin-l bg-grey z-10 flex items-center px-6">
      <button @click="doShowSidebar = !doShowSidebar"><i class="ion-md-menu text-2xl text-white"></i></button>
    </div>
    <div class="flex fixed h-screen w-screen pin-t pin-l">
      <transition name="sidebar">
        <div v-if="doShowSidebar" class="w-64 bg-grey-light h-screen">
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      doShowSidebar: true
    }
  }
}
</script>

<style>
.sidebar-enter-active, .sidebar-leave-active {
  transition: all .5s;
}
.sidebar-enter, .sidebar-leave-to {
  transform: translateX(-256px);
}
</style>
