<template>
    <div class="ltn__product-slider-area ltn__product-gutter pt-60 pb-40">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-area text-center">
                        <h1 class="section-title section-title-border text-capitalize">{{ title }}</h1>
                    </div>
                </div>
            </div>
            <div>
                <Swiper :modules="[SwiperPagination, SwiperNavigation]" :slides-per-view="2" :loop="true"
                    :space-between="20" :navigation="{
                        enabled: true,
                        nextEl: btnNextRef,
                        prevEl: btnPrevtRef
                    }" @before-init="(swiper) => {
    swiper.params.navigation.prevEl = btnPrevtRef;
    swiper.params.navigation.nextEl = btnNextRef;
}" :breakpoints="{ 768: { slidesPerView: 3, pagination: { enabled: false } }, 992: { slidesPerView: 4, pagination: { enabled: false } } }"
                    :pagination="{ clickable: true, enabled: true }" class="slick-arrow-1">
                    <button ref="btnPrevtRef" class="slick-prev slick-arrow">
                        <i class="icon-arrow-left" alt="Arrow Icon"></i>
                    </button>
                    <button ref="btnNextRef" class="slick-next slick-arrow">
                        <i class="icon-arrow-right" alt="Arrow Icon"></i>
                    </button>
                    <SwiperSlide v-if="!isLoading" v-for="(item, index) in items" :key="index">
                        <Product :data="item" />
                    </SwiperSlide>
                    <SwiperSlide v-if="isLoading" v-for="(item, index) in 4" :key="index" >
                        <ProductLoading />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(["title", "items", "isLoading"])

const btnPrevtRef = ref(null);
const btnNextRef = ref(null);
</script>