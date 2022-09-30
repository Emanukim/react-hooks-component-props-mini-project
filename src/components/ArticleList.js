import React from 'react'
import Article from './Article'




function ArticleList({posts}) {
console.log(posts);

const art = posts.map((post) => {
   return(
    <Article  title={post.title} date={post.date} preview={post.preview}      />
   ) });

  return (
    <div>
        <main>
            {art}
        </main>
    </div>
  );
}

export default ArticleList