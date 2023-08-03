# FET-webpage redesign
Redesign of the [FET-webpage](https://fet.at).

## Installation process
This project uses npm and every change of TailwindCSS' preset classes requires a recompilation in order to only ship the used CSS classes.

### NodeJS
For the recompilation process it is required to have installed [NodeJS](https://nodejs.org) on your local machine where you want execute the compilation command. 

### Commands
There are different commands implemented which are located in the file `package.json`. All of those can be executed using `npm run <command_name>` where `<command_name>` is one of the commands listed below.

| command name | description                                                                                                                                                                                                                                                       |
|:-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `build`      | Searches for all used TailwindCSS-classes inside of the html, css and js-files and puts them into one single css-file. The resulting file is then placed inside `build/styles.css`. After compilation it watches the files and recompiles if one of them changed. |
| `build-once` | Does the same as `build` only once.                                                                                                                                                                                                                               |
| `bundle`     | Bundles all, via npm imported, js-files and scripts specified inside `dev/bundle.jsx` into one js-file and places it inside `build/vendor.js`. It uses [esbuild](https://esbuild.github.io/) under the hood.                                                      |

Be aware that after changing a css-class inside of a html-file you must recompile the css, otherwise there might be no changes if the class was not used anywhere else before. That's the result of bundling the js for minimal file-size.

## Finished pages
- [X] Startseite
- [X] Startseite mit Admin-Navbar
- [X] News
- [X] ↳ Article
- [X] Fachschaft
- [X] ↳ Member details page
- [X] Fotos 

  ↳ Requirements: [blueimp Gallery](https://github.com/blueimp/Gallery) as "gallery software"
- [X] Jobs
- [X] Login
- [X] Impressum
