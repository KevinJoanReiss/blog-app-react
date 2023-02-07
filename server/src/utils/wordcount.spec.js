import { getBlogPostsWithWordCount } from './wordCount.js'

describe('test wordCount.js', () => {
  test('test getBlogPostsWithWordCount', () => {
    //arrange
    const blogs = [
      { content: { rendered: 'This is a test message 1' } },
      { content: { rendered: 'This is a test message 2' } },
    ]
    //act
    const result = getBlogPostsWithWordCount(blogs)
    //assert
    expect(result.length).toBe(2)
  })
})
