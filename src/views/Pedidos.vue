<template>
  <main class="main-container">
    <h1>Gerenciar pedidos:</h1>
    <Dashboard />
  </main>
</template>

<script>
import Dashboard from '../components/Dashboard.vue'
export default {
  name: 'Pedidos',
  components: {
    Dashboard
  }
}
</script>
