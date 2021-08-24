<template>
    <section class="relative flex flex--content-centered flex--column">
        <h2>Section one</h2>
        <div id="white-section" class="flex flex--items-centered flex--content-centered flex--column">
            <a href="#" class="round-button">Contact</a>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'SectionOne',
    }
</script>

<style scoped>
    section {
        min-height: 800px;
        background: url('../assets/Intersection 2@2x.png') no-repeat center/cover;
    }
    h2 {
        position: absolute;
        left: 15%;
        top: 120px;
        color: #221F1F;
    }
    #white-section {
        width: 100%;
        padding: 81px 0;
        opacity: 0.82;
        background: #fff;
    }
    .round-button {
        background: #221F1F;
        color: #fff;
        border-radius: 30px;
        text-transform: uppercase;
        width: 280px;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        padding: 10px;
        margin-bottom: 10px;
        transition: box-shadow 0.3s ease-in-out;
    }
    .round-button:hover {
        box-shadow: 0px 8px 0px #00000033;
    }
    p {
        color: #000000;
        font-size: 12px;
    }
</style>
