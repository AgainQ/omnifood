// sections
import Navigation from '../sections/01-Navigation';
import SectionHero from '../sections/02-SectionHero';
import SectionFeatured from '../sections/03-SectionFeatured';
import SectionHow from '../sections/04-SectionHow';
import SectionMeals from '../sections/05-SectionMeals';
import SectionTestimonials from '../sections/06-SectionTestimonials';
import SectionPricing from '../sections/07-SectionPricing';
import SectionFeatures from '../sections/08-SectionFeatures';
import SectionCta from '../sections/09-SectionCta';
import Footer from '../sections/10-Footer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <SectionHero />
      <SectionFeatured />
      <SectionHow />
      <SectionMeals />
      <SectionTestimonials />
      <SectionPricing />
      <SectionFeatures />
      <SectionCta />
      <Footer />
    </>
  );
}
