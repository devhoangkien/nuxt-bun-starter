<script lang="ts" setup>
const { austin } = useAppConfig()
useHead({
  title: austin.name,
  titleTemplate: `%s - ${austin.name}`,
})
</script>

<template>
  <Body
    class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950"
  >
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>

