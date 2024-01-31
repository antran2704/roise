<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script setup>
    useHead({
      title: 'Fiama',
      meta: [
        { name: 'description', content: 'My amazing site.' }
      ],
      script: [ { src:"/js/plugins.js"},{ src:"/js/main.js"} ]
    })
</script>