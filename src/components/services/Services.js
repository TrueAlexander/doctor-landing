import './Services.scss'
import 'animate.css'

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 data-heading="My Journey" class="section__title">Serviços</h2>

      <div className="container">
        <div className="services__box" id="box1">
          <div data-aos="fade-right" data-aos-duration="1800" className="services__item card option1">
            <div className="card__photo">
              <img src="#" alt="" className="card__image"/>
            </div>
            <div className="card__column">
              <div className="card__title">Title1</div>
              <div className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui, nemo ullam culpa veniam sit officiis amet error eius fugit itaque omnis dolorum magnam illo autem odit quas facilis numquam!
              </div>
            </div>
          </div>

            <div data-aos="fade-right" data-aos-duration="1800" className="services__item card option1">
            <div className="card__photo">
              <img src="#" alt="" className="card__image"/>
            </div>
            <div className="card__column">
              <div className="card__title">Title1</div>
              <div className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui, nemo ullam culpa veniam sit officiis amet error eius fugit itaque omnis dolorum magnam illo autem odit quas facilis numquam!
              </div>
            </div>
          </div>

          <div data-aos="fade-right" data-aos-duration="1800" className="services__item card option1">
            <div className="card__photo">
              <img src="#" alt="" className="card__image"/>
            </div>
            <div className="card__column">
              <div className="card__title">Title1</div>
              <div className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui, nemo ullam culpa veniam sit officiis amet error eius fugit itaque omnis dolorum magnam illo autem odit quas facilis numquam!
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>

  //   .services__box#box1
  //     div(data-aos="fade-right" data-aos-duration="1800").services__item.card.option1
  //       .card__photo
  //         img.card__image(src=require("../../../images/projetos.jpg") alt="PROJETOS E LEGALIZAÇÕES")
  //       .card__column
  //         .card__title PROJETOS E LEGALIZAÇÕES
  //         .card__description Trabalhamos com todos os tipos de projetos trazendo qualidade e segurança para sua obra, além de reduzir custos de construção. Trabalhamos com todos os tipos de laudos e projetos de prefeitura de início, fim e pós obra.
  //     div(data-aos="fade-left" data-aos-duration="1800").services__item.card
  //       .card__column
  //         .card__title CONSTRUÇÕES
  //         .card__description A Oliveira Serviços de Engenharia oferece aos clientes engenheiros especializados com habilidades para enfrentar vários desafios do cotidiano, diminuindo custos e adequando orçamento para sua realidade.
  //       .card__photo
  //         img.card__image(src=require("../../../images/construcoes.jpg") alt="CONSTRUÇÕES")      
  //     div(data-aos="fade-right" data-aos-duration="1800").services__item.card.option1      
  //       .card__photo
  //         img.card__image(src=require("../../../images/reformas.jpg") alt="REFORMAS")
  //       .card__column
  //         .card__title REFORMAS
  //         .card__description A Oliveira Serviços de Engenharia oferece aos clientes engenheiros especializados com habilidades para enfrentar vários desafios do cotidiano, diminuindo custos e adequando orçamento para sua realidade.
  //     div(data-aos="fade-left" data-aos-duration="1800").services__item.card
  //       .card__column 
  //         .card__title AUTOVISTORIA PREDIAL
  //         .card__description Todos os imóveis da cidade do Rio de Janeiro deverão realizar vistorias técnicas periódicas, com intervalos máximos de 05 (cinco) anos, verificando as condições de conservação e segurança. Base Legal Decreto n.º 37.426/13, Lei Complementar n.º 126/13 e Lei nº 6.400/13.
  //       .card__photo
  //         img.card__image(src=require("../../../images/autovistoria.jpg") alt="AUTOVISTORIA PREDIAL")  
  //     div(data-aos="fade-right" data-aos-duration="1800").services__item.card.option1
  //       .card__photo
  //         img.card__image(src=require("../../../images/impermeabilizacoes.jpg") alt="IMPERMEABILIZAÇÕES ")
  //       .card__column
  //         .card__title IMPERMEABILIZAÇÕES 
  //         .card__description A impermeabilização é um serviço técnico realizado através da aplicação de materiais resistentes nas superfícies formando uma membrana que pode variar 0,5 mm a 5 mm. Esta membrana contribui para a impermeabilidade da região fragilizada impedindo a ocorrência de infiltrações, raízes, fissuração, danos estruturais ou de demais contratempos consequentes seguindo o descrito na ABNT NBR 9574 e ABNT NBR 15575.
  //     div(data-aos="fade-left" data-aos-duration="1800").services__item.card
  //       .card__column 
  //         .card__title INSTALAÇÃO SPA E HIDROMASSAGENS
  //         .card__description Se esta procurando por uma banheira, ofurô ou SPA que atenda as suas necessidades, chegou ao lugar certo. Nossas banheiras possuem os mais diversos tamanhos e modelos que se adequam a sua necessidade.
  //       .card__photo
  //         img.card__image(src=require("../../../images/banheiros.jpg") alt="INSTALAÇÃO SPA E HIDROMASSAGENS")
  //   </div>
  )
}

export default Services
