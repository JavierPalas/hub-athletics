import testimonial1 from './assets/testimonial-1.jpg';
import testimonial2 from './assets/testimonial-2.jpg';
import testimonial3 from './assets/testimonial-3.jpg';

export const mockData = {
  testimonials: [
    {
      id: 1,
      name: 'David Martinez',
      role: "Half Ironman - 4h 47'",
      quote: 'David venia de haber dejado el deporte y de una etapa marcada por habitos poco saludables, con una perdida progresiva de ambicion y confianza. En Hub entendio el papel que el deporte puede tener en su vida, alineando su dia a dia con objetivos concretos.',
      image: testimonial1
    },
    {
      id: 2,
      name: 'Mario Lanceta',
      role: "Maraton - 3h 10'",
      quote: 'Mario procede del deporte de equipo a alto nivel durante su infancia, partiendo de una buena base fisica pero sin experiencia en deportes de resistencia. En Hub afronto el reto de debutar en maraton, estructurando su entrenamiento y su enfoque.',
      image: testimonial2
    },
    {
      id: 3,
      name: 'Miguel Torres',
      role: 'Ingeniero de Software',
      quote: 'Buscaba estructura y metodo. Hub Athletics me dio un sistema completo para optimizar mi rendimiento fisico y mental. Progreso real, no promesas.',
      image: testimonial3
    }
  ],

  hubLabBenefits: [
    {
      id: 1,
      title: 'Metodologia estructurada',
      description: 'Sistema probado que combina entrenamiento fisico, habitos y mentalidad. Progreso medible en cada sesion.'
    },
    {
      id: 2,
      title: 'Entrenamiento personalizado',
      description: 'Programas adaptados a tu nivel actual y objetivos especificos. Cuerpo y mente trabajando en sincronia.'
    },
    {
      id: 3,
      title: 'Comunidad comprometida',
      description: 'Rodeate de personas ambiciosas con mentalidad de crecimiento. Accountability y apoyo mutuo.'
    },
    {
      id: 4,
      title: 'Coaching continuo',
      description: 'Acompanamiento constante para mantener el rumbo. Ajustes estrategicos basados en tus resultados.'
    }
  ],

  socialLinks: {
    instagram: 'https://www.instagram.com/hubathletics/',
    youtube: 'https://www.youtube.com/@hubathletics',
    linkedin: ''
  }
};
