<template>
    <div class="links">
        <a href="#" class="link link_active">Section one</a>
        <a href="#" class="link">Section two</a>
        <a href="#" class="link">Section three</a>
        <a href="#" class="link">Section four</a>
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
        bottom: -32px;
        left: 50%;
        transform: translateX(-50%);
        height: 5px;
        width: 45px;
        transition: background 0.5s;
    }
    .link:hover::before {
        background: #00C8FF;
    }
    .link_active {
        color: #00C8FF;
    }
</style>
