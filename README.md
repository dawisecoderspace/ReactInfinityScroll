# ReactInfinityScroll

A React component to create an infinite scroll with a smooth, endless loop effect.

## Features
- Infinite scrolling loop that seamlessly wraps around.
- Smooth transition effect when scrolling.
- Fully customizable with different content and styles.
- Easy integration into any React project.


## Installation

To install the package, use npm or yarn:

```bash
npm install react-infinity-scroll
or
yarn add react-infinity-scroll
```




# Usage

Here’s a quick example of how to use the component in your React project:

```jsx
import React, { useState, useRef } from 'react';
import ReactInfinityScroll from 'react-infinity-scroll';

const items = [
  { name: 'Item 1', img: 'img1.png', article: 'Description 1' },
  { name: 'Item 2', img: 'img2.png', article: 'Description 2' },
  { name: 'Item 3', img: 'img3.png', article: 'Description 3' },
  { name: 'Item 4', img: 'img4.png', article: 'Description 4' }
];

function App() {
  return <ReactInfinityScroll items={items} width={360} />;
}

export default App;
```


## Props:
- items (Array): The array of items to display in the scroller. Each item should contain a name, img, and article property.
- width (Number): The width of each item in the scroller (defaults to 360).


## Demo
You can view a demo of this component in action by visiting the repository's [GitHub page](https://github.com/dawisecoderspace/ReactInfinityScroll.git) or checking out the live demo link (if available).



## Contributing
If you'd like to contribute to the development of **ReactInfinityScroll**, feel free to fork this repository and make a pull request.


## Steps to contribute:
1. Fork this repository.
2. Clone your fork locally and create a new branch.
3. Implement your changes or improvements.
4. Commit your changes and push them to your fork.
5. Create a pull request with a detailed description of your changes.



## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.






# Français:

## ReactInfinityScroll
Un composant React pour créer un défilement infini avec un effet fluide et sans fin.


## Fonctionnalités
- Défilement infini en boucle sans interruption.
- Transitions fluides lors du défilement.
- Personnalisable avec différents contenus et styles.
- Facile à intégrer dans n'importe quel projet React.


## Installation
Pour installer le package, utilisez npm ou yarn:

```bash
npm install react-infinity-scroll
yarn add react-infinity-scroll
```




# Utilisation
Voici un exemple rapide de comment utiliser le composant dans votre projet React:

```jsx
import React, { useState, useRef } from 'react';
import ReactInfinityScroll from 'react-infinity-scroll';

const items = [
  { name: 'Article 1', img: 'img1.png', article: 'Description 1' },
  { name: 'Article 2', img: 'img2.png', article: 'Description 2' },
  { name: 'Article 3', img: 'img3.png', article: 'Description 3' },
  { name: 'Article 4', img: 'img4.png', article: 'Description 4' }
];

function App() {
  return <ReactInfinityScroll items={items} width={360} />;
}

export default App;
```


## Props:
- items (Array) : Le tableau d'articles à afficher dans le scroller. Chaque article doit contenir une propriété name, img, et article.
- width (Number) : La largeur de chaque élément dans le scroller (par défaut 360).


## Démo
Vous pouvez voir une démo de ce composant en action en visitant la page [GitHub du repository](https://github.com/dawisecoderspace/ReactInfinityScroll.git) ou en consultant le lien de la démo en ligne (si disponible).


## Contribuer
Si vous souhaitez contribuer au développement de **ReactInfinityScroll**, n'hésitez pas à forker ce repository et à faire une demande de pull.


## Étapes pour contribuer:
1. Forkez ce repository.
2. Clonez votre fork localement et créez une nouvelle branche.
3. Implémentez vos changements ou améliorations.
4. Commitez vos changements et poussez-les vers votre fork.
5. Créez une pull request avec une description détaillée de vos changements.



## Licence
Ce projet est sous la licence MIT - consultez le fichier [LICENSE](LICENSE) pour plus de détails.