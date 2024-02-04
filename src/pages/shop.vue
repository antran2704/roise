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
                                    <span>Showing 9 of 20 results</span>
                                </div>
                            </li>
                            <li>
                                <div class="widget ltn__search-widget">
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
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content">
                        <div class="tab-pane fade active show" id="liton_product_grid">
                            <div class="ltn__product-tab-content-inner ltn__product-grid-view">
                                <ProductRow title="Sản phẩm" :items="showProducts" :isLoading="isLoading" />
                            </div>
                        </div>
                    </div>

                    <Pagination v-if="products.length > PAGE_SIZE" :currentPage="current_page" :totalItems="products.length"
                        :pageSize="PAGE_SIZE" :onClick="onClick" />
                </div>
            </div>
        </div>
    </div>
    <!-- PRODUCT DETAILS AREA END -->
    <Brand />
</template>

<script setup>
let searchTimer;

const route = useRoute();
const router = useRouter();
const query = route.query;
const runtimeConfig = useRuntimeConfig();

const showProducts = ref([]);
const products = ref([])
const isLoading = ref(true);
const searchText = ref(query.search ? query.search : null);
const PAGE_SIZE = 4;
const current_page = ref(query.page ? Number(query.page) : 1);

const onClick = (page) => {
    router.replace({ path: route.fullPath, query: { ...route.query, page } })
    showProducts.value = products.value.slice((page - 1) * PAGE_SIZE, PAGE_SIZE * page)
    current_page.value = page;
}

const debounce = (callback, timer) => {
    if (searchTimer) {
        clearTimeout(searchTimer);
    }

    searchTimer = setTimeout(async () => {
        return await callback();
    }, timer)
}

const getProducts = async () => {
    try {
        const res = await $fetch(`${runtimeConfig.public.apiEndpoint}/products`);
        if (res) {
            products.value = res;
            showProducts.value = res.slice((current_page.value - 1) * PAGE_SIZE, PAGE_SIZE * current_page.value);
        }
    } catch (error) {
        console.log(error)
        products.value = []
        showProducts.value = []
    }

    isLoading.value = false;
}

const onSearch = (timmer) => {
    if (!searchText.value) {
        debounce(() =>getProducts());
        router.replace({ path: route.fullPath})
        current_page.value = 1;
        return;
    }

    debounce(() => handleSearch(searchText.value), timmer);
    router.replace({ path: route.fullPath, query: { search: searchText.value } })
    current_page.value = 1;
}

const handleSearch = async (search) => {
    isLoading.value = true;

    try {

        const res = await $fetch(`${runtimeConfig.public.apiEndpoint}/products?search=${search}`);

        if (res) {
            products.value = res;
            showProducts.value = res.slice((current_page.value - 1) * PAGE_SIZE, PAGE_SIZE * current_page.value)
        }
    } catch (error) {
        console.log(error)
        products.value = []
        showProducts.value = [];
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