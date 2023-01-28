<template>
    <div class="section">
        <h1>Sub Page</h1>
        <p>auth라는 미들웨어를 사용해 로그인 여부를 체크</p>
        <h3>현재는 임의로 미들웨어에서 true를 반환시켜 정상적으로 라우팅 되도록 설정</h3>
        <p>소스코드 중 middleware/auth.ts 참조</p>
        <NuxtLink to="/">메인으로 돌아가기</NuxtLink>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    middleware: ['auth'],
});
</script>
