<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

async function get1(){
    try {
        const res = await axios.get('http://localhost:3000/tools/')
        console.log(res)
        text1.value = res.data
    } catch (error) {
        console.log(error)
    }
}

async function get2(){
    try {
        const res = await axios.get('http://localhost:3000/tools/num')
        console.log(res)
        text2.value = res.data
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    console.log('mounted')
})

const text1 = ref('')
const text2 = ref('')
</script>

<template>
    <button @click="get1">Button</button>
    <p>text1:{{ text1 }}</p>
    <button @click="get2">Button</button>
    <p>text2:{{ text2 }}</p>
</template>

<style scoped>

</style>
