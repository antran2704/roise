export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event);

  const res = await $fetch(`${runtimeConfig.public.apiEndpoint}/product`);

  return res
});
