import styles from './Feedback.module.css';

export default function Feedback({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div className={styles.stats}>
      <p>
        Good: <span className={styles.value}>{good}</span>
      </p>

      <p>
        Neutral: <span className={styles.value}>{neutral}</span>
      </p>

      <p>
        Bad: <span className={styles.value}>{bad}</span>
      </p>

      <p>
        Total: <span className={styles.value}>{totalFeedback}</span>
      </p>

      <p>
        Positive: <span className={styles.value}>{positiveFeedback}%</span>
      </p>
    </div>
  );
}