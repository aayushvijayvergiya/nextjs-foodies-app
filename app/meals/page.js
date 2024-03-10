import { Suspense } from "react";
import Link from "next/link";

import Loading from './loading-out';
import classes from "./page.module.css";
import MealsGrid from "@/components/Meals/MealsGrid";

import { getMeals } from "@/lib/meals";

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant and lovely community.',
};

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<Loading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
