<template>
    <footer class="flex flex--wrap flex--space-between container container--1640">
        <div class="flex__100percent m-bottom-40-1230">
            <img :src="require(`@/assets/images/Valtech-Logo-black.png`)" alt="">
        </div>
        <div class="flex__50percent-1230 flex__100percent-625">
            <h4>Footer section title</h4>
            <ul>
                <li><a href="#">Footer link</a></li>
                <li><a href="#">Footer link</a></li>
                <li><a href="#">Footer link</a></li>
                <li><a href="#">Footer link</a></li>
            </ul>
        </div>
        <div class="flex__50percent-1230 flex__100percent-625">
            <h4>Footer section title</h4>
            <ul>
                <li><a href="#">Footer link</a></li>
                <li><a href="#">Footer link</a></li>
                <li><a href="#">Footer link</a></li>
                <li><a href="#">Footer link</a></li>
            </ul>
        </div>
        <div class="flex__50percent-1230 flex__100percent-625">
            <h4>Footer section title</h4>
            <ul>
                <li><a href="#">Footer link</a></li>
                <li><a href="#">Footer link</a></li>
                <li><a href="#">Footer link</a></li>
                <li><a href="#">Footer link</a></li>
            </ul>
        </div>
        <div class="flex__50percent-1230 flex__100percent-625">
            <h4>Footer section title</h4>
            <ul>
                <li><a href="#">Footer link</a></li>
                <li><a href="#">Footer link</a></li>
                <li><a href="#">Footer link</a></li>
                <li><a href="#">Footer link</a></li>
            </ul>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',

    }
</script>

<style scoped>
footer {
    padding: 65px;
    flex-shrink: 0;
}


h4 {
    font-size: 18px;
}

ul {
    margin-top: 20px;
    list-style: none;
    font-size: 14px;
}

li {
    padding-bottom: 10px;
}

a {
    color: #000000;
}

a:hover, a:active {
    text-decoration: underline;
}

@media (max-width: 1300px) {
    .flex__100percent {
        flex: 0 0 100%;
    }

    .flex__50percent-1230 {
        flex: 50%;
    }

    .m-bottom-40-1230 {
        margin-bottom: 40px;
    }
}

@media (max-width: 625px) {
    .flex__100percent-625 {
        flex: 100%;
    }
}

@media (min-width: 1499px) {
    img {
        width: 100%;
    }
}
</style>
