<template>
    <section class="section">
        <div class="container container--1360">
            <h2>Section three</h2>
            <div class="flex-1149 flex--wrap flex--space-between">
                <ArticleBlock v-for="(article, index) in articles" :key="index" :article="article" />
            </div>
        </div>
    </section>
</template>

<script>
    import ArticleBlock from './ArticleBlock.vue';

    export default {
        name: 'SectionThree',

        components: {
            ArticleBlock
        },

        data() {
            return {
                articles: [
                    {
                        img: 'vr.png',
                        imgAlt: 'Virtual reality image',
                        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim ligula, auctor rhoncus massa non, congue dignissim sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>',
                    },
                    {
                        img: 'people.png',
                        imgAlt: 'An image of people',
                        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
                    },
                    {
                        img: 'woman.png',
                        imgAlt: 'An image of a woman',
                        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim ligula, auctor rhoncus massa non, congue dignissim sapien</p>',
                    },
                    {
                        img: 'man.png',
                        imgAlt: 'An image of a man',
                        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim ligula, auctor rhoncus massa non, congue dignissim sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p><p>Vestibulum ante ipsum…</p>',
                    },
                ]
            }
        }
    }
</script>

<style scoped>
section {
    background-color: #fff;
}
h2 {
    margin-bottom: 60px;
}
@media (min-width: 1150px) {
    .flex-1149 {
        display: flex;
    }
}
</style>
