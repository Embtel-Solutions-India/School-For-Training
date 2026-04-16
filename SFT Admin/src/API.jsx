export const BASE_URL = "/api";

export const BASE_URL_ADMIN = `${BASE_URL}/Admin/api`;
export const BASE_URL_USER = `${BASE_URL}/User/api`;
export const BASE_URL_IMAGE = `${BASE_URL}/uploads`;

export const IMAGE_URL = BASE_URL;

// ==========END-POINTS============
export const LOGIN = "/login";
export const FORGOT_PASSWORD = "/forgot-password";
export const RESET_PASSWORD = "/set-new-password";
export const USER_DETAILS = "/view-profile";
export const UPLOAD_IMAGE = "/admin-image";
export const UPDATE_PROFILE = "/update-profile";
export const CHANGE_PASSWORD = "/change-password";
export const CHECKSECURITYCODE = "/check-security-code";

export const GET_USERS = "/get-all-users";
export const DELETE_USER = "/delete-user";

export const GET_CONTENT_PAGE = "/get-page";
export const EDIT_CONTENT = "/edit-single-page-data";
export const SINGLE_PAGE_CONTENT = "/single-page-data";

// =============USER END POINTS================
export const CREATE_USER = "/contact";
export const GET_ALL_CONTACTS = "/contact";
export const GET_CONTACT_BYID = "/contact/id";
export const DELETE_CONTACT = "/contact/id";
export const REPLY_MESSAGE = "/contact/id/reply";
export const DELETE_MESSAGE = "/contact/id/reply/replyid";

// ============== COURSE ENDPOINTS =================
export const CREATE_COURSE = "/create-course";
export const GET_COURSES = "/course";
export const GET_COURSE = (id) => `/course/${id}`;
export const UPDATE_COURSE = (id) => `/edit-course/${id}`;
export const DELETE_COURSE = (id) => `/course/${id}`;

//============== BLOG ENDPOINTS ==================
export const CREATE_BLOG = "/blog";
export const GET_ALL_BLOGS = "/blogs";
export const GET_BLOG_FROM_ID = (id) => `/blog/${id}`;
export const EDIT_BLOG = (id) => `/edit-blog/${id}`;
export const DELETE_BLOG = (id) => `/delete-blog/${id}`;
