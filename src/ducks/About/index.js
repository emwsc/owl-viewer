import React from "react";
import { StyledAboutWrapper } from "./styled";
import { LanguageConsumer } from "../../common/LanguageContenxt";

const EngAbout = () => (
  <StyledAboutWrapper>
    <article>
      Just a place where you can watch some overwatch league games and don't
      worry about spoilers
    </article>
    <article>
      If you have any questions or want to contact me for any reason you can
      send me email to contact@owlv.space
    </article>
    <article>
      OW icon in favicone - <a href="http://ic8.link/43388">ic8.link/43388</a>
    </article>
    <br />
    <article>
      Cheers{" "}
      <span role="img" ariaLabel="Cheers">
        ✌️
      </span>
    </article>
  </StyledAboutWrapper>
);

const RuAbout = () => (
  <StyledAboutWrapper>
    <article>
      Просто место, где можно посмотреть записи игр OWL без спойлеров.
    </article>
    <article>
      Если у вас есть какие-либо вопросы или вы хотите мне написать по
      какой-либо причине, то отправьте ваше письмо по адресу contact@owlv.space
    </article>
    <article>
      Иконка Овервотча в фавиконе -{" "}
      <a href="http://ic8.link/43388">ic8.link/43388</a>
    </article>
    <br />
    <article>
      Удачи{" "}
      <span role="img" ariaLabel="Cheers">
        ✌️
      </span>
    </article>
  </StyledAboutWrapper>
);

const About = () => (
  <LanguageConsumer>
    {({ lang }) => (
      <React.Fragment>
        {lang === "en" && <EngAbout />}
        {lang === "ru" && <RuAbout />}
      </React.Fragment>
    )}
  </LanguageConsumer>
);

export default About;
