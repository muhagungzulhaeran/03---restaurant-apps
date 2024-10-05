class FooterApp extends HTMLElement {
  constructor () {
    super()
    this.render()
  }

  render () {
    this.innerHTML = `
      <style>
        footer-app {
          display: flex;
          background: #424242;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 70px;
          color: #efefef;
        }
        footer-app .title {
          width: 100%;
          color: #efefef;
          font-size: 1.25rem;
        }
      </style>
      <h1 class="title">Copyright &copy;2024 - Agung Restoran Nusantara</h1>
      `
  }
}

customElements.define('footer-app', FooterApp)
