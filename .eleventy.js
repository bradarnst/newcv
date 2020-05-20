module.exports = (function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/docs");
  return {
    dir: {
      // output: "dist",
      input: "src"
    }
  };
});
