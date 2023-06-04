import './App.css'
import { useState } from 'react'
import HelloDisplay from './components/HelloDisplay.jsx';
import HelloInput from './components/HelloInput';

const DinoList = [
  {
    name: "Tyrannausaure-Rex",
    ImgSrc: "https://static.nationalgeographic.fr/files/styles/image_3200/public/01-trex-scotty_publicity_websize-credit-beth-zaiken.jpg?w=1600",
    description : "Tyrannosaure rex, communément appelé T-rex, est un genre éteint de dinosaures théropodes appartenant à la famille des Tyrannosauridae. T-rex était un carnassier bipède doté d'un crâne massif équilibré par une longue queue puissante.",
  },
  {
    name: "Utahraptor",
    ImgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFxHZmC8FntUiOrSZFXJEr_nbq-bZVtoZzA&usqp=CAU",
    description : "Utahraptor est un genre éteint de dinosaures à plumes, des théropodes de la famille des Dromaeosauridae du Crétacé inférieur. Utahraptor est l'un des plus grands droméosauridés connus. Sa taille est estimée à 7 mètres de long, 1,8 mètre de haut à la hanche et sa masse à un peu moins de 500 kg.",
  },
  {
    name: "Diplodocus",
    ImgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Bq9x5Dhz7Q24z5sayX_phz2xUqBjb6pG8w&usqp=CAU",
    description : "Diplodocus est un genre éteint de très grands dinosaures herbivores sauropodes de la famille des diplodocidés ayant vécu au Jurassique supérieur. C'est un très grand quadrupède au long cou, avec une longue queue en forme de fouet. Ses membres antérieurs sont légèrement plus courts que ses membres postérieurs, ce qui lui donnait une posture horizontale.",
  },
  {
    name: "Muttaburrasaure",
    ImgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Muttaburrasaurus_NT.jpg/640px-Muttaburrasaurus_NT.jpg",
    description : "Muttaburrasaurus est un genre éteint de dinosaure herbivore ornithopode du Crétacé inférieur proche d'Iguanodon. Il mesurait environ 9 mètres de long et pesait entre 2 et 3 tonnes.",
  },
  {
    name: "Ornithocheirus",
    ImgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Ornithocheirus_BW.jpg/640px-Ornithocheirus_BW.jpg",
    description : "Ornithocheirus est un genre éteint de ptérosaures du Crétacé, avec une envergure de 4 à 5 mètres, ce qui en ferait un ptérosaure de taille moyenne. Principalement piscivore et peut-être également carnivore il aurait pu être charognard lorsque l'occasion se présentait.",
  },
  {
    name: "Liopleurodon",
    ImgSrc: "https://www.alex-bernardini.fr/evolution/images/dinosaures/Liopleurodon.jpg",
    description : "Liopleurodon est un genre eteint de grands pliosaures ayant vécu durant le Jurassique moyen et supérieur, d'une longueur de 7 m et d'un poids de 3t. Les quatre membres solides en forme de pagaie suggèrent que Liopleurodon était un puissant nageur.",
  },
  {
    name: "Polacanthus",
    ImgSrc: "https://commons.wikimedia.org/wiki/File:Polacanthus_foxii.jpg",
    description : "Polacanthus est un genre éteint de dinosaures ornithischiens herbivores de l'infra-ordre des ankylosauriens et de la famille des nodosauridés. Comme Ankylosaurus, Polacanthus était un quadrupède couvert de plaques osseuses dermiques dont certaines portaient des piquants ou épines. Des nodules osseux renforçaient sa peau.",
  },
  {
    name: "ceratosaure",
    ImgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Ceratosaurus_NT.jpg/640px-Ceratosaurus_NT.jpg",
    description : "Ceratosaurus est un genre de dinosaure théropode qui a vécu pendant le Jurassique supérieur. Il mesurait six mètres de long pour trois de haut et pesait environ 800 kg ; pour l'époque, c'était un prédateur de taille moyenne.",
  },
 ];

function App() {
  const [firstname, setFirstName] = useState ("Dark Abdou Chicken");

  return (<>
      <h1>Code qui peut</h1>
      <HelloInput setFirstName={setFirstName}/>
      <HelloDisplay firstname={firstname}/>
    </>);
}

export default App;
