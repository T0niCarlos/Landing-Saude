import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background: #f0f4f8; /* Fundo mais suave */
  color: #009688;
  padding: 40px 20px; /* Espaçamento maior para mais clareza */
  text-align: center;
  position: relative;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil na parte superior */
`;

const FooterTitle = styled.h3`
  margin-bottom: 20px;
  color: #009688;
  font-size: 2em; /* Tamanho de fonte maior para destaque */
  font-weight: 600; /* Fonte em negrito */
  transition: color 0.3s ease; /* Transição suave para mudanças de cor */
  
  &:hover {
    color: #00796b; /* Cor de destaque ao passar o mouse */
  }
`;

const FooterText = styled.p`
  font-size: 1.2em;
  color: #666; /* Cor mais suave para o texto */
  margin-top: 20px;
  transition: color 0.3s ease; /* Transição suave para mudanças de cor */
  
  &:hover {
    color: #009688; /* Cor de destaque ao passar o mouse */
  }
`;

const MapEmbed = styled.iframe`
  width: 100%;
  height: 300px;
  border: none;
  border-radius: 15px; /* Bordas arredondadas mais acentuadas */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra mais pronunciada */
  margin-bottom: 20px;
  transition: transform 0.3s ease; /* Transição suave para efeitos de hover */
  
  &:hover {
    transform: scale(1.02); /* Efeito de zoom suave ao passar o mouse */
  }
`;

const Footer = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.716829909929!2d-43.31359352390416!3d-22.8499637358443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997c98903eb679%3A0x45f0e513c1f9128d!2sCarioca%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1708015310855!5m2!1spt-BR!2sbr";

  return (
    <FooterSection>
      <FooterTitle>Onde Estamos</FooterTitle>
      <MapEmbed src={mapSrc} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></MapEmbed>
      <FooterText>
        <p>&copy; DEV - Antônio Carlos. Todos os direitos reservados.</p>
      </FooterText>
    </FooterSection>
  );
};

export default Footer;
