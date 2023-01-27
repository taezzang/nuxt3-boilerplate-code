<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<style lang="scss">
html {
    @include fullSize;
}
body {
    @include fullSize;
    & > div {
        @include fullSize;
    }
}
.section {
    display: flex;
    justify-content: center;
    align-items: center;
    // &__wrap {
    //     width: 70%;
    // }
}
</style>
