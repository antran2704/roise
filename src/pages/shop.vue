<template>
    <!-- BREADCRUMB AREA START -->
    <Breadcrumb title="Shop" :list="[{ label: 'Trang Chủ', path: '/' }, { label: 'Shop' }]" />
    <!-- BREADCRUMB AREA END -->

    <!-- PRODUCT DETAILS AREA START -->
    <div class="ltn__product-area ">
        <div class="container">
            <div class="row">
                <div class="col-12 order-lg-2 mb-100">
                    <div class="ltn__shop-options">
                        <ul>
                            <li>
                                <div class="showing-product-number text-right">
                                    <span>Showing {{ (current_page * PAGE_SIZE) > products.length ? products.length :
                                        current_page * PAGE_SIZE }} of {{ products.length }} results</span>
                                </div>
                            </li>
                            <li>
                                <div class="position-relative widget ltn__search-widget">
                                    <form @submit.prevent="() => {
                                        onSearch(0);
                                    }">
                                        <input v-model.trim="searchText" @input="() => {
                                            onSearch(600);
                                        }" type="text" name="search" placeholder="Tìm kiếm...">
                                        <button type="button" @click="() => {
                                            onSearch(0);
                                        }"><i class="icon-magnifier"></i></button>

                                    </form>
                                    <button v-if="searchText" @click="onClearSearch " class="ltn__utilize-close">×</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div v-if="!message" class="tab-content">
                        <div class="tab-pane fade active show" id="liton_product_grid">
                            <div class="ltn__product-tab-content-inner ltn__product-grid-view">
                                <ProductRow title="Sản phẩm" :items="showProducts" :isLoading="isLoading" />
                            </div>
                        </div>
                    </div>

                    <Pagination v-if="products.length > PAGE_SIZE && showProducts.length > 0" :currentPage="current_page"
                        :totalItems="products.length" :pageSize="PAGE_SIZE" :onClick="onClick" />
                </div>
            </div>
            <div v-if="message" class="row">
                <div class="col-12">
                    <div class="section-title-area text-center">
                        <h1 class="section-title section-title-border">{{ message }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- PRODUCT DETAILS AREA END -->
    <Brand />
</template>

<script setup>
import debounce from '~/utils/debouce';

let searchTimer;

const route = useRoute();
const router = useRouter();
const query = route.query;
const runtimeConfig = useRuntimeConfig();

const showProducts = ref([]);
const products = ref([])
const isLoading = ref(true);
const searchText = ref(query.search ? query.search : null);
const PAGE_SIZE = 6;
const current_page = ref(query.page ? Number(query.page) : 1);

const message = ref(null);

const onClearSearch = () => {
    searchText.value = null;
    onSearch(0);
}

const onClick = (page) => {
    if (message.value) {
        message.value = null;
    }

    router.replace({ path: route.fullPath, query: { ...route.query, page } })
    showProducts.value = products.value.slice((page - 1) * PAGE_SIZE, PAGE_SIZE * page)
    current_page.value = page;
    scroll({ top: 400, behavior: "smooth" })
}

const getProducts = async () => {
    isLoading.value = true;

    if (message.value) {
        message.value = null;
    }


    try {
        const res = await $fetch(`${runtimeConfig.public.apiEndpoint}/products`);
        // const res = await $fetch(`${runtimeConfig.public.apiEndpoint}/product`);
        if (res) {
            products.value = res;
            const items = res.slice((current_page.value - 1) * PAGE_SIZE, PAGE_SIZE * current_page.value);

            if (items.length <= 0) {
                message.value = "Không tìm thấy sản phẩm";
            }

            showProducts.value = res.slice((current_page.value - 1) * PAGE_SIZE, PAGE_SIZE * current_page.value);
        }
    } catch (error) {
        products.value = []
        showProducts.value = []
        message.value = "Không tìm thấy sản phẩm";
    }

    isLoading.value = false;
}

const onSearch = (timmer) => {
    if (searchTimer) {
        clearTimeout(searchTimer);
    }

    if (!searchText.value) {
        searchTimer = debounce(() => getProducts(), 0);
        router.replace({ path: route.fullPath })
        current_page.value = 1;
        return;
    }

    searchTimer = debounce(() => handleSearch(searchText.value), timmer);
    router.replace({ path: route.fullPath, query: { search: searchText.value } })
    current_page.value = 1;
}

const handleSearch = async (search) => {
    isLoading.value = true;

    if (message.value) {
        message.value = null;
    }

    try {

        const res = await $fetch(`${runtimeConfig.public.apiEndpoint}/products?search=${search}`);
        // const res = await $fetch(`${runtimeConfig.public.apiEndpoint}/product/search`, {
        //     method: 'POST',
        //     body: { searchText: search }
        // });

        if (res) {
            products.value = res;
            const items = res.slice((current_page.value - 1) * PAGE_SIZE, PAGE_SIZE * current_page.value)

            if (items.length <= 0) {
                message.value = "Không tìm thấy sản phẩm";
            }

            showProducts.value = items;
        }
    } catch (error) {
        products.value = [];
        showProducts.value = [];
        message.value = "Không tìm thấy sản phẩm";
    }

    isLoading.value = false;
}

onMounted(() => {
    if (query.search) {
        handleSearch(query.search);
    } else {
        getProducts();
    }
})

</script>