<template>
  <div>
      <!-- ซ่อน Navigation Drawer โดยกำหนด v-if เมื่อยังไม่ล็อกอิน -->

      <!-- App Bar -->
      <v-app-bar app :clipped-left="clipped" fixed>
          <!-- ปุ่มเมนู Navigation Drawer จะไม่แสดงเมื่อยังไม่ล็อกอิน -->
          <!-- <v-app-bar-nav-icon v-if="!loggedIn" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <!-- ปุ่มอื่น ๆ ใน App Bar -->
      </v-app-bar>

      <!-- เนื้อหาของหน้า login -->
      <v-main>
          <v-container>
              <!-- ฟอร์มล็อกอิน -->
              <v-text-field label="Username" v-model="username"></v-text-field>
              <v-text-field label="Password" v-model="password" type="password"></v-text-field>
              <v-btn @click="login">Login</v-btn>
          </v-container>
      </v-main>
  </div>
</template>

<script>
// import router from '@/router';

export default {
  data() {
      return {
          drawer: false,
          clipped: false,
          title: 'Login',
          username: 'karn.yong@melivecode.com', // เปลี่ยนเป็น email แทน username
          password: 'melivecode', // เพิ่ม password เข้ามาเก็บค่าพาสเวิร์ด
          loggedIn: false  // เพิ่มตัวแปร loggedIn เพื่อบอกว่า user ล็อกอินหรือไม่
      };
  },
  methods: {
      async login() {
        const response = await fetch('https://www.melivecode.com/api/login',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password
          })
        });
        const data = await response.json();
        this.users = data;
        console.log(data);
        this.$router.push('/Inspire');
      }
    //   login() {
    //       // เช็คว่า email และ password ตรงกับข้อมูลที่กำหนดหรือไม่
    //       if (this.username === 'test' && this.password === '123') {
    //         console.log(`if`);
    //           // ถ้าตรงให้ทำการล็อกอินเสร็จสิ้น
    //           this.loggedIn = true;
    //           // และนำทางไปยังหน้า inspire
    //           this.$router.push('/inspire');
    //       } else {
    //           // ถ้าไม่ตรงให้แสดงข้อความแจ้งเตือน
    //           alert('Invalid email or password!');
    //       }
    //   }
  }
};
</script>
