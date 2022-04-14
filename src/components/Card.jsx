

function Card(content) {
    console.log("content: ", content.content.image.src);
    return (
        <>
            <a className="card-container" href={content.content.href} target="_blank">
                <img 
                    className="card-image" 
                    src={content.content.image.href} 
                    alt={content.content.image.alt}
                />
                <p className="card-title">{content.content.name}</p>
                <p className="card-description">{content.content.description}</p>
            </a>
        </>
    );
}

export default Card;