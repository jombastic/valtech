<template>
    <section class="section">
        <div class="container container--1360">
            <h2>Section two</h2>
            <div class="text-center">
                <input type="text" placeholder="Filter users" />
                <button>Filter</button>
            </div>
            <div id="user-list">
                <p>ninja</p>                
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'SectionTwo',
    }
</script>

<style scoped>
section{
    background: #00E0FF;
}
h2 {
    margin-bottom: 84px;
}
input,
button {
    border: 1px solid #707070;
    height: 65px;
    background: #fff;
}
input {
    font-size: 16px;
    padding-left: 35px;
    border-radius: 15px 0px 0px 15px;
    max-width: 350px;
    width: calc(100% - 100px);
}
button {
    font-size: 18px;
    color: #221F1F;
    padding: 17px 0;
    max-width: 100px;
    width: 100%;
    vertical-align: bottom;
    border-radius: 0px 15px 15px 0px;
}
#user-list {
    padding: 60px;
    max-width: 1088px;
    min-height: 326px;
    margin: 48px auto 0 auto;
    background: #fff;
    box-shadow: 0px 8px 2px #00000029;
}

@media (min-width: 426px) {
    button {
        max-width: 170px;
    }
    input {
        width: calc(100% - 170px);
    }
}
</style>
