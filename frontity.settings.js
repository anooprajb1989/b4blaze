const settings = {
  "name": "tv-zero-news",
  "state": {
    "frontity": {
      "url": "https://tv0.in",
      "title": "Home - TV Zero News",
      "description": "Home - TV Zero News"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            ["About Us", "/about-us/"]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          autoPrefetch: "hover"
        }
      }
    },
    // {
    //   name: "b4blaze-theme",
    //   state: {
    //     theme: {
    //       featured: {
    //         showOnList: false,
    //         showOnPost: false,
    //       }
    //     },
    //   },
    // },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://parabrahmaindia.com/wp-json",
          "homepage": "/home",
          "postsPage":"/blog"
        }
      }
    },
    {
      name: "@frontity/google-tag-manager-analytics",
      state: {
        googleTagManagerAnalytics: {
          containerId: "UA-77751865-2",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags"
  ] 
};

export default settings;
