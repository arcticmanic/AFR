import LazyLoad from 'vanilla-lazyload'

const lazyLoading = () => {
  const lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
    use_native: true,
  })

  const lazyLoadInstanceInText = new LazyLoad({
    elements_selector: '.text img',
    use_native: true,
  })
}

export default lazyLoading
