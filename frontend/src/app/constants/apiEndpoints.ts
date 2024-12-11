
const API_ENDPOINTS = {
    // App routes
    SIGNUP_API: '/auth/register',
    TEACHER_LOGIN_API: `/auth/teacher`,
    ADMIN_LOGIN_API: `/auth/admin`,
    STUDENT_LOGIN_API: `/auth/student`,

   



    // app endpoints

    // student endpoints
    GET_STUDENT_BY_ENROLLMENT_API: (id:string) => `/app/student/${id}`,
    GET_ATTENDANCE_BY_STUDENT_ENROLLMENT_API: (id:string) => `/app/student/${id}/attendance`,


    // teacher endpoints
    GET_TEACHER_BY_ENROLLMENT_API: (id:string) => `/app/teacher/${id}`,
    GET_ALL_CLASSES_BY_TEACHER_ENROLLMENT_API: (id:string) => `/app/teacher/${id}/classes`,
    GET_CLASSE_BY_CLASS_ID_API: (id:string) => `/app/teacher/${id}/get-class`,
    MARK_ATTENDANCE_API: '/app/teacher/attendance',
    GET_ATTENDANCE_BY_CLASS_ID_API: (classId:string) => `/app/teacher/${classId}/attendance`,

    APP_ADD_GRADE_API: '/app/grades',
    APP_UPDATE_GRADE_API: (id:string) => `/app/grades/${id}`,
    APP_GET_GRADE_BY_STUDENT_ID_API: (studentId:string) => `/app/grades/student/${studentId}`,

    

   



    // admin endpoints

    ADMIN_ADD_STUDENT_API: '/admin/student',
    ADMIN_UPDATE_STUDENT_API: (id:string) => `/admin/student/${id}`,
    ADMIN_GET_ALL_STUDENT_API: '/admin/student/all',
    ADMIN_GET_STUDENT_BY_ID: (id:string) => `/admin/student/${id}`,
    ADMIN_DELETE_STUDENT_API: (id:string) => `/admin/student/${id}`,
    ADMIN_GET_ATTENDANCE_BY_STUDENT_ID: (id:string) => `/admin/student/${id}/attendance`,

    // teacher endpoints
    ADMIN_ADD_TEACHER_API: '/admin/teacher',
    ADMIN_UPDATE_TEACHER_API: (id:string) => `/admin/teacher/${id}`,
    ADMIN_GET_ALL_TEACHER_API: '/admin/teacher/all',
    ADMIN_GET_TEACHER_API: (id:string) => `/admin/teacher/${id}`,
    ADMIN_DELETE_TEACHER_API: (id:string) => `/admin/teacher/${id}`,
    ADMIN_GET_TEACHER_BY_ID: (id:string) => `/admin/teacher/${id}`,
    ASSIGN_SUBJECT_TO_TEACHER_API: '/admin/teacher/assign-subject',
    CREATE_SUBJECT_API: '/admin/teacher/create-subject',

    // schedule endpoints
    ASSIGN_TEACHER_API: `/admin/schedule/assign-teacher`,
    ASSIGN_STUDENT_API: `/admin/schedule/assign-student`,
    GENERATE_TIME_TABLE_API: (classId:string) => `/admin/schedule/generate-timetable/${classId}`,
    CREATE_CLASS_API: '/admin/schedule/create-class',
    GET_ALL_CLASSES_API: '/admin/schedule/get-all-classes',
    CREATE_ROOM_API: '/admin/schedule/create-room',
    GET_ALL_ROOMS_API: '/admin/schedule/get-all-rooms',

    // grades endpoints
    ADD_GRADE_API: '/admin/grades/',
    UPDATE_GRADE_API: (id:string) => `/admin/grades/${id}`,
    GET_GRADE_BY_STUDENT_ID_API: (studentId:string) => `/app/grades/student/${studentId}`,
    GET_GRADES_BY_TEACHER_ID_API: (teacherId:string) => `/app/grades/teacher/${teacherId}`,



    // course endpoints
    CREATE_COURSE_API: '/admin/courses',
    UPDATE_COURSE_API: (id:string) => `/admin/courses/update/${id}`,
    GET_ALL_COURSES_API: '/admin/courses/all',
    DELETE_COURSES_API: (id:string) => `/admin/courses/delete/${id}`,

    // report endpoints
    GENERATE_REPORT_API: '/admin/reports/generate',
    GET_ALL_REPORTS_API: '/admin/reports',
    GET_REPORTS_BY_CREATOR_API: (createdBy:string) => `/admin/reports/${createdBy}`,

    // exam endpoints
    CREATE_EXAM_API: '/admin/exams',
    GET_ALL_EXAMS_API: '/admin/exams',
    UPDATE_EXAM_API: (id:string) => `/admin/exams/${id}`,
    DELETE_EXAM_API: (id:string) => `/admin/exams/${id}`,
    GET_EXAMS_BY_CLASS_ID_API: (id:string) => `/admin/exams/class/${id}`,
    GET_EXAMS_BY_TEACHER_ID_API: (id:string) => `/admin/exams/teacher/${id}`,


}

export default API_ENDPOINTS