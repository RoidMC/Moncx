<script setup lang="ts">
import { ElIcon } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
</script>

<template>
  <div class="display-logo" flex="~" gap-2 items-center>
    <img class="logo" src="/logo/logo-dark.png"/>
    <el-icon><Plus /></el-icon>
    <NuxtLogo class="logo" />
  </div>
  <h2>
    <a target="_blank" href="https://www.roidmc.com">RoidMC</a>
    With
    <a target="_blank" href="https://v3.nuxtjs.org/">NuxtJS</a>
  </h2>
</template>

<style>
.display-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  max-height: 3rem;
}
</style>
