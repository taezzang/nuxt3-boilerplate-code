<template>
    <div class="wrap">
        <TheHeader />
        <slot />
        <TheFooter />
    </div>
</template>
<style lang="scss">
.wrap {
    position: relative;
    width: 100%;
    height: auto;
    min-height: 100%;
    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    .section {
        flex: 1;
    }
}
</style>
