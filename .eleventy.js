module.exports = function (eleventyConfig) {
	eleventyConfig.addWatchTarget("./assets/images")
	eleventyConfig.addPassthroughCopy("./assets/images")

	eleventyConfig.addWatchTarget("./assets/icons")
	eleventyConfig.addPassthroughCopy("./assets/icons")

	eleventyConfig.addWatchTarget("./assets/css")
	eleventyConfig.addPassthroughCopy("./assets/css")

	eleventyConfig.addWatchTarget("./assets/js")
	eleventyConfig.addPassthroughCopy("./assets/js")

	eleventyConfig.addPassthroughCopy("./robots.txt")

	return {
    passthroughFileCopy: true,
    templateFormats: ["html", ".ico"],
    HTMLTemplateEngine: "html"
	}
}