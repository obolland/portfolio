import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import SelectDate from '../components/datePicker';
import DatePicker from "react-datepicker";

const PortfolioForm = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    register({name: 'start_date'});
    register({name: 'end_date'});
  }, [register])

  const handleDateChange = (dateType, setDate) => date => {
    setValue(dateType, date);
    setDate(date);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          ref={register}
          name="title"
          type="text"
          className="form-control"
          id="title"/>
      </div>

      <div className="form-group">
        <label htmlFor="company">Company</label>
        <input
          ref={register}
          name="company"
          type="text"
          className="form-control"
          id="company"/>
      </div>

      <div className="form-group">
        <label htmlFor="company-website">Company Website</label>
        <input
          ref={register}
          name="company_website"
          type="text"
          className="form-control"
          id="companyWebsite"/>
      </div>

      <div className="form-group">
        <label htmlFor="job-title">Job Title</label>
        <input
          ref={register}
          name="job_title"
          type="text"
          className="form-control"
          id="jobTitle"/>
      </div>

      <div className="form-group">
        <label htmlFor="tech-stack">Tech Stack</label>
        <input
          ref={register}
          name="tech_stack"
          type="text"
          className="form-control"
          id="techStack"/>
      </div>

      <div className="form-group">
        <label htmlFor="image-url">Image URL</label>
        <input
          ref={register}
          name="img_url"
          type="text"
          className="form-control"
          id="imgUrl"/>
      </div>

      <div className="form-group">
        <label htmlFor="detail-images">Images for Detail Page</label>
        <input
          ref={register}
          placeholder="comma seperated"
          name="detail_imgs"
          type="text"
          className="form-control"
          id="detailImgs"/>
      </div>

      <div className="form-group">
        <label htmlFor="project-url">Project URL</label>
        <input
          ref={register}
          name="project_url"
          type="text"
          className="form-control"
          id="projectUrl"/>
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          ref={register}
          name="description"
          rows="5"
          type="text"
          className="form-control"
          id="description">
        </textarea>
      </div>

      <div className="form-group">
        <label htmlFor="start-date">Start Date</label>
        <div>
          <DatePicker
            showYearDropdown
            selected={startDate}
            onChange={handleDateChange('start_date', setStartDate)}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="end-date">End Date</label>
        <div>
        <DatePicker
          showYearDropdown
          selected={endDate}
          onChange={handleDateChange('end_date', setEndDate)}
        />
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary">Create
      </button>
    </form>
  )
}

export default PortfolioForm;