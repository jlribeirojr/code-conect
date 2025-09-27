import Image from "next/image";
import { Avatar } from "../Avatar";
import Styles from "./cardpost.module.css";
import Link from "next/link";

export const CardPost = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`} className={Styles.Link}>
      <div>
        <article className={Styles.card}>
          <header className={Styles.header}>
            <figure>
              <Image
                src={post.cover}
                width={438}
                height={133}
                alt={`Capa do post do titulo: ${post.title}`}
              />
            </figure>
          </header>
          <section>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            texto
          </section>
          <footer className={Styles.footer}>
            <Avatar imageSrc={post.author.avatar} name={post.author.username} />
          </footer>
        </article>
      </div>
    </Link>
  );
};
