import { useEffect, useState } from "react";
import Loader from "../../reusable/Loader";
import Button from "../../reusable/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import fetchAllExams from "../../redux/student/actions/AllExam";
import { totalExamQuestion } from "../../utils/Constants";
import { SEO } from "../../Helmet";
const Student = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.student.allExamContainer);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchAllExams(setLoading));
  }, []);
  if (loading) {
    return <Loader />;
  }
  const handleGiveExamClick = async (id) => {
    navigate(`exam?id=${id}`);
  };

  return (
    <>
      <SEO title="Student dashboard" />
      <div className="container mt-4 text-center">
        <div className="row">
          {data &&
            data.map((item, index) => {
              const { subjectName, email, notes, Result } = item;
              return (
                <div key={index} className=" col-lg-6 mb-5 w-50 exam-design">
                  <div className="row me-1">
                    <div className="card card-hover-effect ">
                      <div className="card-body ">
                        <div className="text-start fs-5 lead">
                          <h5 className="card-text">Subject :{subjectName}</h5>
                          <p className="card-text">Email: {email}</p>

                          <p>Notes:</p>

                          <ul className="list-group">
                            {notes.map((note, noteIndex) => (
                              <li key={noteIndex} className="list-group-item">
                                {note}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="text-center mt-3">
                          {Result.length > 0 ? (
                            <div>
                              {Result.map((resultData, resultIndex) => {
                                const { resultStatus, rank, score } =
                                  resultData;
                                return (
                                  <div key={resultIndex}>
                                    <h6>Result: {resultStatus}</h6>
                                    <p>Rank: {rank}</p>
                                    <p>
                                      Score:{" "}
                                      {Math.round(
                                        (score * 100) / totalExamQuestion
                                      )}
                                      %
                                    </p>
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            <h6>Result: Exam Pending</h6>
                          )}
                          {item.Result.length !== 0 ? (
                            <></>
                          ) : (
                            <Button
                              disabled={item.Result.length !== 0}
                              className="btn btn-success"
                              buttonText="Give Exam"
                              onClick={() => handleGiveExamClick(item._id)}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <ToastContainer autoClose={2000} theme="colored" />
      </div>
    </>
  );
};

export default Student;
