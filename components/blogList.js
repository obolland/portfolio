import Link from 'next/link';
import { Col } from 'reactstrap';
import moment from 'moment';


const BlogList = ({ blogs }) => {
  
  return (
    blogs.map(blog => 
      <Col key={blog._id} md="10" lg="8" className="mx-auto">
          <div>
            <div className="post-preview clickable">
                <Link href={`/blogs/${blog.slug}`}>
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
                - {moment(blog.createdAt).format('L')}
                </p>
            </div>
            <hr></hr>
          </div>
      </Col>
    )
  )
}

export default BlogList;