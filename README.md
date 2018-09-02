# Re:Juice Me

A site to fuzzy search [Lincoln, NE JuiceStop](http://juicestoplincoln.com/) flavors by ingredients. The site is live at https://rejuice.me

![Demo of rejuice.me](https://github.com/ppoulsen/rejuice.me/raw/master/.github/demo.gif)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install node >= 6 from https://nodejs.org/en/download/
Install yarn for package management https://yarnpkg.com/en/docs/install

### Installing

A step by step series of examples that tell you how to get a development env running

Clone the repository

```
git clone https://github.com/ppoulsen/rejuice.me.git
```

Install dependencies in the client directory with `yarn`

```
cd client/
yarn
```

Run the development server! This will start it on http://localhost:3000

```
yarn start
```

## Building new list of smoothies

`buildData.js` is the file to build a new JSON file of ingredients for the client. Run it with node and copy the generated menu.json file to overwrite client/src/data/menu.json.

```
node buildData.js
mv menu.json client/src/data/menu.json
```

## Deployment

For deployment, first build the bundled and optimized version of the site from the client directory.

```
cd client/
yarn build
```

This builds static files in the public/ directory that can be deployed anywhere. I host the site on the `gh-pages` branch as a GitHub Page with a custom URL.

## Built With

* [create-react-app](https://github.com/facebook/create-react-app) - Create React apps with no build configuration
* [Node.js](https://nodejs.org/en/) - JavaScript Runtime
* [yarn](https://yarnpkg.com/en/) - Dependency management
* [GitHub Pages](https://pages.github.com/) - Web hosting
* [unstated](https://github.com/jamiebuilds/unstated) - State so simple, it goes without saying
* [cheerio](https://github.com/cheeriojs/cheerio) - Markup parsing and traversal
* [fuse.js](https://github.com/krisk/fuse) - Lightweight fuzzy-search
* [material-ui](https://github.com/mui-org/material-ui) - React components that implement Google's Material Design
* [react-flip-move](https://github.com/joshwcomeau/react-flip-move) - Effortless animation between DOM changes (eg. list reordering) using the FLIP technique

## Authors

* **Paul Poulsen** - *Initial work* - [ppoulsen](https://github.com/ppoulsen)

See also the list of [contributors](https://github.com/ppoulsen/mcelroyradio/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
