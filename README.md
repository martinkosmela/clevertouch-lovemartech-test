# Description
 
Frontend of Love Martech landing page.

# Run the project

`cd your-project-name`

`npm install`

`npm start`

# Production

`npm run build`

## Nucleo Icons

Project has its own Nucleo Icons font. To upload new icons into a project you need to have NucleoApp installed. Remember to only add **_48x48_** grid size icons to the project.

To export icon-font icons:

1. Right click project you want to export.
2. Select `Icon Font` in top nav.
3. Enter name: `Martech Icons`
4. Leave `Base Class` as `icon`.
5. Leave `Class Prefix` as `icon-`.
6. Leave advanced options unchecked.
7. Export and copy `{generated_directory}/fonts` contents to the following directory: `/src/assets/icon-font/fonts`.
8. Copy `{generated_directory}/scss/icons.scss` file content and swap with `icons` section of `src\assets\scss\base\_icons.scss` file. 

### Usage

Add base class `icon` and specified name class `icon-{name}` to the element eg. `<i class="icon icon-arrow-top></i>`.