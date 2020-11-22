<template>
    <div class="weather-item">
        <p v-if="info !== null" >
            <ul class="list-group">
                <li class="list-group-item">
                    <strong>Summary:</strong> {{info.weather[0].main}}
                    <img :src="info.url" :alt="info.weather[0].description">
                </li>
                <li class="list-group-item">
                    <strong>Temperature:</strong> {{info.main.temp}}°C
                </li>
                <li class="list-group-item">
                    <strong>Feels Like:</strong> {{info.main.feels_like}}°C
                </li>
                <li class="list-group-item">
                    <strong>Humidity:</strong> {{info.main.humidity}}%
                </li>
                <li class="list-group-item">
                    <strong>Wind:</strong> {{(info.wind.speed * 3.6).toFixed(0)}} km/h
                </li>
                <li class="list-group-item">
                    <strong>Country:</strong> {{info.sys.country}}
                </li>
            </ul>
        </p>
    </div>
</template>

<script>
    export default {
        name: "Info",
        props: ["info"]
    }
</script>

<style scoped>
    .weather-item {
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }
</style>
