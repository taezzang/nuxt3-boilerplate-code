<template>
    <div class="section">
        <template v-if="!pending">
            <h3>현재 아이피 API 결과 : {{ data?.ip }}</h3>
            <button @click="refreshAPI">API 재호출</button>
        </template>
        <!-- <h3>현재 아이피2 : {{ data2?.ip }}</h3> -->

        <!-- <button @click="refreshAPI2">useFetch 재호출</button> -->

        <template v-else>
            <h3>로딩중임</h3>
        </template>
    </div>
</template>
<script setup lang="ts">
// ip 조회하는 OpenAPI로 Nuxt에서 제공하는 Data Fetch 모듈 활용
// vue life cycle이 실행 되기 전에 미리 api호출하여 값을 가져온다
// useAsyncData 메소드는 page-level 컴포넌트에서만 사용가능

// 여기서 개발자는 useAsyncData or useLazyAsyncData 함수 중 선택해서 사용 가능함
// 서로 첫 접속 시엔 두 함수의 기능에 차이가 없으나..
// 다른 페이지에서 이 페이지로 라우터가 변경되었을 때 서로 한 가지 차이가 생김
// useAsyncData는 Data Fetch가 완료되어야 컴포넌트가 mount 되지만 useLazyAsyncData는 일단 컴포넌트 mount 후 그 다음에 데이터를 Fetch한다
// 공식문서에도 좀 더 빠른 속도로 페이지 변경되는 걸 체감하게 하고 싶다면 Lazy 옵션을 붙인 뒤 해당 컴포넌트에서 pending 속성으로 로딩바를 구현해보라고 한다
// https://nuxt.com/docs/getting-started/data-fetching
const { data, pending, error, refresh } = await useLazyAsyncData<Ip>('myIp', () =>
    $fetch('https://api.ipify.org/?format=json'),
);

// or
// const { data: data2, error: error2, refresh: refresh2 } = await useFetch<Ip>('https://api.ipify.org/?format=json'); // created 이후에 실행됨

// refresh 메소드를 통해 해당 API를 재 호출 한다!
const refreshAPI = () => {
    refresh();
};
// const refreshAPI2 = () => {
//     refresh2();
// };
</script>
