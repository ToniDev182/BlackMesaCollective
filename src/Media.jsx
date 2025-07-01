// app/components/Media.tsx
import React from "react";

function Media() {
  return (
    <section className="w-full max-w-4xl mx-auto pb-12 px-6 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center uppercase text-red-700">
        Media
      </h2>
      <p className="text-lg leading-relaxed mb-8 text-center">
        BlackMesa Collective nace de la mano de <strong>Sferenet</strong>, <strong>Santa Fe</strong> y <strong>Djsmash</strong>, 
        con el sencillo sueño de ver a sus amigos unidos por la música, como todos estos años atrás. 
        Poco a poco, este sueño se ha ido convirtiendo en un movimiento que une no solo a músicos, sino también 
        a colegas que aportan lo que pueden: ya sea de forma presencial, económica o con sus conocimientos.
        <br />
        Esta sinergia ha atraído a técnicos de sonido como <strong>Vilchez</strong> y técnicos de luces como <strong>Dani</strong>, 
        que también pululan entre las sombras de BlackMesa, haciendo que todo esto sea posible.
      </p>
     <div className="relative w-full rounded-lg overflow-hidden shadow-md" style={{ paddingBottom: "56.25%", height: 0 }}>
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
