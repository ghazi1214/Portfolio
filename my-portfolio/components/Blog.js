/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const blogStyles = css`
  padding: 20px;
  background-color: #333;
  border-radius: 10px;

  h2 {
    margin-bottom: 20px;
  }

  .blog-post {
    margin-bottom: 20px;
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  .blog-post h3 {
    margin-bottom: 5px;
  }

  .blog-post p {
    margin: 5px 0;
  }

  .blog-post .date {
    font-size: 0.9em;
    color: #bbb;
  }
`;

const Blog = () => {
  return (
    <div css={blogStyles}>
      <h2>Blog</h2>
      <div className="blog-post">
        <h3>The Future of Web Development: Trends to Watch in 2025</h3>
        <p className="date">Date: July 20, 2024</p>
        <p>As technology continues to evolve at a rapid pace, web development is also undergoing significant changes. In this blog post, I explore the key trends that are set to shape the future of web development in 2025, including advancements in AI, the rise of Progressive Web Apps (PWAs), and the growing importance of cybersecurity.</p>
      </div>
      <div className="blog-post">
        <h3>Big Data in Credit Card Fraud Detection: A Comprehensive Approach</h3>
        <p className="date">Date: June 15, 2024</p>
        <p>Credit card fraud is a major concern for financial institutions worldwide. This blog post delves into how big data can be leveraged to detect and prevent credit card fraud, highlighting the latest techniques and technologies in the field.</p>
      </div>
      <div className="blog-post">
        <h3>Starting an Online Store: Lessons Learned from "The Circle"</h3>
        <p className="date">Date: May 30, 2024</p>
        <p>Launching an online store can be a challenging but rewarding experience. In this article, I share my journey of starting "The Circle," an online store selling air fryer liners and clothing. From initial planning to overcoming obstacles, this post provides valuable insights for aspiring entrepreneurs.</p>
      </div>
      <div className="blog-post">
        <h3>Enhancing Your Data Entry Skills: Tips and Best Practices</h3>
        <p className="date">Date: April 25, 2024</p>
        <p>Data entry is a crucial task that requires precision and efficiency. This blog post offers practical tips and best practices to enhance your data entry skills, ensuring accuracy and productivity in your work.</p>
      </div>
      <div className="blog-post">
        <h3>The Role of Graphic Design in Digital Marketing</h3>
        <p className="date">Date: March 18, 2024</p>
        <p>Graphic design plays a vital role in digital marketing by creating visually appealing content that attracts and engages audiences. In this post, I discuss the importance of graphic design in digital marketing and provide tips for creating effective visual content.</p>
      </div>
    </div>
  );
};

export default Blog;
