<template>
 
    <NuxtLayout >
      <div v-show="show">
        Loading...
    </div>
      <div v-show="!show">
        <NuxtPage/>
      </div>
    </NuxtLayout>
</template>

<script setup>
  const nuxtApp = useNuxtApp();
  const show = ref(true);

  addRouteMiddleware('global-loader', () => {
      show.value = true
  }, {
      global: true
  })

  nuxtApp.hook('page:finish', () => { show.value = false; })
</script>

