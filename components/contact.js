import dynamic from 'next/dynamic'
const Fade = dynamic(() => import('react-reveal/Fade'), {ssr: false});
//import Fade from 'react-reveal/Fade';

const Contact = () => {

  return (
    <Fade duration={3000} delay={150}>
    <div className="container-fluid contact-container"> 
      <div className="row justify-content-center margin-top">
        <h1><b>C<u>ONTAC</u>T</b></h1>
      </div>

      <div className="row justify-content-center">
        <div className="col-12">
          <form>
            <div className="form-group col-6 mx-auto">
              <input type="name" className="form-control" id="name" placeholder="name..." required="required" />
            </div>
            <div className="form-group col-6 mx-auto">
              <input type="email" className="form-control" id="email" placeholder="email..." required="required" />
            </div>
            <div className="form-group col-6 mx-auto">
              <textarea className="form-control" name="message" id="message" placeholder="message..."></textarea>
            </div>
            <div className="form-group text-center">
              <button type="submit" id="submit" className="btn btn-primary">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
      <div className="row justify-content-center social">
          <span className="iconify" id="social" data-icon="foundation:social-linkedin" data-inline="false"></span>
          <span className="iconify" id="social" data-icon="foundation:social-github" data-inline="false"></span>
          <span className="iconify" id="social" data-icon="ant-design:codepen-outlined" data-inline="false"></span>
      </div>
    </div>
    </Fade>
  )
}

export default Contact;