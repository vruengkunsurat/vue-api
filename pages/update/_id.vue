<template>
    <div>
        {{ $route.params.id }}

        <v-form @submit.prevent="updateUser()">
            <div v-for="user in users" :key="user.id">
                <v-text-field v-model="user.user.fname" label="fname" />
                <v-text-field v-model="user.user.lname" label="lname"/>
                <v-text-field v-model="user.user.username" label="username" />
                <v-text-field v-model="user.user.avatar" label="avater" />
                <v-btn type="submit">Update</v-btn>

                <!-- <v-btn @click="updateUser(user.id)">Update</v-btn> -->
            </div>
        </v-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            group: null,
            users: []
        };
    },
    mounted() {
        this.fetchUsers();
    },
    methods: {
        async fetchUsers() {
            try {
                const response = await fetch('https://www.melivecode.com/api/users/' + this.$route.params.id);
                const data = await response.json();
                this.users = [data]; // เก็บข้อมูลผู้ใช้ในอาเรย์เพื่อให้สามารถแสดงผลได้ในลูป v-for
                console.log(this.users); // แสดงข้อมูลผู้ใช้ใน console log
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        },

        async updateUser() {
            try {
                // สร้างข้อมูลที่จะส่งไปแก้ไข
                const userToUpdate = this.users[0].user;
                const response = await fetch(`https://www.melivecode.com/api/users/update`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userToUpdate)
                });
                // ตรวจสอบสถานะของการส่งคำขอ
                if (response.ok) {
                    alert('User updated successfully!');
                    // เมื่ออัพเดทข้อมูลสำเร็จ กลับไปหน้าหลัก
                    this.$router.push('/Inspire');
                } else {
                    alert('Error updating user. Please try again later.');
                }
            } catch (error) {
                console.error('Error updating user:', error);
                alert('Error updating user. Please try again later.');
            }
        }


    }

};
</script>
