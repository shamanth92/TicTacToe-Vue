<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen bg-rose-50">
    <div class="flex flex-col gap-18">
      <div class="flex flex-col justify-center items-center">
        <p class="text-black text-2xl font-bold">Tic Tac Toe</p>
        <p>A Classic Game</p>
      </div>

      <RouterLink to="/game"
        ><button
          class="text-white bg-green-500 px-10 h-15 w-80 rounded-lg border-2 border-green-500 cursor-pointer"
        >
          Play
        </button></RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
</style>