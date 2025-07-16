import styles from "./Post.module.css";

export function Post(params) {
  const { author, body } = params;
  return (
    <li className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}> {body}</p>
    </li>
  );
}
