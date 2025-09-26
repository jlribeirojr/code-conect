import { CardPost } from "@/components/CardPost";
import logger from "@/logger";

// const post = {

// }

async function getAllPosts() {
  const response = await fetch('http://localhost:3042/posts')
  if(!response.ok){
    logger.error("algo deu muito errado")
    return []
  }
  logger.info('Posts obtidos com sucesso!')
  return response.json()
}

export default async function Home() {
  const posts = await getAllPosts()
  return(
    <main>
      {posts.map(post => <CardPost key={post.id} post={post}/> )}
    </main>
    );
}
