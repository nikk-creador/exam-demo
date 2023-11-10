import { useEffect, useState } from "react";
import Loader from "../../reusable/Loader";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../../reusable/Button";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentsData } from "../../redux/teacher/actions/StudentForExam";
import { SEO } from "../../Helmet";

const ViewStudents = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const studentList = useSelector((state) => state.teacher.studentList);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchStudentsData(setLoading));
  }, []);
  if (loading) {
    return <Loader />;
  }
  const handleViewResultClick = async (id) => {
    navigate(`result?id=${id}`);
  };

  return (
    <>
      <div className="container mt-4 text-center">
        <SEO title="Student Lists" />
        <div className="row">
          {studentList.map((item, index) => {
            const { name, email, status } = item;
            return (
              <div key={index} className=" col-lg-5 mb-5 w-50 exam-design">
                <div className="row me-1">
                  <div className="card card-hover-effect">
                    <div className="card-body">
                      <div className="text-start fs-5 lead">
                        <p className="card-title p-1">
                          <i className="pe-2 mr-2 bi bi-person-circle"></i>
                          {name}
                        </p>
                        <p className="card-title p-1">
                          <i className="pe-2 mr-2 bi bi-envelope-at-fill"></i>
                          {email}
                        </p>

                        <p className="card-title p-1">
                          <i className="pe-2 mr-2 bi bi-toggle-on"></i>
                          Status: {status}
                        </p>
                      </div>
                      <div className="mt-4 text-center">
                        {" "}
                        <Button
                          buttonText={"View result"}
                          type="submit"
                          className={"btn btn-dark  m-auto mb-2"}
                          onClick={() => handleViewResultClick(item._id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ToastContainer autoClose={2000} theme="colored" />
    </>
  );
};

export default ViewStudents;
