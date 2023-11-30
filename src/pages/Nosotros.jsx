import './Nosotros.scss'

const Nosotros = () => {
  return (
    <>
      <div className="aboutUs">
      <section className="aboutUs__tittle-container">
        <h1 className="aboutUs__tittle">SOBRE NOSOTROS</h1>
      </section>

      <div className="aboutUs__container-block">
        <img
          className="aboutUs__mainImg"
          src="img/Logo.png"
          alt="Imágen no disponible"
        />
        <div className="aboutUs__allText aboutUs__aboveText">
          <h1 className="aboutUs__text-blk aboutUs__headingText">
            NUESTRA EMPRESA
          </h1>
          <p className="aboutUs__text-blk aboutUs__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illum
            nemo tempore molestiae quae quidem ex saepe, ea dolore. Porro nihil
            ut accusantium excepturi sapiente neque inventore voluptatum iste
            odio hic dolorem maiores temporibus rem corporis delectus magnam
            tenetur, error ex aspernatur! Id accusantium deleniti consectetur
            deserunt amet, saepe quasi veritatis pariatur nostrum animi
            repellendus aspernatur ducimus quae consequatur quo laborum in?
            Culpa architecto neque at alias ad in praesentium repellat saepe
            nisi, distinctio numquam optio maiores similique accusamus? Eum!
          </p>
        </div>
      </div>

      <div className="aboutUs__container-block aboutUs__bottomContainer">
        <img
          className="aboutUs__mainImg"
          src="img/Logo.png"
          alt="Imágen no disponible"
        />
        <div className="aboutUs__allText aboutUs__bottomText">
          <h1 className="aboutUs__text-blk aboutUs__headingText">NUESTRA MISIÓN</h1>
          <p className="aboutUs__text-blk aboutUs__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Fugiat aliquam perferendis sunt quas consequuntur tempora autem
            ducimus accusantium debitis quidem fugit aperiam animi, quae,
            corporis nihil vel a unde ex magni quaerat modi. Ratione tenetur
            omnis numquam nisi repellat assumenda quod molestias nostrum,
            facilis corporis hic minus at labore deserunt.
          </p>
        </div>
      </div>

      <div className="aboutUs__container-block">
        <img
          className="aboutUs__mainImg"
          src="img/Logo.png"
          alt="Imágen no disponible"
        />
        <div className="aboutUs__allText aboutUs__aboveText">
          <h1 className="aboutUs__text-blk aboutUs__headingText">NUESTRA VISIÓN</h1>
          <p className="text-blk aboutUs__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            fugiat veritatis culpa harum excepturi sequi at nesciunt consequatur
            quidem expedita.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Nosotros