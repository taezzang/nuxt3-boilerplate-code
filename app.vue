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
</style>
