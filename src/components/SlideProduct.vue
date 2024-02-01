<template>
    <div class="ltn__product-slider-area ltn__product-gutter pt-60 pb-40">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-area text-center">
                        <h1 class="section-title section-title-border">top products</h1>
                    </div>
                </div>
            </div>
            <div class="">
                <Product v-for="item in 6" :key="item" />
            </div>
        </div>
    </div>
</template>