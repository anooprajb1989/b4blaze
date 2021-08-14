const menuHandler = {
    name: "menus",
    priority: 10,
    // This pattern is the name you can later use in "actions.source.fetch"
    // to fetch the content or "state.source.get" to get the data.
    pattern: "/menu/:slug", 
    // This is the function triggered when you use:
    // actions.source.fetch("primaryMenu");
    func: async ({ link, params, state, libraries }) => {
        const { slug } = params;
      // Fetch endpoint.
      const response = await libraries.source.api.get({
        endpoint: `/menus/v1/menus/${slug}`,
        // "menu/primary"
      });
  
      // Extract data from response object.
      const data = await response.json();
      
      const menu = state.source.data[link];
      // Assign data to be consumed later.
      // This is the data returned when you use:
      // state.source.get("primaryMenu");
      Object.assign(menu, {
        items: data.items,
        isMenu: true,
      });
    }
  };
  export default menuHandler;