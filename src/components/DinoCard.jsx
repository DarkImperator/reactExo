import './DinoCard.css';

const DinoCard = ({dinosaure}) => {
    return (
        <>
        <div className='dinoX'>
            <div>
            <img className='dinopict' src = {dinosaure.ImgSrc} alt = {dinosaure.name} />
            </div>
            <figcaption>{dinosaure.name}</figcaption>
            <p className='descrip'>{dinosaure.description}</p>
        </div>
        </>
    )
 }

export default DinoCard;