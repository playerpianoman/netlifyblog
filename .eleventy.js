module.exports = function(eleventyConfig) {
  // Create a collection of all posts from the JSON data
  eleventyConfig.addGlobalData("allPosts", () => {
    const posts = require("./_data/posts.json");
    let allPosts = [];
    
    for (const category in posts) {
      if (Array.isArray(posts[category])) {
        posts[category].forEach(post => {
          post.category = category;
          allPosts.push(post);
        });
      }
    }
    
    return allPosts;
  });

  // Return your Object options:
  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
}; 