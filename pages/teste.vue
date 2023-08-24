<template>
    <div>Ola Mundo</div>
</template>
<script>
definePageMeta({
    middleware: false,
})
onMounted(() => {
  toastMessage("Teste", Status.SUCCESS, 4000);
});
</script>