<template>
    <div class="section">
        <div>Check developer console!</div>
    </div>
</template>
<script setup lang="ts">
const config = useRuntimeConfig();
console.log('Runtime config:', config.public);

console.log('API Base URL:', config.apiBase);
</script>
