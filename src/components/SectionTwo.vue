<template>
    <section id="section-2" class="section">
        <div class="container container--1360">
            <h2>Section two</h2>
            <div class="text-center">
                <input v-model="name" type="text" placeholder="Filter users" />
                <button @click="findUser">Filter</button>
            </div>
            <UserList ref="userList" />
        </div>
    </section>
</template>

<script>
    import UserList from './UserList.vue';

    export default {
        name: 'SectionTwo',

        components: {
            UserList
        },

        data() {
            return {
                name: ''
            }
        },

        methods: {
            findUser() {
                if (this.name.length < 3) {
                    alert('Name must be larger than 3 characters.');
                    return
                }
                this.$refs.userList.filterUsers(this.name.toLowerCase());
            }
        }
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
@media (min-width: 426px) {
    button {
        max-width: 170px;
    }
    input {
        width: calc(100% - 170px);
    }
}
</style>
