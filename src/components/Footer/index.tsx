import style from './style.min.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>
        <a href="assets/Politica-de-Privacidade.pdf">Politica de privacidade</a> -{' '}
        <a href="/Termos-e-condicoes.pdf">Termos de uso</a>
      </p>
      <p>Desenvolvido por Hydrah Tecnologia - todos os direitos reservados</p>
    </footer>
  );
};
export default Footer;
