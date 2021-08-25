<template>
    <div id="app">
        <div class="content">
            <Header />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import SectionOne from './components/SectionOne.vue';
    import SectionTwo from './components/SectionTwo.vue';
    import SectionThree from './components/SectionThree.vue';
    import SectionFour from './components/SectionFour.vue';
    import Footer from './components/Footer.vue';

    export default {
        name: 'App',

        components: {
            Header,
            SectionOne,
            SectionTwo,
            SectionThree,
            SectionFour,
            Footer,
        }
    }
</script>