<template>
    <header>
        <img src="/images/logo.png" alt="logo" />
        <ul class="links">
            <li class="link"><nuxt-link to="/">Home</nuxt-link></li>
            <li class="link"><nuxt-link to="/sub">Sub Page</nuxt-link></li>
            <li class="link"><nuxt-link to="/store">Store Example</nuxt-link></li>
            <li class="link"><nuxt-link to="/i18n">I18n Example</nuxt-link></li>
            <li class="link"><nuxt-link to="/fetch">Data Fetch Example</nuxt-link></li>
            <li class="link"><nuxt-link to="/image">Image import Example</nuxt-link></li>
            <div>
                <nuxt-link to="/children/Alpha">Alpha</nuxt-link><br /><nuxt-link to="/children/Bravo">Bravo</nuxt-link
                ><br /><nuxt-link to="/children/Charlie">Charlie</nuxt-link>
            </div>
        </ul>
    </header>
</template>
<script setup></script>
<style lang="scss">
header {
    width: 100%;
    height: 100px;
    border: 1px solid black;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    img {
        width: 150px;
        margin-right: 10%;
    }

    .links {
        width: 70%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .link {
            @include fullSize;
            a {
                text-align: center;
                line-height: 100px;
                display: block;
                @include fullSize;
            }
        }
    }
}
</style>
