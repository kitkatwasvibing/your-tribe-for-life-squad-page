
## Inhoudsopgave 

1. Installatie instructies
2. Beschrijving
3. Gebruik
4. Bronnen
5. Designkeuzes
6. Kenmerken
7. Code conventies
8. Contributing.md

# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.17.0 create --template minimal --no-types --install npm .
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Squadpage Adeptus technicus

De website is een Squad Page waarop alle studenten binnen de squad worden weergegeven. Bezoekers kunnen een student selecteren via de student cards, waarna in het detailscherm meer informatie over de gekozen student wordt getoond.

De website is bedoeld voor studenten en bezoekers van de squad. Het doel is om op een overzichtelijke manier snel meer informatie over een specifieke student te kunnen bekijken.

### Mockups

## Gebruik 

De gebruiker bekijkt de student cards en klikt op een student om in het detailscherm meer informatie over deze persoon te bekijken. Ook kan de gebruiker externe links bekijken zoals github pagina en profile card.

## Designkeuzes

We hebben gekozen voor een DS Display Design met een speelse en visuele uitstraling. Het ontwerp is gericht op het op een leuke en aantrekkelijke manier presenteren van de studenten. Hierbij hebben we verschillende visuele elementen en interactieve onderdelen gebruikt om de Squad Page meer karakter te geven.

<img width="517" height="600" alt="image" src="https://github.com/user-attachments/assets/08a9c0e3-efc8-4378-9f67-1b5876f41de5" />


## Kenmerken 

- **SvelteKit**
- **Directus API** 
- **Svelte components**
- **Responsive CSS**
- **Dynamic routing**

## Code conventies 

https://github.com/kitkatwasvibing/your-tribe-for-life-squad-page/blob/main/CONTRIBUTING.md

