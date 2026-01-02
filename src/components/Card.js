import { storyblokEditable } from "@storyblok/react";
import './Card.css'

const Card = ({ blok }) => {

    const imageUrl = typeof blok.image === 'string'
        ? 'https:' + blok.image
        : blok.image?.filename 
            ? 'https:' + blok.image.filename
            : null;

    return (
        <a className='card-link' href='http://www.facebook.com'>

                <div {...storyblokEditable(blok)} 
                    className="card" 
                    style={{ backgroundColor: blok.background_color }}
                >
                    <h3 className='card-title'>{blok.title}</h3>
                    {imageUrl && (
                        <img 
                            src={imageUrl} 
                            alt={blok.title || 'Card image'} 
                            className="card-image"
                        />
                    )}
                    <div className='card-content'>{blok.content}</div>
                </div>

        </a>
    );
};

export default Card;