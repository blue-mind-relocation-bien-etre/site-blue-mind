<template>
    
    <div class="relative h-120 flex flex-col">
        <div
        class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat brightness-75"
        :style="{ backgroundImage: `url(${vagueImg})` }">
        </div>

        <div class="absolute inset-0 z-0 bg-linear-to-b from-black/70 via-black/40 to-transparent"></div>

        <div class="relative flex flex-cols">
            <div class="justify-left">
                <img src="@/img/Logo2_BM_VD_blanc.png" alt="" class="h-35 m-15">
            </div>
        </div>

    </div>

</template>

<script setup>
import vagueImg from '@/img/vague.jpg'
</script>