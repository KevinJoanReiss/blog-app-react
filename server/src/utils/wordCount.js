/**
 * Generates a wordCountMap for a text
 * @param {*} text 
 * @returns 
 */
function getWordCount(text) {
  const arr = text.split(' ')
  return arr.reduce((map, word) => {
    if (word in map) map[word]++
    else map[word] = 1
    return map
  }, {})
}

/**
 * Creates an array of blog post objects
 * Each object holds a blog text and the corresponding wordCountMap of the text
 * @param blogPosts which were fetched from the wordpress API
 * @returns array of objects with blog text and worcount
 */
export function getBlogPostsWithWordCount(blogPosts) {
  return blogPosts.map((item) => {
    //delete all the html tags in the text
    const cleanText = item.content.rendered.replace(/<[^>]*>|\n/g, '')
    const wordcountMap = getWordCount(cleanText)
    return { blogText: cleanText, wordCountMap: wordcountMap}
  })
}
