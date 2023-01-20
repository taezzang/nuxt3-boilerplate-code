<template>
    <div>
        <h1>Root Page</h1>
        <TestComp />
        <div>
            <h2>Counter</h2>
            <button @click="counterStore.increment()">Increase</button>
            <input type="number" v-model="counterStore.count" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
</script>
<style lang="scss"></style>
