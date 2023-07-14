<template>
    <div class="section">
        <h1>Image Page</h1>
        <h1>이미지 사용법</h1>
        <br />

        <p>'/' (public 폴더 내부)로 시작하는 경로를 src로 삽입</p>
        <img src="/images/logo.png" alt="test-image" />
    </div>
</template>
<script setup lang="ts"></script>

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
