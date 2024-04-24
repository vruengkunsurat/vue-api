<template>
  <div>
    <v-container class="bg-surface-variant">
      <v-row no-gutters>
        <v-col cols="12" sm="4">
          <v-sheet class="ma-2 pa-2">
            <v-text-field type="date" v-model="eventStartDate" />
            <v-text-field type="time" v-model="eventStartTime" />
            <v-text-field type="date" v-model="eventEndDate" />
            <v-text-field type="time" v-model="eventEndTime" />
          </v-sheet>

        </v-col>

      </v-row>
    </v-container>
    <v-btn @click="addEvent">Add Event</v-btn>
    <v-btn @click="endEvent">End Event</v-btn>

    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      eventStartDate: '', // ตัวแปรสำหรับเก็บวันที่เริ่มต้น
      eventStartTime: '', // ตัวแปรสำหรับเก็บเวลาเริ่มต้น
      eventEndDate: '', // ตัวแปรสำหรับเก็บวันที่สิ้นสุด
      eventEndTime: '', // ตัวแปรสำหรับเก็บเวลาสิ้นสุด
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        events: []
      }
    }
  },
  methods: {
    handleDateClick(info) {
      alert('date click! ' + info.dateStr)
    },
    addEvent() {
      if (this.eventStartDate && this.eventStartTime) {
          const eventStartDateTime = `${this.eventStartDate}T${this.eventStartTime}`; // รวมวันที่และเวลาเริ่มต้นเข้าด้วยกัน
          this.calendarOptions.events.push({ title: 'Meeting Start', start: eventStartDateTime });
          this.eventStartDate = ''; // เคลียร์ค่าใน input วันที่เริ่มต้น
          this.eventStartTime = ''; // เคลียร์ค่าใน input เวลาเริ่มต้น
          this.addingEnd = true; // เปลี่ยนสถานะเพื่อรอการเพิ่มเวลาการจบประชุม
        } else {
          alert('Please select both start date and time.');
        }
    },
    endEvent() {
      if (this.eventEndDate && this.eventEndTime) {
        const eventEndDateTime = `${this.eventEndDate}T${this.eventEndTime}`; // รวมวันที่และเวลาสิ้นสุดเข้าด้วยกัน
        const lastIndex = this.calendarOptions.events.length - 1; // หา index ของเหตุการณ์ล่าสุดใน events array
        this.calendarOptions.events[lastIndex].end = eventEndDateTime; // กำหนดเวลาการจบประชุมให้กับเหตุการณ์ล่าสุด
        this.eventEndDate = ''; // เคลียร์ค่าใน input วันที่สิ้นสุด
        this.eventEndTime = ''; // เคลียร์ค่าใน input เวลาสิ้นสุด
        this.addingEnd = false; // เปลี่ยนสถานะเพื่อเพิ่มเวลาการเริ่มประชุมครั้งต่อไป
      } else {
        alert('Please select both end date and time.');
      }
    }
  }
}
</script>
