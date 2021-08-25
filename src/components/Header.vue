<template>
    <header>
        <div class="container container--1640 flex flex--items-centered flex-space-between">
            <router-link to="#section-1"><img id="top_logo" src="../assets/images/Valtech-Logo-black@2x.png" alt="Large Valtech logo"></router-link>
            <Slide id="slide-menu" v-if="this.windowWidth < 1301" right>
                <HeaderLinks />
                <HeaderSearch />
            </Slide>
            <template v-if="this.windowWidth >= 1301">
                <HeaderLinks />
                <HeaderSearch />
            </template>
        </div>
    </header>
</template>

<script>
    import { Slide } from 'vue-burger-menu';  // import the CSS transitions you wish to use, in this case we are using `Slide`
    import HeaderLinks from './HeaderLinks.vue';
    import HeaderSearch from './HeaderSearch.vue';

    export default {
        name: 'Header',

        components: {
            Slide, // Register your component
            HeaderLinks,
            HeaderSearch,
        },

        data() {
            return {
                windowWidth: window.innerWidth,
            }
        },

        mounted() {
            this.$nextTick(() => {
                window.addEventListener('resize', this.onResize);
            })
        },

        beforeDestroy() { 
            window.removeEventListener('resize', this.onResize); 
        },

        methods: {  
            onResize() {
                this.windowWidth = window.innerWidth
            }
        }

    }
</script>

<style scoped>
    header {
        position: sticky;
        top: 0;
        z-index: 1;
        background: #fff;
        padding: 17px 0;
        border-bottom: 1px solid #191919;
    }
    .bm-item-list > * {
        flex-direction: column;
        padding: 0;
    }
</style>
