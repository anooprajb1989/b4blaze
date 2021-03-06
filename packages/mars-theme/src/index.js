import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";
import script from "@frontity/html2react/processors/script";
import menuHandler from './components/handlers/menu-handler';
import { categoriesWidgetsHome } from './config'

const beforeSSR = async ({ state, libraries, actions }) => {
  // Add image processor.
  libraries.html2react.processors.push(image);

  // Add the nameAndDescription handler.
  libraries.source.handlers.push({
    name: "nameAndDescription",
    priority: 10,
    pattern: "nameAndDescription",
    func: async ({ route, state, libraries }) => {
      // 1. Get response from api endpoint.
      const response = await libraries.source.api.get({
        endpoint: "/" // "/" is added after "/wp-json" so final url is "/wp-json/"
      });

      // 2. Extract relevant data from the response.
      const { name, description } = await response.json();
      await Promise.all(
        Object.keys(categoriesWidgetsHome)
          .map(category => actions.source.fetch(`/category/${category}/`))
      )
      // 3. Add it to the source.data object.
      state.source.data[route].name = name;
      state.source.data[route].description = description;
    }
  });

  // Fetch the wp-json endpoint.
  await actions.source.fetch(`/menu/${state.theme.menuUrl}/`);
  await actions.source.fetch("nameAndDescription");
  
};

const beforeCSR = ({ libraries }) => {
  // Add image processor.
  libraries.html2react.processors.push(image);
};

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     * In Frontity, any package can add React components to the site.
     * We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      menuUrl: "main",
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      beforeSSR: beforeSSR,
      beforeCSR: beforeCSR,
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link, script],
    },
    source: {
      handlers: [menuHandler],
    }
  },
};

export default marsTheme;
