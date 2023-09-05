import React, { useEffect } from 'react';
import { Poster, HeroContent, Name, Goat, Profession, Afirmacion, ImgHero, ImgPoster } from ".";
import { Typewriter } from 'react-simple-typewriter'
// Effecto de la imagen + estructura 
function Hero() {
    useEffect(() => {
        const el = document.getElementById('poster');
        const height = el.clientHeight;
        const width = el.clientWidth;

        el.addEventListener('mousemove', (e) => {
            const { layerX, layerY } = e;
            const yRotation = ((layerX - width / 2) / width) * 6;
            const xRotation = ((layerY - height / 2) / height) * 6;
            const string = `perspective(400px) scale(1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
            el.style.transform = string;
        });

        el.addEventListener('mouseout', () => {
            el.style.transform = `perspective(500px) scale(1) rotateX(0) rotateY(0)`;
        });
    }, []);

    return (
        <HeroContent>
            <div>
                <Name>Hi, I'm <Goat>Deyverson Herrera</Goat></Name>
                {/* Frontend Developer<Blinker>|</Blinker> */}
                <Profession><Goat>a</Goat> <Typewriter words={['Profesional Coder', 'Frontend Developer',]}
                    loop={5}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    /> 
                </Profession>
                <Afirmacion>Como un tejedor de codigos en el vasto lienzo digital, encuentro inspiracion <br /> en la tecnologia para dar vida a mundos completamente nuevos. 
                <br />¡El universo digital aguarda nuestra imaginacion sin limites!</Afirmacion>
            </div>
            <ImgPoster>
                <Poster id="poster"> <ImgHero src="/img/code.jpg" alt="Imagen Code" /> </Poster>
            </ImgPoster>
            
        </HeroContent>
    );
}
export default Hero;