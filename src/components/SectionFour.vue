<template>
    <section class="section">
        <div class="container container--1360">
            <h2>Section four</h2>
            <div class="flex flex--content-centered">
                <form action="#" method="post">
                    <h3 class="m-bottom-20">Contact us</h3>
                    <div class="flex-760 flex--space-between-760">
                        <div class="flex flex--column">
                            <div class="form-element m-bottom-20">
                                <label for="first-name">First name</label>
                                <input class="m-top-20" type="text" id="first-name" name="first-name" />
                            </div>
                            <div class="form-element m-bottom-20">
                                <label for="email">Email adress</label>
                                <input class="m-top-20" type="email" id="email" name="email" />
                            </div>
                            <label for="message">Your message</label>
                            <textarea class="m-top-20" name="message" id="message" rows="5"></textarea>
                        </div>
                        <div class="flex flex--column relative">
                            <div class="form-element m-bottom-20">
                                <label for="last-name">Last name</label>
                                <input class="m-top-20" type="text" id="last-name" name="last-name" />
                            </div>
                            <div class="form-element m-bottom-20">
                                <label for="phone">Phone number</label>
                                <input class="m-top-20" type="text" id="phone" name="phone" />
                            </div>
                            <div class="form-element">
                                <button type="submit" class="send-button">Send</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'SectionFour',
    }
</script>

<style scoped>
section {
    min-height: 800px;
    background: url('../assets/man-with-phone.png') no-repeat center/cover;
}
.m-top-20 {
    margin-top: 20px;
}
.m-bottom-20 {
    margin-bottom: 20px;
}
h2 {
    margin-bottom: 60px;
    color: #FFFFFF;
}
form {
    background: rgba(255, 255, 255, 0.78);
    border-radius: 15px;
    padding: 40px 30px;    
    width: 812px;
}
form h3 {
    font-size: 24px;
    text-transform: uppercase;
}
label {
    font-size: 18px;
}
input,
textarea {
    padding: 15px;
    border-radius: 15px;
    border: none;
    background: #fff;
    width: 100%;
}
input {
    height: 40px;
}
textarea {
    resize: none;
}
button {
    float: right;
    width: 200px;
    height: 50px;
}

@media (min-width: 425px) {
    form {
        padding: 40px 48px;
    }
}

@media (min-width: 760px) {
    .form-element {
        width: 300px;
    }
    button {
        position: absolute;
        bottom: 0;
        right: 0;
    }
}
</style>
