import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export default function SearchResult({title, thumbnail, platform, game_url, isSaved}) {

    return (
        <div className="search-result">
            <img src={thumbnail} alt="thumbnail" className="search-result__thumbnail" />

            <div className="search-result__body">
                <h2>
                    <a href={game_url} target="_blank" className="search-result__title">
                    {title}
                    </a>
                </h2>
                <span>{platform}</span>
            </div>

            {isSaved ?
                <AiFillHeart className="search-result__heart" /> :
                <AiOutlineHeart className="search-result__heart" />
            }
        </div>
    )
}