<template>
    <div class="section">
        <h1>Sub Page</h1>
        <p>auth라는 미들웨어를 사용해 로그인 여부를 체크</p>
        <NuxtLink to="/">메인으로 돌아가기</NuxtLink>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    middleware: ['auth'],
});
</script>
