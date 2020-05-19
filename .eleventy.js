module.exports = (function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  return {
    dir: {
      // output: "dist",
      input: "src"
    }
  };
});
