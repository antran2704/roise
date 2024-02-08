const debounce = (callback,timer) => {
  return setTimeout(async () => {
    return await callback();
  }, timer);
};

export default debounce;
