
import type { NuxtLink } from '#build/components';
<template>
     <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="ltn__product-item text-center">
                        <div class="product-img">
                            <NuxtLink to="product/1"><img src="/img/product/1.png" alt="#"></NuxtLink>
                            <div class="product-badge">
                                <ul>
                                    <li class="badge-2">10%</li>
                                </ul>
                            </div>
                            <div class="product-hover-action product-hover-action-2">
                                <ul>
                                    <li>
                                        <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                            <i class="icon-magnifier"></i>
                                        </a>
                                    </li>
                                    <li class="add-to-cart">
                                        <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                            <span class="cart-text d-none d-xl-block">Thêm Vào Giỏ</span>
                                            <span class="d-block d-xl-none"><i class="icon-handbag"></i></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                            <i class="icon-shuffle"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-info">
                            <h2 class="product-title"><a href="product-details.html">Hoa Hồng</a></h2>
                            <div class="product-price">
                                <span>$18.00</span>
                                <del>$21.00</del>
                            </div>
                        </div>
                    </div>
                </div>
</template>