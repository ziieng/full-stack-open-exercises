var _ = require('lodash');

const dummy = (blogs) => {
  return 1;
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0);
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null;
  const favorite = blogs.reduce((prev, current) => {
    return (prev && prev.likes > current.likes) ? prev : current
  });

  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes,
  }
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return null;
  const blogsByAuthor = _.groupBy(blogs, 'author');
  const authorWithMostBlogs = _.maxBy(Object.keys(blogsByAuthor), (author) => blogsByAuthor[author].length);

  return {
    author: authorWithMostBlogs,
    blogs: blogsByAuthor[authorWithMostBlogs].length,
  }
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) return null;
  const blogsByAuthor = _.groupBy(blogs, 'author');
  const authorWithMostLikes = _.maxBy(Object.keys(blogsByAuthor), (author) => _.sumBy(blogsByAuthor[author], 'likes'));
  return {
    author: authorWithMostLikes,
    likes: _.sumBy(blogsByAuthor[authorWithMostLikes], 'likes'),
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}