<template>
    <!-- BRAND LOGO AREA START -->
    <div class="ltn__brand-logo-area  ltn__brand-logo-1 section-bg-1 pt-35 pb-35 plr--5">
        <div class="container-fluid">
            <div class="row ltn__brand-logo-active">
                <Swiper :modules="[SwiperAutoplay]" :autoplay="{ delay: 4000, disableOnInteraction: false }"
                    :slides-per-view="2" :loop="true" :space-between="20"
                    :breakpoints="{ 768: { slidesPerView: 4 }, 992: { slidesPerView: 6 } }" class="slick-arrow-1">

                    <SwiperSlide v-for="brand in brands" class="col-lg-12">
                        <div class="ltn__brand-logo-item">
                            <img :src="brand" alt="Brand Logo" title="Brand Logo" width="auto" height="auto" loading="lazy">
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
</template>

<script setup>
const brands = [
    "/img/brand-logo/1.png",
    "/img/brand-logo/2.png",
    "/img/brand-logo/4.png",
    "/img/brand-logo/3.png",
    "/img/brand-logo/5.png",
    "/img/brand-logo/1.png",
    "/img/brand-logo/2.png",
    "/img/brand-logo/4.png",
    "/img/brand-logo/3.png",
    "/img/brand-logo/5.png",
    "/img/brand-logo/1.png",
    "/img/brand-logo/2.png",
    "/img/brand-logo/4.png",
    "/img/brand-logo/3.png",
    "/img/brand-logo/5.png",
    "/img/brand-logo/1.png",
    "/img/brand-logo/2.png",
    "/img/brand-logo/4.png",
    "/img/brand-logo/3.png",
    "/img/brand-logo/5.png",
]
</script>