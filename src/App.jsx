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
  },
  {
    id:2,
    name: "Utahraptor",
    ImgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFxHZmC8FntUiOrSZFXJEr_nbq-bZVtoZzA&usqp=CAU",
    description : "Utahraptor est un genre éteint de dinosaures à plumes, des théropodes de la famille des Dromaeosauridae du Crétacé inférieur. Utahraptor est l'un des plus grands droméosauridés connus. Sa taille est estimée à 7 mètres de long, 1,8 mètre de haut à la hanche et sa masse à un peu moins de 500 kg.",
  },
  {
    id:3,
    name: "Diplodocus",
    ImgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Bq9x5Dhz7Q24z5sayX_phz2xUqBjb6pG8w&usqp=CAU",
    description : "Diplodocus est un genre éteint de très grands dinosaures herbivores sauropodes de la famille des diplodocidés ayant vécu au Jurassique supérieur. C'est un très grand quadrupède au long cou, avec une longue queue en forme de fouet. Ses membres antérieurs sont légèrement plus courts que ses membres postérieurs, ce qui lui donnait une posture horizontale.",
  },
  {
    id:3,
    name: "Muttaburrasaure",
    ImgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Muttaburrasaurus_NT.jpg/640px-Muttaburrasaurus_NT.jpg",
    description : "Muttaburrasaurus est un genre éteint de dinosaure herbivore ornithopode du Crétacé inférieur proche d'Iguanodon. Il mesurait environ 9 mètres de long et pesait entre 2 et 3 tonnes.",
  },
  {
    id:4,
    name: "Ornithocheirus",
    ImgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Ornithocheirus_BW.jpg/640px-Ornithocheirus_BW.jpg",
    description : "Ornithocheirus est un genre éteint de ptérosaures du Crétacé, avec une envergure de 4 à 5 mètres, ce qui en ferait un ptérosaure de taille moyenne. Principalement piscivore et peut-être également carnivore il aurait pu être charognard lorsque l'occasion se présentait.",
  },
  {
    id:5,
    name: "Liopleurodon",
    ImgSrc: "https://www.alex-bernardini.fr/evolution/images/dinosaures/Liopleurodon.jpg",
    description : "Liopleurodon est un genre eteint de grands pliosaures ayant vécu durant le Jurassique moyen et supérieur, d'une longueur de 7 m et d'un poids de 3t. Les quatre membres solides en forme de pagaie suggèrent que Liopleurodon était un puissant nageur.",
  },
  {
    id:6,
    name: "Polacanthus",
    ImgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Polacanthus_foxii.jpg/800px-Polacanthus_foxii.jpg?20110320124352",
    description : "Polacanthus est un genre éteint de dinosaures ornithischiens herbivores de l'infra-ordre des ankylosauriens et de la famille des nodosauridés. Comme Ankylosaurus, Polacanthus était un quadrupède couvert de plaques osseuses dermiques dont certaines portaient des piquants ou épines. Des nodules osseux renforçaient sa peau.",
  },
  {
    id:7,
    name: "ceratosaure",
    ImgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Ceratosaurus_NT.jpg/640px-Ceratosaurus_NT.jpg",
    description : "Ceratosaurus est un genre de dinosaure théropode qui a vécu pendant le Jurassique supérieur. Il mesurait six mètres de long pour trois de haut et pesait environ 800 kg ; pour l'époque, c'était un prédateur de taille moyenne.",
  },
 ];

function App() {

  const [firstname, setFirstName] = useState ("Dark Abdou Chicken");

  return (
    <>
    <DinoHeader/>
    <HelloInput setFirstName={setFirstName}/>
    <HelloDisplay firstname={firstname}/>
    <DinoCard dinosaure={DinoList[0]}/>
    <DinoCard dinosaure={DinoList[1]}/>
    <DinoCard dinosaure={DinoList[2]}/>
    <DinoCard dinosaure={DinoList[3]}/>
    <DinoCard dinosaure={DinoList[4]}/>
    <DinoCard dinosaure={DinoList[5]}/>
    <DinoCard dinosaure={DinoList[6]}/>
    <DinoCard dinosaure={DinoList[7]}/>
    </>
    )
  }

export default App;