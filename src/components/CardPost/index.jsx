import Image from "next/image";
import { Avatar } from "../Avatar";
import styles from "./cardpost.module.css";
import Link from "next/link";

export const CardPost = ({ post, highlight }) => {
  return (
    <Link href={`/posts/${post.slug}`} className={styles.Link}>
      <div>
         <article className={styles.card} style={{ width: highlight ? 993 : 486}}>
          <header className={styles.header}>
            <figure style={{ height: highlight ? 300 : 133}}>
              <Image
                src={post.cover}
                fill
                alt={`Capa do post do titulo: ${post.title}`}
              />
            </figure>
          </header>
          <section>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            texto
          </section>
          <footer className={styles.footer}>
            <Avatar imageSrc={post.author.avatar} name={post.author.username} />
          </footer>
        </article>
      </div>
    </Link>
  );
};
