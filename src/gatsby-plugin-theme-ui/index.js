/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

const darkBlue = `#007acc`
// const lightBlue = `#66E0FF`
const blueGray = `#282c35`

const theme = {
    colors: {
        text: blueGray,
        primary: darkBlue,
        heading: blueGray,
    },
}

export default theme
