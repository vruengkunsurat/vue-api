import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "@/pages/index.vue"; // ปรับเปลี่ยนเส้นทางตามความเหมาะสมของคุณ
import InspirePage from "@/pages/inspire.vue"; // ปรับเปลี่ยนเส้นทางตามความเหมาะสมของคุณ
import UpdatePage from "@/pages/update.vue";
import CreatePage from "@/pages/create.vue";


Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomePage },
  { path: "/inspire", component: InspirePage },
  { path: "/create", name: 'CreatePage', component: CreatePage },
  { path: "/update/:id", name: 'UpdatePage', component: UpdatePage }, // เพิ่มพารามิเตอร์ :id เพื่อรับค่า id
  // เพิ่มเส้นทางอื่น ๆ ตามต้องการ
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
