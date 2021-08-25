<template>
    <div id="app">
        <div class="content">
            <Header />
            <router-view></router-view>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';

    export default {
        name: 'App',

        components: {
            Header,
            Footer,
        }
    }
</script>