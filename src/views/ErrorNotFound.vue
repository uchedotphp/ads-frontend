<template>
  <div class="not-found bg-info">
    <div class="text-center">
      <div style="font-size: 30vh">404</div>

      <h2 style="opacity: 0.4">Oops. Nothing here...</h2>

      <button @click="$router.push({ name: 'Editor' })" class="btn btn-primary">
        Go Home
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorNotFound",
};
</script>

<style lang="scss" scoped>
.not-found {
  height: 100vh;
  display: grid;
  place-content: center;
}
</style>
