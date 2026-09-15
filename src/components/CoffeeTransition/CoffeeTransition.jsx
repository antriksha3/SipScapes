import styles from './CoffeeTransition.module.css';

/**
 * CoffeeTransition
 * The signature interaction: three rust/gold/coffee rings ripple outward
 * on every navigation instead of a generic spinner. Purely presentational —
 * `isFiring` is driven by useCoffeeRipple(), which listens to route changes.
 */
export default function CoffeeTransition({ isFiring }) {
  return (
    <div
      className={`${styles.ripple} ${isFiring ? styles.firing : ''}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100">
        <circle className={styles.ring} cx="50" cy="50" r="46" />
        <circle className={styles.ring} cx="50" cy="50" r="46" />
        <circle className={styles.ring} cx="50" cy="50" r="46" />
      </svg>
    </div>
  );
}
