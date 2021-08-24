<template>
    <div class="links">
        <router-link to="#section-1" class="link">Section one</router-link>
        <router-link to="#section-2" class="link">Section two</router-link>
        <router-link to="#section-3" class="link">Section three</router-link>
        <router-link to="#section-4" class="link">Section four</router-link>
    </div>
</template>

<script>
    export default {
        name: 'HeaderLinks',
    }
</script>

<style scoped>
    .link {
        position: relative;
        color: #707070;
        margin: 0 22px;
        font-size: 18px;
    }
    .link::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 5px;
        width: 70px;
        transition: background 0.3s !important;
    }
    .link:hover::before {
        background: #00C8FF;
    }
    .router-link-exact-active {
        color: #00C8FF;
    }
    @media (min-width: 1301px) {
        .link::before {
            bottom: -32px;
            left: 50%;
            transform: translateX(-50%);
            width: 45px;
        }
    }
</style>
