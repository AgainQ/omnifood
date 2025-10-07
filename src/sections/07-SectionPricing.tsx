import HeadingPrimary from '../components/HeadingPrimary';
import List from '../components/List';
import Button from '../components/Button';
import styles from './07-SectionPricing.module.css';
import clsx from 'clsx';

type PricingPlanT = {
  name: string;
  price: number;
  pricePerMeal: string;

  mealsPerDay: string;
  orderTime: string;
  deliveryPrice: string;
  latestRecipes: string;
};

const pricingPlans: PricingPlanT[] = [
  {
    name: 'starter',
    price: 399,
    pricePerMeal: 'per month. That is just $13 per meal!',
    mealsPerDay: '1 meal per day',
    orderTime: 'Order from 11am to 9pm',
    deliveryPrice: 'Delivery is free',
    latestRecipes: '',
  },
  {
    name: 'complete',
    price: 649,
    pricePerMeal: 'per month. That is just $11 per meal!',
    mealsPerDay: '2 meals per day',
    orderTime: 'Order 24/7',
    deliveryPrice: 'Delivery is free',
    latestRecipes: 'Get access to latest recipes',
  },
];

export default function SectionPricing() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <HeadingPrimary subHeading='Pricing'>
          Eating well without breaking the bank
        </HeadingPrimary>

        <div className={styles.pricingPlans}>
          {pricingPlans.map(plan => (
            <PricingPlan pricingPlan={plan} key={plan.name} />
          ))}
        </div>

        <p className={styles.info}>
          Prices include all applicable taxes. You can cancel at any time. Both plans
          include the following:
        </p>
      </div>
    </section>
  );
}

function PricingPlan({ pricingPlan }: { pricingPlan: PricingPlanT }) {
  // prettier-ignore
  const { name, price, pricePerMeal, mealsPerDay, orderTime, deliveryPrice, latestRecipes } =
    pricingPlan;
  const listItems = [mealsPerDay, orderTime, deliveryPrice, latestRecipes];

  return (
    <figure className={clsx(styles.pricingPlan, styles[name])}>
      <header className={styles.header}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>
          <span>$</span>
          {price}
        </p>
        <p className={styles.pricePerMeal}>{pricePerMeal}</p>
      </header>

      <List items={listItems} />

      <div className={styles.btnBox}>
        <Button type='primary'>Start eating well</Button>
      </div>
    </figure>
  );
}
