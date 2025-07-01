import React from "react";
import { useLanguage } from "./context/LanguageContext"; // Ajusta la ruta si hace falta

function Media() {
  const { t } = useLanguage();

  return (
    <section className="w-full max-w-4xl mx-auto pb-12 px-6 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center uppercase text-red-700">
        {t("media.title")}
      </h2>
      <p className="text-lg leading-relaxed mb-8 text-center">
        {t("media.description.part1")}{" "}
        <strong>Sferenet</strong>, <strong>Santa Fe</strong> y <strong>Djsmash</strong>,{" "}
        {t("media.description.part2")}{" "}
        {t("media.description.part3")}
        <br />
        {t("media.description.part4")} <strong>Vilchez</strong> {t("media.description.part5")} <strong>Dani</strong>,{" "}
        {t("media.description.part6")}
      </p>
      <div
        className="relative w-full rounded-lg overflow-hidden shadow-md"
        style={{ paddingBottom: "56.25%", height: 0 }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/PQuYj31A0yY"
          title="BlackMesa Collective - Media"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default Media;
