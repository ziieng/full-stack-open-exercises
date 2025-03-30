const { test, describe } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");

describe("total likes helper", () => {
  const listWithOneBlog = [
    {
      id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
      likes: 5,
    },
  ];

  const listWithManyBlogs = [
    {
      title: "Some guy's blog",
      author: "Some Guy",
      url: "http://example.com",
      likes: 5,
      id: "67e88883fc558a847cb1a349",
    },
    {
      title: "Some lady's blog",
      author: "Some Lady",
      url: "http://example.com",
      likes: 10,
      id: "67e88894fc558a847cb1a34b",
    },
    {
      title: "Another lady's blog",
      author: "Another Lady",
      url: "http://example.com",
      likes: 15,
      id: "67e888a3fc558a847cb1a34d",
    },
  ];

  test("when list is empty, returns 0", () => {
    const blogs = [];

    const result = listHelper.totalLikes(blogs);
    assert.strictEqual(result, 0);
  });

  test("when list has one blog, returns the likes of that blog", () => {
    const result = listHelper.totalLikes(listWithOneBlog);
    assert.strictEqual(result, 5);
  });

  test("when list has many blogs, returns the total of all likes", () => {
    const result = listHelper.totalLikes(listWithManyBlogs);
    assert.strictEqual(result, 30);
  });
});
