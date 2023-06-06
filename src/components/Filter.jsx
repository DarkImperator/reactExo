import './Filter.css';

const Filter = ({dinos, setDinos, DinoList}) => {
    const handleClickType = () => {
        const rep = prompt("Sur quel paramètre voulez-vous faire le tri ? (Terrestre ? Aquatique ? Aerien ?)");
        switch (rep) {
            case "Terrestre" :
                setDinos(dinos.filter((din => // Au lieu de 'dinos', on peut mettre DinoList mais les filtres ne se cumuleront
                    din.type === "Terrestre")
                ));
                break;
            case "Aquatique" :
                setDinos(dinos.filter((din => 
                    din.type === "Aquatique")
                ));
                break;
            case "Aérien" :
                setDinos(dinos.filter((din => 
                    din.type === "Aérien")
                ));
                break;
            default :
                null;
                break;
        }
    }   

    const handleClickAlim = () => {
        const rep = prompt("Sur quel paramètre voulez-vous faire le tri ? (Carnivore ? Végétale ? Piscivore ?)");
        switch (rep) {
            case "Carnivore" :
                setDinos(dinos.filter((din => 
                    din.alim === "Carnivore")
                ));
                break;
            case "Végétale" :
                setDinos(dinos.filter((din => 
                    din.alim === "Végétale")
                ));
                break;
            case "Piscivore" :
                setDinos(dinos.filter((din => 
                    din.alim === "Piscivore")
                ));
                break;
            default :
                null;
                break;
        }
    }

    const handleClickPost = () => {
        const rep = prompt("Sur quel paramètre voulez-vous faire le tri ? (Bipède ? Quadrupède ? Volant ? Nageant ?)");
        switch (rep) {
            case "Bipède" :
                setDinos(dinos.filter((din => 
                    din.posture === "Bipède")
                ));
                break;
            case "Quadrupède" :
                setDinos(dinos.filter((din => 
                    din.posture === "Quadrupède")
                ));
                break;
            case "Volant" :
                setDinos(dinos.filter((din => 
                    din.posture === "Volant")
                ));
                break;
            case "Nageant" :
            setDinos(dinos.filter((din => 
                din.posture === "Nageant")
            ));
            break;
            default :
                null;
                break;
        }
    }

    const handleClickTaille = () => {
        const rep = prompt("Sur quel paramètre voulez-vous faire le tri ? (Grande ? Moyenne ? Petite ?)");
        switch (rep) {
            case "Grande" :
                setDinos(dinos.filter((din => 
                    din.taille === "Grande")
                ));
                break;
            case "Moyenne" :
                setDinos(dinos.filter((din => 
                    din.taille === "Moyenne")
                ));
                break;
            case "Petite" :
                setDinos(dinos.filter((din => 
                    din.taille === "Petite")
                ));
                break;
            default :
                null;
                break;
        }
    }

    const handleClickReset = () => {
        setDinos(DinoList);
    }

    return (
        <>
        <div className="boutt">
            <button onClick={handleClickType}>Type</button>
            <button onClick={handleClickAlim}>Alimentation</button>
            <button onClick={handleClickPost}>Posture</button>
            <button onClick={handleClickTaille}>Taille</button>
        </div>
        <div className="boutt">
        <button onClick={handleClickReset}>Reset</button>
        </div>
        </>
    )
}

export default Filter;
