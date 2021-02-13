import Link from 'next/link';
import { Col } from 'reactstrap';


const BlogList = ({ blogs }) => {
  
  return (
    blogs.map(blog => 
      <Col key={blog._id} md="10" lg="8" className="mx-auto">
          <div>
            <div className="post-preview clickable">
                <Link href="#">
                <a>
                    <h2 className="post-title">
                      {blog.title}
                    </h2>
                    <h3 className="post-subtitle">
                      {blog.subTitle}
                    </h3>
                </a>
                </Link>
                <p className="post-meta">Posted by
                <a href="#"> Olly Bolland </a>
                - {blog.createdAt}
                </p>
            </div>
            <hr></hr>
          </div>
      </Col>
    )
  )
}

export default BlogList;