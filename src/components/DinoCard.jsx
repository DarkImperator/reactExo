import './DinoCard.css';

const DinoCard = ({dinosaure}) => {
    return (
        <>
        <div className='dinoX'>
            <img className='dinopict' src = {dinosaure.ImgSrc} alt = {dinosaure.name} />
            <figcaption>{dinosaure.name}</figcaption>
            <p className='descrip'>{dinosaure.description}</p>
        </div>
        </>
    )
 }

export default DinoCard;