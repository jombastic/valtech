<template>
    <div class="article-block">
        <div class="block__image">
            <img :src="require(`@/assets/${article.img}`)" :alt="article.imgAlt">
        </div>
        <div class="block__bottom">
            <h3>Teaser title</h3>
            <div v-html="article.text"></div>
            <a href="#" class="send-button">Read more</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ArticleBlock',

        props: ['article']
    }
</script>

<style scoped>
.article-block {
    max-width: 536px;
    border-radius: 15px;
    margin-bottom: 50px;
}
.block__bottom,
.block__image {
    height: 250px;
}
.block__image {
    overflow: hidden;
}
.block__image img {
    max-width: 100%;
}
.block__bottom {
    position: relative;
    border-radius: 0px 0px 15px 15px;
    background-color: #fff;
    padding: 35px;
    box-shadow: 0px 8px 5px #00000029;
}
.block__bottom h3 {
    font-size: 32px;
    line-height: 1;
    margin-bottom: 25px;
}
.block__bottom >>> p {
    letter-spacing: 0px;
    font-size: 14px;
}
a.send-button {
    position: absolute;
    right: 35px;
    bottom: 15px;
}
@media (max-width: 576px) {
    .block__bottom >>> p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;    
    }
}

@media (max-width: 1149px) {
    .article-block {
        margin-left: auto;    
        margin-right: auto;    
    }
}
</style>
