<template>
    <div class="section">
        <h1>Image Page</h1>
        <h1>이미지 사용법</h1>
        <br />
        <h2>image 태그만 사용 시</h2>
        <p>'~'를 이미지 파일 경로 맨앞에 붙일 시 '/src'로 치환됨</p>
        <img src="~/assets/images/logo.png" alt="test-image" />

        <br />
        <h2>background-image css 프로퍼티 사용 시</h2>
        <p>1. 이미지를 import 함으로써 해당 이미지에 대한 URL 값을 받아와 style 디렉티브로 표현</p>
        <div class="box" :style="{ backgroundImage: `url('${bg}')`, backgroundSize: 'contain' }"></div>
        <br />
        <p>2. class에 미리 background-image 속성을 정의한 뒤 적용할 엘리먼트에 클래스 부여</p>
        <div class="box bg-image"></div>
        <NuxtLink to="/">메인으로 돌아가기</NuxtLink>
    </div>
</template>
<script setup lang="ts">
import bg from '@/assets/images/logo.png';
// const bg = new URL('@/assets/images/logo.png');
</script>

<style scoped>
.box {
    width: 50%;
    height: 300px;
}

.bg-image {
    background-image: url(~/assets/images/logo.png);
    background-size: contain;
}
</style>
