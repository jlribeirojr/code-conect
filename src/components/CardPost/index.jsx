import Image from "next/image"
import { Avatar } from "../Avatar"

export const CardPost = ({post}) =>{
    return(
        <div>
        <article>
            <header>
                <figure>
                    <Image src={post.cover} width={438} height={133} alt={`Capa do post do titulo: ${post.title}`}/>
                </figure>
            </header>
            <section>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                texto
            </section>
            <footer>
                <Avatar
                imageSrc={post.author.avatar}
                name={post.author.username}
                />
            </footer>
        </article>

        </div>
    )
}