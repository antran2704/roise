<template>
    <div>
        <!-- Utilize Mobile Menu Start -->
        <div id="ltn__utilize-mobile-menu" class="ltn__utilize ltn__utilize-mobile-menu">
            <div class="ltn__utilize-menu-inner ltn__scrollbar">
                <div class="ltn__utilize-menu-head">
                    <div class="site-logo">
                        <NuxtLink to="/">
                            <img src="/img/logo.png" alt="Logo" title="Logo" width="auto" height="auto" loading="lazy" />
                        </NuxtLink>
                    </div>
                    <button class="ltn__utilize-close">×</button>
                </div>
                <div class="ltn__utilize-menu-search-form">
                    <form action="#">
                        <input type="text" placeholder="Search...">
                        <button><i class="icon-magnifier"></i></button>
                    </form>
                </div>
                <div class="ltn__utilize-menu">
                    <ul>
                        <li>
                            <a href="/">Trang Chủ</a>
                        </li>
                        <li>
                            <a href="/contact">About Us</a>
                        </li>
                        <li>
                            <a href="/">Cửa Hàng</a>
                            <ul class="sub-menu">
                                <li><a href="/shop">Shop</a></li>
                                <li><a href="/shop">Shop Grid</a></li>
                                <li><a href="/shop">Shop Left sidebar</a></li>
                                <li><a href="/shop">Shop right sidebar</a></li>
                                <li><a href="/shop">Shop details </a></li>
                                <li><a href="/shop">Cart</a></li>
                                <li><a href="/shop">Wishlist</a></li>
                                <li><a href="/shop">Checkout</a></li>
                                <li><a href="/shop">Order Tracking</a></li>
                                <li><a href="/shop">My Account</a></li>
                                <li><a href="/shop">Sign in</a></li>
                                <li><a href="/shop">Register</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/">News</a>
                            <ul class="sub-menu">
                                <li><a href="/">News</a></li>
                                <li><a href="/">News Grid</a></li>
                                <li><a href="/">News Left sidebar</a></li>
                                <li><a href="/">News Right sidebar</a></li>
                                <li><a href="/">News details</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/">Pages</a>
                            <ul class="sub-menu">
                                <li><a href="/contact">About Us</a></li>
                                <li><a href="/">Portfolio</a></li>
                                <li><a href="/">Portfolio - 02</a></li>
                                <li><a href="/">Portfolio Details</a></li>
                                <li><a href="/">FAQ</a></li>
                                <li><a href="/">Google Map Locations</a></li>
                                <li><a href="/404">404</a></li>
                                <li><a href="/contact">Contact</a></li>
                                <li><a href="/">Coming Soon</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/contact">Liên Hệ</a>
                        </li>
                    </ul>
                </div>
                <div class="ltn__social-media-2">
                    <ul>
                        <li><a href="#" title="Facebook"><i class="icon-social-facebook"></i></a></li>
                        <li><a href="#" title="Twitter"><i class="icon-social-twitter"></i></a></li>
                        <li><a href="#" title="Pinterest"><i class="icon-social-pinterest"></i></a></li>
                        <li><a href="#" title="Instagram"><i class="icon-social-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Utilize Mobile Menu End -->

        <div class="ltn__utilize-overlay"></div>
    </div>
</template>