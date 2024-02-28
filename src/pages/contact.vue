<template>
    <Seo title="Liên hệ" description="Description contact" :canonical="`${runtimeConfig.public.domain}/about`"
        picture="product.Picture" />


    <Breadcrumb title="Liên Hệ" :list="[{ label: 'Home', path: '/' }, { label: 'Liên Hệ' }]" />

    <!-- FEATURE AREA START ( Feature - 3) -->
    <div class="ltn__contact-address-area pt-30 pb-30">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="ltn__contact-address-item ltn__contact-address-item-4 box-shadow">
                        <div class="ltn__contact-address-icon">
                            <i class="icon-location-pin"></i>
                        </div>
                        <h3>Địa chỉ</h3>
                        <p>{{ runtimeConfig.public.address }}
                        </p>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="ltn__contact-address-item ltn__contact-address-item-4 box-shadow">
                        <div class="ltn__contact-address-icon">
                            <i class="icon-phone"></i>
                        </div>
                        <h3>Số điện thoại</h3>
                        <p>+{{ runtimeConfig.public.phoneNumber }}
                        </p>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="ltn__contact-address-item ltn__contact-address-item-4 box-shadow">
                        <div class="ltn__contact-address-icon">
                            <i class="icon-envelope"></i>
                        </div>
                        <h3>Email & Web</h3>
                        <p>kinhdoanh@noiygiasi.vn</p>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="ltn__contact-address-item ltn__contact-address-item-4 box-shadow">
                        <div class="ltn__contact-address-icon">
                            <i class="icon-speedometer"></i>
                        </div>
                        <h3>Giờ mở cửa</h3>
                        <p>Thứ 2 đến thứ 6: <br> 6:00 đến 20:00
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- FEATURE AREA END -->

    <!-- BRAND LOGO AREA START -->
    <Brand />
    <!-- BRAND LOGO AREA END -->
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
</script>