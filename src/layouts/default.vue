<template>
  <div>
    <Header />
    <main id="main_content">
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>