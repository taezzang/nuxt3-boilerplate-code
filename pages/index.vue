<template>
    <div>
        <template v-if="!pending"
            ><h1>Root Page</h1>
            <TestComp />
            <div>
                <h2>Counter</h2>
                <button @click="counterStore.increment()">Increase</button>
                <input v-model="counterStore.count" type="number" />
            </div>
            <h3>현재 아이피 : {{ data?.ip }}</h3>
            <h3>현재 아이피2 : {{ data2?.ip }}</h3>

            <button @click="refreshAPI">Async 재호출</button>
            <button @click="refreshAPI2">useFetch 재호출</button>
        </template>
        <template v-else>
            <h3>로딩중임</h3>
        </template>
    </div>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
interface Ip {
    ip: string;
}
console.warn('created!');

// ip 조회하는 OpenAPI로 Nuxt에서 제공하는 Data Fetch 모듈 활용
// vue life cycle이 실행 되기 전에 미리 api호출하여 값을 가져온다
// useAsyncData 메소드는 page-level 컴포넌트에서만 사용가능
const { data, pending, error, refresh } = await useAsyncData<Ip>('myIp', () =>
    $fetch('https://api.ipify.org/?format=json'),
);

// or
const { data: data2, error: error2, refresh: refresh2 } = await useFetch<Ip>('https://api.ipify.org/?format=json'); // created 이후에 실행됨

// refresh 메소드를 통해 해당 API를 재 호출 한다!
const refreshAPI = () => {
    refresh();
};
const refreshAPI2 = () => {
    refresh2();
};
</script>
<style lang="scss"></style>
