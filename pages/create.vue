<template>
    <div>
        <v-form @submit.prevent="createUser()">
            <div>
                <v-text-field v-model="user.fname" label="fname"/>
                <v-text-field v-model="user.lname" label="lname"/>
                <v-text-field v-model="user.username" label="username"/>
                <v-text-field v-model="user.email" label="email"/>
                <v-text-field v-model="user.password" label="password"/>
                <v-text-field v-model="user.avatar" label="avatar"/>
                <v-btn type="submit">Create</v-btn>


            </div>
        </v-form>
    </div>
</template>

<script>
export default {
    name: 'CreatePage',
    data() {
        return {
            drawer: false,
            group: null,
            user: {
                fname: '',
                lname: '',
                username: '',
                password: '',
                email: '',
                avatar: ''
            }
        };
    },
    mounted() {

    },
    methods: {
        async createUser() {
            try {
                const response = await fetch('https://www.melivecode.com/api/users/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.user)
                });

                if (response.ok) {
                    alert('User created successfully!');
                    this.$router.push('/Inspire');
                } else {
                    alert('Error creating user. Please try again later.');
                }
            } catch (error) {
                console.error('Error creating user:', error);
                alert('Error creating user. Please try again later.');
            }
        }

    },
}
</script>