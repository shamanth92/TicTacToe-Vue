<script setup lang="ts"></script>

<template>
  <div class="flex flex-row gap-2 items-center justify-center p-10">
    <RouterLink to="/home"
      ><button
        class="text-white bg-green-500 px-10 h-20 rounded-lg border-2 border-green-500 cursor-pointer"
      >
        Go to Home
      </button></RouterLink
    >
    <RouterLink to="/game"
      ><button
        class="text-white bg-green-500 px-10 h-20 rounded-lg border-2 border-green-500 cursor-pointer"
      >
        Go to Game
      </button></RouterLink
    >
  </div>
</template>

<style scoped>
</style>
