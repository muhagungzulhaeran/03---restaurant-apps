class HeroApp extends HTMLElement {
  constructor () {
    super()
    this.render()
  }

  render () {
    this.innerHTML = `
        <style>
            .hero {
              min-height: 200px;
              display: flex;
              min-width: 100%;
            }
            .hero picture {
              /* max-height: 200px; */
              display: flex;
              justify-content: center;
              align-items: center;
              min-width: 100%;
              overflow: hidden;
            }
        </style>
        <picture>
          <source media="(min-width: 800px)" srcset="./images/heros/hero-image_2-medium.jpg">
          <source media="(min-width: 1200px)" srcset="./images/heros/hero-image_2-large.jpg">
          <img class="lazyload" data-src="./images/heros/hero-image_2-small.jpg" alt="hero">
        </picture>
    `
  }
}

customElements.define('hero-app', HeroApp)
