<template>
    <button @click="handleError">Clear errors</button>
    <h2>{{ error }}</h2>
</template>

<script setup>
const props = defineProps({
    error: {
        type: Object,
        default: () => ({
            message: 'error',
        }),
    },
});

const handleError = () => clearError({ redirect: '/' });
</script>
