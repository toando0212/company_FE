import React from 'react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of Web Development',
      excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
      date: '2025-01-15',
      author: 'John Doe',
      image: 'https://via.placeholder.com/400x250',
      category: 'Web Development'
    },
    {
      title: 'Cybersecurity Best Practices',
      excerpt: 'Essential security measures every business should implement to protect their data.',
      date: '2025-01-10',
      author: 'Jane Smith',
      image: 'https://via.placeholder.com/400x250',
      category: 'Security'
    },
    {
      title: 'Cloud Migration Strategies',
      excerpt: 'A comprehensive guide to successfully migrating your business to the cloud.',
      date: '2025-01-05',
      author: 'Mike Johnson',
      image: 'https://via.placeholder.com/400x250',
      category: 'Cloud Computing'
    },
    {
      title: 'AI and Machine Learning in Business',
      excerpt: 'How artificial intelligence is transforming modern business operations.',
      date: '2025-01-01',
      author: 'Sarah Wilson',
      image: 'https://via.placeholder.com/400x250',
      category: 'AI & ML'
    }
  ];

  return (
    <div className="blog-page">
      {/* Page Title Section */}
      <section className="page-title">
        <h2>Blog</h2>
        <div className="breadcrumb">
          <a href="/">Home</a> <span>&gt;</span> <span>Blog</span>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="container">
          <div className="section-header">
            <h2>Latest Articles</h2>
            <p>Stay updated with the latest insights and trends in technology</p>
          </div>
          
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <article key={index} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-category">{post.category}</div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">{new Date(post.date).toLocaleDateString()}</span>
                    <span className="blog-author">By {post.author}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a href="#" className="read-more">Read More</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;