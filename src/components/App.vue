<template>
  <div id="app">
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './common/AppHeader';

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: #F6F7F7;;
  }
</style>
