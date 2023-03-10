<template>
    <div class="section">
        <h3>pages 폴더 내부에 하위 폴더 생성 시 router의 children과 동일한 기능을 한다</h3>
        <h3>현재 children이라는 하위 폴더 내부에 [type].vue 파일이 생성되어 있으며 type은 파라미터로 전송된다.</h3>
        <h1>현재 children : {{ $route.params.type }}</h1>
    </div>
</template>
