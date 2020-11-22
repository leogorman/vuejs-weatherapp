<template>
    <div class="container">
        <form @submit="searchWeather">
            <div class="row form-group">
                <div class="col-10" style="padding: 0; margin-top: 10px;">
                    <input class="form-control" type="text" v-model="city" name="city" placeholder="Enter City...">
                </div>
                <div class="col-2" style="padding-left: 10px; margin-top: 10px;">
                    <input class="btn btn-primary" type="submit" value="Search">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                city: ''
            }
        },
        methods:{
            searchWeather(e){
                e.preventDefault();

                if(this.city === ''){
                    alert('Please Enter a City')
                } else{
                    // Send up to parent
                    this.$emit('search-weather', this.city);
                }
            }
        }
    }
</script>
