import React from 'react'

function Article({title,date,preview}) {
  return (
    <div>
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    </div>
  )
}

Article.defaultProps = {
    date: "January 1, 1970",
}

export default Article