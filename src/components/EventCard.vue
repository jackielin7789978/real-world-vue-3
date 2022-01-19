<template>
    <router-link :to="{ name: 'EventDetails', params: { id: event.id } }">
        <div class="event-card">
            <span>@ {{ event.time }} on {{ event.date }}</span>
            <h4 class="event-card__title">{{ event.title }}</h4>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'EventCard',
    props: {
        event: Object,
    },
}
</script>

<style scoped>
.event-card {
    width: 340px;
    height: 160px;
    border: 1px solid #333;
    border-radius: 2px;
    margin: 16px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.2s;
    cursor: pointer;
    text-decoration: none;
}
.event-card:hover {
    transform: scale(1.05);
    color: #000;
}
.event-card__title {
    font-size: 22px;
}
</style>
