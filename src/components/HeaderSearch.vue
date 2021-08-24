<template>
    <div id="search">
        <input type="text" placeholder="Type text here...">
        <button>Search</button>
    </div>
</template>

<script>
    export default {
        name: 'HeaderSearch',
    }
</script>

<style scoped>
    #search {
        display: inline-block;
    }
    #search input {
        height: 39px;
        width: 271px;
        border: 1px solid #195757;
        border-radius: 15px 0px 0px 15px;
        padding: 10px 0 10px 16px;
        font-size: 14px;
    }
    #search button {
        font-size: 12px;
        padding: 10px 11px;
        background: #00E0FF;
        color: #000000;
        vertical-align: bottom;
    }
    .bm-item-list #search input {
        margin-top: 20px;
        width: 60%;
    }

</style>
