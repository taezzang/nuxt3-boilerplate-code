<template>
    <div>
        <h1>Root Page</h1>
        <TestComp />
        <div>
            <h2>Counter</h2>
            <button @click="counterStore.increment()">Increase</button>
            <input v-model="counterStore.count" type="number" />
        </div>
        <h3>현재 아이피 : {{ data?.ip }}</h3>
        <h3>현재 아이피2 : {{ data2?.ip }}</h3>
    </div>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
interface Ip {
    ip: string;
}

// ip 조회하는 OpenAPI로 Nuxt에서 제공하는 Data Fetch 모듈 활용
// vue life cycle이 실행 되기 전에 미리 api호출하여 값을 가져온다
const { data, pending, error, refresh } = useAsyncData<Ip>('myIp', () => $fetch('https://api.ipify.org/?format=json'));
// or
const { data: data2 } = await useFetch<Ip>('https://api.ipify.org/?format=json');
</script>
<style lang="scss"></style>
