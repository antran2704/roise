<template>
    <div>
        <div class="ltn__slider-area ltn__slider-3 ltn__slider-6 section-bg-1">
            <div class="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1 arrow-white---">
                <Swiper :modules="[SwiperPagination, SwiperNavigation]" :slides-per-view="1" :loop="true" :navigation="{
                    enabled: true,
                    nextEl: btnNextRef,
                    prevEl: btnPrevtRef
                }" @before-init="(swiper) => {
    swiper.params.navigation.prevEl = btnPrevtRef;
    swiper.params.navigation.nextEl = btnNextRef;
}" :pagination="{ clickable: true, enabled: true }" :breakpoints="{ 1200: { pagination: { enabled: false } } }">
                    <button ref="btnPrevtRef" class="slick-prev slick-arrow">
                        <i class="icon-arrow-left" alt="Arrow Icon"></i>
                    </button>
                    <button ref="btnNextRef" class="slick-next slick-arrow">
                        <i class="icon-arrow-right" alt="Arrow Icon"></i>
                    </button>
                    <SwiperSlide v-slot="{ isActive }" v-for="(slide, index) in slides" :key="index"
                        class="ltn__slide-item ltn__slide-item-8 text-color-white---- bg-image bg-overlay-theme-black-80---"
                        :style="{ 'background-image': `url(${slide})` }">
                        <div class="ltn__slide-item-inner" :class="{ isActive }">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12 align-self-center">
                                        <div class="slide-item-info">
                                            <div class="slide-item-info-inner">
                                                <div class="slide-item-info">
                                                    <div class="slide-item-info-inner">
                                                        <h1 class="slide-title">Fresh Flower</h1>
                                                        <h6 class="slide-sub-title ltn__body-color slide-title-line">
                                                            Natural & Beautiful Flower Here</h6>
                                                        <div class="slide-brief">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                                sed
                                                                do
                                                                eiusmod tempor incididunt ut labore.</p>
                                                        </div>
                                                        <div class="btn-wrapper">
                                                            <a href="/" class="theme-btn-1 btn btn-round">Shop
                                                                Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

        <!-- FEATURE AREA START ( Feature - 3) -->
        <div class="ltn__feature-area mt-100 mt--65">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div
                            class="ltn__feature-item-box-wrap ltn__feature-item-box-wrap-2 ltn__border section-bg-6 position-relative">
                            <div class="ltn__feature-item ltn__feature-item-8 col-lg-3 col-md-6 col-sm-8 col-12">
                                <div class="ltn__feature-icon">
                                    <img src="/img/icons/svg/8-trolley.svg" alt="#">
                                </div>
                                <div class="ltn__feature-info">
                                    <h4>Miễn phí vận chuyển</h4>
                                    <p>Áp dụng cho hóa đơn từ $49.00</p>
                                </div>
                            </div>
                            <div class="ltn__feature-item ltn__feature-item-8 col-lg-3 col-md-6 col-sm-8 col-12">
                                <div class="ltn__feature-icon">
                                    <img src="/img/icons/svg/9-money.svg" alt="#">
                                </div>
                                <div class="ltn__feature-info">
                                    <h4>15 Ngày đổi trả</h4>
                                    <p>Hoàn tiền</p>
                                </div>
                            </div>
                            <div class="ltn__feature-item ltn__feature-item-8 col-lg-3 col-md-6 col-sm-8 col-12">
                                <div class="ltn__feature-icon">
                                    <img src="/img/icons/svg/10-credit-card.svg" alt="#">
                                </div>
                                <div class="ltn__feature-info">
                                    <h4>Thanh toán an toàn</h4>
                                    <p>Bằng Paypal</p>
                                </div>
                            </div>
                            <div class="ltn__feature-item ltn__feature-item-8 col-lg-3 col-md-6 col-sm-8 col-12">
                                <div class="ltn__feature-icon">
                                    <img src="/img/icons/svg/11-gift-card.svg" alt="#">
                                </div>
                                <div class="ltn__feature-info">
                                    <h4>Ưu đãi & Quà tặng</h4>
                                    <p>Cho tất cả đơn hàng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- BANNER AREA START -->
        <div class="ltn__banner-area  mt-80">
            <div class="container">
                <div class="row justify-content-center">
                    <BannerDiscount title="Banner Image" alt="Banner Image" src="/img/banner/1.jpg"
                        col="col-lg-4 col-md-6" />
                    <BannerDiscount title="Banner Image" alt="Banner Image" src="/img/banner/2.jpg"
                        col="col-lg-4 col-md-6" />
                    <BannerDiscount title="Banner Image" alt="Banner Image" src="/img/banner/3.jpg"
                        col="col-lg-4 col-md-6" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const btnPrevtRef = ref(null);
const btnNextRef = ref(null);

const slides = [
    '/img/slider/1.jpg',
    '/img/slider/3.jpg'
]

</script>