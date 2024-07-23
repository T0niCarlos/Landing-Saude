import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 80px; /* Ensure space from footer */
  background: linear-gradient(45deg, #e0f7fa, #b2ebf2);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ContactTitle = styled.h2`
  margin-bottom: 20px;
  color: #009688;
`;

const ContactText = styled.p`
  font-size: 1.2em;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin: 10px 0 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 300px;
  transition: box-shadow 0.3s;

  &:focus {
    box-shadow: 0 0 5px rgba(0, 150, 136, 0.5);
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 300px;
  height: 100px;
  transition: box-shadow 0.3s;

  &:focus {
    box-shadow: 0 0 5px rgba(0, 150, 136, 0.5);
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: #009688;
  color: white;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #00796b;
  }
`;

const Contact = () => (
  <ContactSection id="contact">
    <ContactTitle>Contato</ContactTitle>
    <ContactText>Entre em contato para agendar uma consulta ou tirar suas dúvidas.</ContactText>
    <ContactForm>
      <Label htmlFor="name">Nome</Label>
      <Input type="text" id="name" name="name" required />

      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" name="email" required />

      <Label htmlFor="message">Mensagem</Label>
      <Textarea id="message" name="message" required></Textarea>

      <Button type="submit">Enviar</Button>
    </ContactForm>
  </ContactSection>
);

export default Contact;
