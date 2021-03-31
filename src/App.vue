<template>
  <div id="app">
    <app-header></app-header>
    <app-posts></app-posts>
  </div>
</template>

<script>
import Header from './components/Header'
import Posts from './components/Posts'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-posts': Posts
  }
}
</script>
