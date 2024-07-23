import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/img/image1.jpg';
import image2 from '../assets/img/image2.jpg';
import image3 from '../assets/img/image3.jpg';
import image4 from '../assets/img/image4.jpg';

const ServicesSection = styled.section`
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  background: #f0f4f8; /* Fundo suave */
  border-radius: 10px; /* Borda arredondada */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
`;

const ServicesTitle = styled.h2`
  margin-bottom: 20px;
  color: #009688;
  font-size: 2em; /* Tamanho do texto aumentado */
  transition: color 0.3s ease; /* Transição suave na cor */
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.2); /* Transparente */
  border: none; /* Sem borda */
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  overflow: hidden; /* Garantir que nada extravase o contêiner */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-10px); /* Elevação ao passar o mouse */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px; /* Ajuste a altura conforme necessário */
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 15px; /* Espaço entre imagem e título */
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05); /* Zoom ao passar o mouse */
  }
`;

const CardTitle = styled.h3`
  margin-top: 15px;
  font-size: 1.5em;
  color: #009688;
`;

const CardContent = styled.p`
  margin-top: 10px;
  font-size: 1em;
  color: #333;
`;

const servicesData = [
  {
    title: 'Consulta de Clínica Geral',
    description: 'Oferecemos consultas completas para avaliação e diagnóstico de diversas condições de saúde.',
    image: image1,
  },
  {
    title: 'Acompanhamento Preventivo',
    description: 'Acompanhamento regular para prevenção de doenças e manutenção da saúde.',
    image: image2,
  },
  {
    title: 'Exames de Rotina',
    description: 'Realização de exames laboratoriais e de imagem para monitoramento da saúde.',
    image: image3,
  },
  {
    title: 'Consultoria em Saúde',
    description: 'Orientação e aconselhamento sobre práticas saudáveis e qualidade de vida.',
    image: image4,
  },
];

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <ServicesSection id="services">
      <ServicesTitle>Nossos Serviços</ServicesTitle>
      <Slider {...settings}>
        {servicesData.map((service, index) => (
          <Card key={index}>
            <CardImageContainer>
              <CardImage src={service.image} alt={service.title} />
            </CardImageContainer>
            <CardTitle>{service.title}</CardTitle>
            <CardContent>{service.description}</CardContent>
          </Card>
        ))}
      </Slider>
    </ServicesSection>
  );
};

export default Services;
