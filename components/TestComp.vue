<template>
    <div>
        <h2>테스트 컴포넌트</h2>
        <p>i18n 테스트 : {{ t('welcome') }}</p>
        <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">{{
            locale.name
        }}</NuxtLink>
    </div>
</template>
<script setup>
const { t, locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() => locales.value.filter((i) => i.code !== locale.value));
</script>
