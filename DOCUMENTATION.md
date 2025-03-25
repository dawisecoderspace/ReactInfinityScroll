# ReactInfinityScroll - Documentation


## 1. Installation
To install the package, use one of the following commands:

```bash
npm install wise-react-infinity-scroll
yarn add wise-react-infinity-scroll
```


## 2. Example Usage
Here’s a basic example of how to use the component in your React project:

```jsx
import React from 'react';
import ReactInfinityScroll from 'wise-react-infinity-scroll';

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

### Explanation
- **items:** An array of objects representing the items to be displayed in the infinity scroll. Each object can contain:

> - **name:** The name of the item (displayed in the card header).
> - **img:** The image URL for the item.
> - **article:** A short description or article text displayed under the image.
> - **link (optional):** A URL that the image will link to when clicked. If not provided, clicking the image will not perform any action.
> - **width:** The width of the scrollable container (in pixels).


## 3. Advanced Customization

You can customize various aspects of the component, such as the card's background color, image size, text size, and more. Below is an example of advanced customization:


```jsx
import React from 'react';
import ReactInfinityScroll from 'react-infinity-scroll';

const items = [
  { name: 'Item 1', img: 'img1.png', article: 'Description 1', link: 'https://example.com/1' },
  { name: 'Item 2', img: 'img2.png', article: 'Description 2' },
  { name: 'Item 3', img: 'img3.png', article: 'Description 3', link: 'https://example.com/3' }
];

function App() {
  return (
    <ReactInfinityScroll
      items={items}
      width={400}
      scrollerAspectRatio={4/3}
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


### Customization Options
- width: The width of the scrollable container (in pixels).
- scrollerAspectRatio: The aspect ratio for the scrollable container (default is 4/5).
- cardBgColor: The background color of each card.
- cardNameColor: The color of the card's name (header).
- cardImgSize: The size of the image within the card (can be a percentage like "50%").
- cardTextColor: The text color for the article text inside the card.
- articleFontSize: The font size for the article text inside the card.


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
npm install wise-react-infinity-scroll
yarn add wise-react-infinity-scroll
```


## 2. Exemple d'utilisation
Voici un exemple simple de comment utiliser le composant dans votre projet React:

```jsx
import React from 'react';
import ReactInfinityScroll from 'wise-react-infinity-scroll';

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


### Explication
- **items:** Un tableau d'objets représentant les éléments à afficher dans le défilement infini. Chaque objet peut contenir:
> - **name:** Le nom de l'élément (affiché dans l'en-tête de la carte).
> - **img:** L'URL de l'image pour l'élément.
> - **article:** Une courte description ou un texte d'article affiché sous l'image.
> - **link (optionnel):** Une URL vers laquelle l'image redirige lorsqu'elle est cliquée. Si ce champ est vide, aucun redirection ne sera effectuée lors du clic.
> - **width:** La largeur du conteneur défilable (en pixels).


## 3. Personnalisation avancée
Vous pouvez personnaliser divers aspects du composant, tels que la couleur d'arrière-plan de la carte, la taille de l'image, la taille du texte, et bien plus encore. Voici un exemple de personnalisation avancée:

```jsx
import React from 'react';
import ReactInfinityScroll from 'wise-react-infinity-scroll';

const items = [
  { name: 'Article 1', img: 'img1.png', article: 'Description 1', link: 'https://example.com/1' },
  { name: 'Article 2', img: 'img2.png', article: 'Description 2' },
  { name: 'Article 3', img: 'img3.png', article: 'Description 3', link: 'https://example.com/3' }
];

function App() {
  return (
    <ReactInfinityScroll
      items={items}
      width={400}
      scrollerAspectRatio={4/3}
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


### Options de personnalisation
- width: La largeur du conteneur défilable (en pixels).
- scrollerAspectRatio: Le ratio d'aspect pour le conteneur défilable (par défaut 4/5).
- cardBgColor: La couleur d'arrière-plan de chaque carte.
- cardNameColor: La couleur du nom de la carte (en-tête).
- cardImgSize: La taille de l'image dans la carte (peut être un pourcentage, par exemple "50%").
- cardTextColor: La couleur du texte de l'article dans la carte.
- articleFontSize: La taille de la police pour le texte de l'article dans la carte.


## 4. Fonctionnalités supplémentaires
- **Défilement fluide:** Les transitions de défilement sont douces, ce qui permet une expérience utilisateur agréable.
- **Boucle infinie:** Le défilement est infini et revient au début une fois qu'il atteint la fin.



## 5. License
Ce projet est sous la licence MIT - consultez le fichier [LICENSE](LICENSE) pour plus de détails.
