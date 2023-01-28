<template>
    <div class="section">
        <h2>Counter</h2>
        <p>Pinia Store 사용</p>
        <p>Composition API 형식으로 작성한 스토어 인스턴스 (stores/counter.ts 참조)</p>
        <button @click="counterStore.increment()">증가 버튼</button>
        <button @click="counterStore.decrement()">감소 버튼</button>
        <label for="count">count (새로고침 해도 유지됨 - pinia persist)</label>
        <p>persist로 저장하는 스토리지는 쿠키로 설정됨 (변경 가능)</p>
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
