<template>
    <div id="user-list" class="grid-container">
        <span class="user__number">Users found: {{ usersLength }}</span>
        <p class="error" v-if="!filteredUsers.length">Sorry, a user with a first name of '{{ searchName }}' doesn't exist.</p>
        <div v-else class="user clearfix" v-for="user in filteredUsers" :key="user.id">
            <img class="user__image" :src="user.img" :alt="'An image of' + user.firstname + ' ' + user.lastname" @click="user.show = !user.show">
            <div class="user__info" :class="{'show__info': user.show}">
                <p><strong>First name:</strong> <span>{{ user.firstname }}</span></p>
                <p><strong>Last name:</strong> <span>{{ user.lastname }}</span></p>
                <p><strong>Age:</strong> <span>{{ user.age }}</span></p>
            </div>
        </div>                
        <button class="send-button" @click="reset">Reset</button>
    </div>
</template>

<script>
    export default {
        name: 'UserList',

        data() {
            return {
                users: [
                    {
                        id: 1,
                        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=15',
                        firstname: 'Deborah',
                        lastname: 'Miller',
                        age: '25',
                        show: false
                    },
                    {
                        id: 2,
                        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=18',
                        firstname: 'Johannes',
                        lastname: 'Myles',
                        age: '34',
                        show: false
                    },
                    {
                        id: 3,
                        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=345',
                        firstname: 'Britta',
                        lastname: 'Rhudinbergh',
                        age: '43',
                        show: false
                    },
                    {
                        id: 4,
                        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=44',        
                        firstname: 'Olivia',
                        lastname: 'Brown',
                        age: '44',
                        show: false
                    },
                    {
                        id: 5,
                        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=657',        
                        firstname: 'Daniel',
                        lastname: 'Rudin',
                        age: '32',
                        show: false
                    },
                    {
                        id: 6,
                        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=89',        
                        firstname: 'Teressa',
                        lastname: 'Sandhurst',
                        age: '35',
                        show: false
                    },
                    {
                        id: 7,
                        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=877',        
                        firstname: 'Dina',
                        lastname: 'Sokolowski',
                        age: '28',
                        show: false
                    },
                    {
                        id: 8,
                        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=81',        
                        firstname: 'André',
                        lastname: 'Szillagy',
                        age: '23',
                        show: false
                    }, 
                    {
                        id: 9,
                        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=33',          
                        firstname: 'Fabian',
                        lastname: 'Stocker',
                        age: '45',
                        show: false
                    },
                    {
                        id: 10,
                        img: 'https://source.unsplash.com/collection/8669816/100x100?sig=21',          
                        firstname: 'Christian',
                        lastname: 'Williams',
                        age: '41',
                        show: false
                    },      
                ],

                searchName: ''
            }
        },

        computed: {
            filteredUsers() {
                if (!this.searchName)
                    return this.users;
                return this.users.filter(user => user.firstname.toLowerCase().includes(this.searchName))
            },

            usersLength() {
                return this.filteredUsers.length
            }
        },

        methods: {
            filterUsers(name) {
                this.searchName = name;
            },

            reset() {
                this.searchName = ''
            }
        }
    }
</script>

<style scoped>
#user-list {
    position: relative;
    padding: 60px 20px;
    max-width: 1088px;
    min-height: 326px;
    margin: 48px auto 0 auto;
    background: #fff;
    box-shadow: 0px 8px 2px #00000029;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}
.user__number {
    position: absolute;
    top: 20px;
    right: 20px;
}
.user__info {
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease-in-out;
}
.user__info.show__info {
    visibility: visible;
    opacity: 1;
}
.user__info p {
    padding: 0;
    font-size: 14px;
}
.user__info span {
    font-size: 12px;
}
.user__image {
    float: left;
    border: 1px solid #707070;
    margin-right: 10px;
    padding: 5px;
    cursor: pointer;
}
.grid-container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: auto auto auto;
}
.animate {
    transition: all 0.3s;
}
.error {
    color: #ff0000;
}
.send-button {
    position: absolute;
    right: 20px;
    bottom: 20px;
}
</style>
