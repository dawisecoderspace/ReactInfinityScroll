# ReactInfinityScroll - Documentation


## 1. Installation
To install the package, use one of the following commands:

```bash
npm install react-infinity-scroll
yarn add react-infinity-scroll
```


## 2. Example Usage
Here’s a basic example of how to use the component in your React project:

```jsx
import React from 'react';
import ReactInfinityScroll from 'react-infinity-scroll';

const items = [
  { name: 'Item 1', img: 'img1.png', article: 'Description 1' },
  { name: 'Item 2', img: 'img2.png', article: 'Description 2' },
  { name: 'Item 3', img: 'img3.png', article: 'Description 3' }
];

function App() {
  return <ReactInfinityScroll items={items} width={360} />;
}

export default App;
```


## 3. Advanced Customization

You can customize various aspects of the component, such as the card's background color, image size, text size, etc. Below is an example of how you can achieve that:


```jsx
import React from 'react';
import ReactInfinityScroll from 'react-infinity-scroll';

const items = [
  { name: 'Item 1', img: 'img1.png', article: 'Description 1' },
  { name: 'Item 2', img: 'img2.png', article: 'Description 2' },
  { name: 'Item 3', img: 'img3.png', article: 'Description 3' }
];

function App() {
  return (
    <ReactInfinityScroll
      items={items}
      width={400}
      scrollerHeight={500}
      cardBgColor="#f0f0f0"
      cardNameColor="#333"
      cardImgSize="60%"
      cardTextColor="#222"
      articleFontSize="14px"
    />
  );
}

export default App;
```


## 4. Additional Features
- **Smooth Scrolling:** The scroll transitions smoothly from one card to another.
- **Looping:** The scrolling is infinite and wraps around when you reach the end.


## 5. License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



***


# ReactInfinityScroll - Documentation


## 1. Installation
Pour installer le package, utilisez l'une des commandes suivantes :

```bash
npm install react-infinity-scroll
yarn add react-infinity-scroll
```


## 2. Exemple d'utilisation
Voici un exemple simple de comment utiliser le composant dans votre projet React:

```jsx
import React from 'react';
import ReactInfinityScroll from 'react-infinity-scroll';

const items = [
  { name: 'Article 1', img: 'img1.png', article: 'Description 1' },
  { name: 'Article 2', img: 'img2.png', article: 'Description 2' },
  { name: 'Article 3', img: 'img3.png', article: 'Description 3' }
];

function App() {
  return <ReactInfinityScroll items={items} width={360} />;
}

export default App;
```


## 3. Personnalisation avancée
Vous pouvez personnaliser divers aspects du composant, tels que la couleur d'arrière-plan de la carte, la taille de l'image, la taille du texte, etc. Voici un exemple de personnalisation avancée :

```jsx
import React from 'react';
import ReactInfinityScroll from 'react-infinity-scroll';

const items = [
  { name: 'Article 1', img: 'img1.png', article: 'Description 1' },
  { name: 'Article 2', img: 'img2.png', article: 'Description 2' },
  { name: 'Article 3', img: 'img3.png', article: 'Description 3' }
];

function App() {
  return (
    <ReactInfinityScroll
      items={items}
      width={400}
      scrollerHeight={500}
      cardBgColor="#f0f0f0"
      cardNameColor="#333"
      cardImgSize="60%"
      cardTextColor="#222"
      articleFontSize="14px"
    />
  );
}

export default App;
```


## 4. Fonctionnalités supplémentaires
- **Défilement fluide:** Les transitions de défilement sont douces, ce qui permet une expérience utilisateur agréable.
- **Boucle infinie:** Le défilement est infini et revient au début une fois qu'il atteint la fin.



## 5. License
Ce projet est sous la licence MIT - consultez le fichier [LICENSE](LICENSE) pour plus de détails.
