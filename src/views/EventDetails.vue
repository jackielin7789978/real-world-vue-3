<template>
    <div v-if="event" class="event-details">
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>

<script>
import EventService from '@/services/EventService.js'

export default {
    props: ['id'],
    data() {
        return {
            event: null,
        }
    },
    created() {
        // fetch event by id and set local data
        EventService.getEvent(this.id)
            .then((res) => (this.event = res.data))
            .catch((e) => console.log(e))
    },
}
</script>

<style scoped>
.event-details {
    margin-top: 5vh;
}
.event-details h1 {
    font-size: 48px;
}
</style>
