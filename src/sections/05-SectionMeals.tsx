// react
import { useGetMeals } from '../hooks/useGetMeals';
// components
import { Flame, UtensilsCrossed, Star } from 'lucide-react';
import HeadingPrimary, { Heading } from '../components/HeadingPrimary';
import List from '../components/List';
import Loader from '../components/Loader';
import Message from '../components/Message';
import styles from './05-SectionMeals.module.css';
// esle
import { type MealT } from '../types/types';

export default function SectionMeals() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <HeadingPrimary subHeading='Meals' centerText>
          Omnifood AI chooses from 5,000+ recipes
        </HeadingPrimary>

        <Meals />

        <div className='text-center'>
          <a className={styles.recipesLink} href='#'>
            See all recipes &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

function Meals() {
  const { meals, isLoading, error } = useGetMeals();

  if (isLoading) return <Loader />;
  if (error) return <Message>{error.message}</Message>;

  return (
    <div className={styles.meals}>
      {meals?.map(meal => (
        <Meal meal={meal} key={meal.title} />
      ))}

      <DietsList />
    </div>
  );
}

function Meal({ meal }: { meal: MealT }) {
  const { title, img, calories, nutriScore, rating, numReviews, tags } = meal;

  return (
    <figure className={styles.meal}>
      <img className={styles.img} src={img} />

      <div className={styles.textBox}>
        <div className={styles.tags}>
          {tags.map(({ name, color }) => (
            <span className={styles.tag} style={{ backgroundColor: color }} key={name}>
              {name}
            </span>
          ))}
        </div>

        <p className={styles.title}>{title}</p>

        <ul className={styles.attributes}>
          <li className={styles.attribute}>
            <Flame color='#e67e22' size={24} strokeWidth={1.8} />
            <span>
              <strong>{calories}</strong> calories
            </span>
          </li>
          <li className={styles.attribute}>
            <UtensilsCrossed color='#e67e22' size={24} strokeWidth={1.8} />
            <span>
              NutriScore ® <strong>{nutriScore}</strong>
            </span>
          </li>
          <li className={styles.attribute}>
            <Star color='#e67e22' size={24} strokeWidth={1.8} />
            <span>
              <strong>{rating}</strong> ({numReviews})
            </span>
          </li>
        </ul>
      </div>
    </figure>
  );
}

function DietsList() {
  const diets = [
    'Vegetarian',
    'Vegan',
    'Pescatarian',
    'Gluten-free',
    'Lactose-free',
    'Lactose-free',
    'Paleo',
    'Low FODMAP',
    'Kid-friendly',
  ];

  return (
    <div>
      <Heading type='h3'>Works with any diet:</Heading>
      <List items={diets} />
    </div>
  );
}
