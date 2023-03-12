import React, { useState, useEffect, useMemo } from "react";
import { addNewStudentAction } from "../Redux/Actions/StudentActions";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { updateStudentDetailAction } from "../Redux/Actions/StudentActions";

function StudentForm() {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: "",
    batch: "",
  });
  const isEdit = useMemo(() => {
    if (params.studentId) return true;
    else return false;
  }, [params]);

  useEffect(() => {
    const data = location.state;
    if (data) {
      setFormData(data);
    }
  }, [location.state]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddOrUpdate = () => {
    console.log("handleUpdate called");
    if (isEdit) {
      dispatch(updateStudentDetailAction(formData));
    } else {
      dispatch(
        addNewStudentAction({ ...formData, id: `id-${new Date().getTime()}` })
      );
    }
    goBack();
  };

  function goBack() {
    navigation(-1);
  }

  const isDisabled = () => {
    if (formData.name && formData.age && formData.batch && formData.course) {
      return false;
    }
    return true;
  };

  console.log("Formdata", formData, location, params, isEdit);

  return (
    <>
      <h1>{isEdit ? "Edit Student Detail" : "Add New Student"}</h1>
      <div className="editpart">
            <input
              placeholder={"name"}
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
     
            <input
              placeholder={"age"}
              name="age"
              type={"number"}
              onChange={handleChange}
              value={formData.age}
            />
      
            <input
              placeholder={"Course"}
              name="course"
              onChange={handleChange}
              value={formData.course}
            />
       
            <input
              placeholder={"batch"}
              name="batch"
              onChange={handleChange}
              value={formData.batch}
            />
     <div className="editpart_buttons">
          <button  onClick={goBack}>
            Cancel
          </button>
     
          <button
            disabled={isDisabled()}
            onClick={handleAddOrUpdate}
          >
            {isEdit ? "Update" : "Add"}
          </button>
          </div>
      </div>
    
    </>
  );
}

export default StudentForm;
