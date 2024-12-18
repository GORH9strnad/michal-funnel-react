import { useEffect, useState } from "react";
import { useGet, usePut } from "../../services/services";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../../state_managment/GlobalProvider";

function useCourses() {
  console.log("useCourses() executed");
  const navigate = useNavigate();
  const { token } = useParams();

  const { state, setState, tokenExists, isTokenLoading } = useGlobalContext();

  const [coursesResponse, isCoursesPerforming, coursesStatus, coursesError] =
    useGet("course/courses");

  const [
    selectedCourseResponse,
    isSelectedCoursePerforming,
    selectedCourseStatus,
    selectedCourseError,
  ] = useGet(token && tokenExists ? `course/selected/${token}` : null);

  const [
    selectCourseResponse,
    isSelectCoursePerforming,
    selectCourseStatus,
    selectCourseError,
    executePut,
  ] = usePut(`course/select/${token}/${state.selectedCourse?.id}`, null);

  const setSelectedCourse = (course) => {
    setState((prevState) => {
      return {
        ...prevState,
        selectedCourse: course,
      };
    });
  };

  useEffect(() => {
    if (!isSelectedCoursePerforming && !isCoursesPerforming) {
      setSelectedCourse(
        selectedCourseResponse?.course || coursesResponse?.courses[0]
      );
    }
  }, [isSelectedCoursePerforming, isCoursesPerforming]);

  useEffect(() => {
    if (state.selectedCourse && !isSelectedCoursePerforming && token) {
      executePut();
    }
  }, [state.selectedCourse, isSelectedCoursePerforming]);

  useEffect(() => {
    if (selectedCourseStatus === 200 && !isSelectedCoursePerforming) {
      setSelectedCourse(selectedCourseResponse?.course);
    } else if (selectedCourseStatus === 404 && !isSelectedCoursePerforming) {
      setSelectedCourse(null);
    }
  }, [selectedCourseStatus, isSelectedCoursePerforming]);

  useEffect(() => {
    if (coursesStatus !== 200 && !isCoursesPerforming) {
      navigate(`/error/${coursesStatus}`);
      console.error(coursesError);
    }
  }, [coursesStatus, isCoursesPerforming]);

  useEffect(() => {
    if (
      selectedCourseStatus !== 200 &&
      selectedCourseStatus !== 404 &&
      !isSelectedCoursePerforming &&
      token !== "error"
    ) {
      navigate(`/error/${selectedCourseStatus}`);
      console.error(selectedCourseError);
    }
  }, [selectedCourseStatus, isSelectedCoursePerforming]);

  return [
    coursesResponse?.courses,
    state?.selectedCourse,
    isSelectedCoursePerforming || isCoursesPerforming,
    setSelectedCourse,
  ];
}

export default useCourses;
