import DinoHeader from './components/DinoHeader';
import HelloInput from './components/HelloInput';
import HelloDisplay from './components/HelloDisplay';
import DinoCard from './components/DinoCard';
import { useState } from 'react';

import './App.css'

const DinoList = [
  {
    id:1,
    name: "Tyrannausaure-Rex",
    ImgSrc: "https://static.nationalgeographic.fr/files/styles/image_3200/public/01-trex-scotty_publicity_websize-credit-beth-zaiken.jpg?w=1600",
    description : "Tyrannosaure rex, communément appelé T-rex, est un genre éteint de dinosaures théropodes appartenant à la famille des Tyrannosauridae. T-rex était un carnassier bipède doté d'un crâne massif équilibré par une longue queue puissante.",
    type: "Terrestre",
    alim: "Carnivore",
    posture: "Bipède",
    taille: "Grande",
  },
  {
    id:2,
    name: "Utahraptor",
    ImgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFxHZmC8FntUiOrSZFXJEr_nbq-bZVtoZzA&usqp=CAU",
    description : "Utahraptor est un genre éteint de dinosaures à plumes, des théropodes de la famille des Dromaeosauridae du Crétacé inférieur. Utahraptor est l'un des plus grands droméosauridés connus. Sa taille est estimée à 7 mètres de long, 1,8 mètre de haut à la hanche et sa masse à un peu moins de 500 kg.",
    type: "Terrestre",
    alim: "Carnivore",
    posture: "Bipède",
    taille: "Petite",
  },
  {
    id:3,
    name: "Diplodocus",
    ImgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Bq9x5Dhz7Q24z5sayX_phz2xUqBjb6pG8w&usqp=CAU",
    description : "Diplodocus est un genre éteint de très grands dinosaures herbivores sauropodes de la famille des diplodocidés ayant vécu au Jurassique. C'est un très grand quadrupède au long cou et une longue queue en forme de fouet. Sa grande taille peut avoir été un système de dissuasion contre les attaques de prédateurs.",
    type: "Terrestre",
    alim: "Végétale",
    posture: "Quadrupède",
    taille: "Grande",
  },
  {
    id:4,
    name: "Muttaburrasaure",
    ImgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Muttaburrasaurus_NT.jpg/640px-Muttaburrasaurus_NT.jpg",
    description : "Muttaburrasaurus est un genre éteint de dinosaure herbivore ornithopode du Crétacé inférieur proche d'Iguanodon. Il mesurait environ 9 mètres de long et pesait entre 2 et 3 tonnes.",
    type: "Terrestre",
    alim: "Végétale",
    posture: "Quadrupède, Bipède",
    taille: "Moyenne",
  },
  {
    id:5,
    name: "Ornithocheirus",
    ImgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Ornithocheirus_BW.jpg/640px-Ornithocheirus_BW.jpg",
    description : "Ornithocheirus est un genre éteint de ptérosaures du Crétacé, avec une envergure de 4 à 5 mètres, ce qui en ferait un ptérosaure de taille moyenne. Principalement piscivore et peut-être également carnivore il aurait pu être charognard lorsque l'occasion se présentait.",
    type: "Aérien",
    alim: "Piscivore",
    posture: "Volant",
    taille: "Moyenne",
  },
  {
    id:6,
    name: "Liopleurodon",
    ImgSrc: "https://www.alex-bernardini.fr/evolution/images/dinosaures/Liopleurodon.jpg",
    description : "Liopleurodon est un genre éteint de grands pliosaures ayant vécu durant le Jurassique moyen et supérieur, d'une longueur de 7 m et d'un poids de 3t. Les quatre membres solides en forme de pagaie suggèrent que Liopleurodon était un puissant nageur.",
    type: "Aquatique",
    alim: "Carnivore",
    posture: "Nageant",
    taille: "Grande",
  },
  {
    id:7,
    name: "Polacanthus",
    ImgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Polacanthus_foxii.jpg/800px-Polacanthus_foxii.jpg?20110320124352",
    description : "Polacanthus est un genre éteint de dinosaures ornithischiens herbivores de l'infra-ordre des ankylosauriens et de la famille des nodosauridés. Comme Ankylosaurus, Polacanthus était un quadrupède couvert de plaques osseuses dermiques dont certaines portaient des piquants ou épines. Des nodules osseux renforçaient sa peau.",
    type: "Terrestre",
    alim: "Végétale",
    posture: "Quadrupède",
    taille: "Moyenne",
  },
  {
    id:8,
    name: "Ceratosaure",
    ImgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Ceratosaurus_NT.jpg/640px-Ceratosaurus_NT.jpg",
    description : "Ceratosaurus est un genre éteint de dinosaure théropode qui a vécu pendant le Jurassique. Il mesurait six mètres de long pour trois de haut et pesait environ 800 kg. Pour l'époque, c'était un prédateur de taille moyenne.",
    type: "Terrestre",
    alim: "Carnivore",
    posture: "Bipède",
    taille: "Moyenne",
  },
 ];

function App() {

  const [firstname, setFirstName] = useState("Dark Abdou Chicken");
  const [dinos, setDinos] = useState(DinoList);
  // voir avec dinos
  const handleClickType = () => {
    setDinos(dinos.filter((din => 
      din.type === "Terrestre"
    )
  )) 
  }

  const handleClickReset = () => {
    setDinos(DinoList);
  }

  return (
    <>
    <DinoHeader/>
    <HelloInput setFirstName={setFirstName}/>
    <HelloDisplay firstname={firstname}/>
    <section className='place'>
      {dinos.map((dino) => {
        return <DinoCard dinosaure={dino} key={dino.id}/>
        })
      }
    </section>
    <div className="boutt">
        <button onClick={handleClickType}>Type</button>
        <button>Alimentation</button>
        <button>Posture</button>
        <button>Taille</button>
    </div>
    <button onClick={handleClickReset}>Reset</button>
    </>
  )
}

export default App;