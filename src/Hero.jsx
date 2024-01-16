import heroImg from './assets/hero.svg'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            A powerful platform to manage your content in the cloud A powerful
            platform to manage your content in the cloud. A powerful platform to
            manage your content in the cloud. A powerful platform to manage your
            content in the cloud.
          </p>
        </div>
        <div className="image-container">
          <img src={heroImg} alt="hero.svg" className="img" />
        </div>
      </div>
    </section>
  )
}

export default Hero
