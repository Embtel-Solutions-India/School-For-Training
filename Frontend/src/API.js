// API Configuration
const API_BASE_URL = "/User/api";
export const BASE_URL_IMAGE = "/uploads/";
// Generic API call function
const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API call failed for ${endpoint}:`, error);
    throw error;
  }
};

// Course API
export const courseAPI = {
  // Get all courses
  getAll: async () => {
    const data = await apiCall("/course");
    // Handle both array and object with data property
    return Array.isArray(data) ? data : data.data || data.courses || [];
  },

  // Get course by ID
  getById: async (id) => {
    const data = await apiCall(`/course/${id}`);
    // Handle both direct object and nested data
    return data.data || data;
  },

  // Create course inquiry
  createInquiry: async (inquiryData) => {
    return await apiCall("/inquiry", {
      method: "POST",
      body: JSON.stringify(inquiryData),
    });
  },
};

// Contact API
export const contactAPI = {
  // Submit contact form
  submit: async (contactData) => {
    return await apiCall("/contact", {
      method: "POST",
      body: JSON.stringify(contactData),
    });
  },
};

// Blog API (placeholder - adjust endpoint as needed)
export const blogAPI = {
  // Get all blogs
  getAll: async () => {
    const data = await apiCall("/blogs");
    return Array.isArray(data) ? data : data.data || data.blogs || [];
  },

  // Get blog by ID
  getById: async (id) => {
    const data = await apiCall(`/blog/${id}`);
    return data.data || data;
  },
};

export default {
  courseAPI,
  contactAPI,
  blogAPI,
  BASE_URL_IMAGE
};
