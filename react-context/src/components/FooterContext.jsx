import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

const FooterContext = () => {
  const { theme } = useContext(ThemeContext);
  const languageContextValue = useContext(LanguageContext);

  console.log("LanguageContext en FooterContext:", languageContextValue);

  if (!languageContextValue) {
    // Manejar el caso cuando LanguageContext no está disponible
    return <div>Error: LanguageContext no está disponible.</div>;
  }

  const { texts } = languageContextValue;

  return (
    <footer className={theme}>
      <h4>{texts.footerTitle}</h4>
    </footer>
  );
};

export default FooterContext;
