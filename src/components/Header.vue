<template>
  <nav class="select is-primary ml-6 mt-6">
    <select v-model="lang" @change="handleChange($event)">
      <option value="pt-br">Português</option>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="it">Italiano</option>
      <option value="nl">Nederlands</option>
      <option value="de">Deutsch</option>
      <option value="jp">日本語</option>
    </select>
  </nav>
</template>

<script>
  export default {
    data: function() {
      const lang = localStorage.getItem('lang') || 'pt-br'
      return {
          lang: lang
      }
    },
    methods: {
      handleChange(event){
          localStorage.setItem('lang', event.target.value)
          window.location.reload()
      }
    }
  };
</script>