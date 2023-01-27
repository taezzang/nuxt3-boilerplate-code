<template>
    <div class="section">
        <h2>Counter</h2>
        <button @click="counterStore.increment()">Increase</button>
        <label for="count">count</label>
        <input id="count" v-model="counterStore.count" type="number" />
    </div>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
interface Ip {
    ip: string;
}
</script>
