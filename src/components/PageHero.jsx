export default function PageHero({ title, image, children }) {
  return (
    <section className="page-hero" data-theme="dark">
      <img className="page-hero__media" src={image} alt="" />
      <div className="container page-hero__content">
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  )
}
