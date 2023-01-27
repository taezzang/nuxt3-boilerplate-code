<template>
    <div class="section">
        <h1>Sub Page</h1>
        <p>auth라는 미들웨어를</p>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    middleware: ['auth'],
});
</script>
