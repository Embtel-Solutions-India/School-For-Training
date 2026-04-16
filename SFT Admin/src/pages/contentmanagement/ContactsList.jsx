import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import axios from "axios";
import {
  BASE_URL_ADMIN,
  GET_ALL_CONTACTS,
  GET_CONTACT_BYID,
  DELETE_CONTACT,
  REPLY_MESSAGE,
  DELETE_MESSAGE,
} from "../../API";

function ContactsList() {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [replyMessage, setReplyMessage] = useState("");
  const [isReplying, setIsReplying] = useState(false);

  const token = localStorage.getItem("token");

  // Fetch all contacts
  const fetchContacts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${BASE_URL_ADMIN}${GET_ALL_CONTACTS}`, {
        headers: { Token: token },
      });
      setContacts(response.data?.data || []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load contacts!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Fetch single contact
  const handleView = async (id) => {
    try {
      setIsModalLoading(true);
      setShow(true);
      const response = await axios.get(
        `${BASE_URL_ADMIN}${GET_CONTACT_BYID.replace("id", id)}`,
        { headers: { Token: token } }
      );
      if (response.data?.data) {
        setSelectedData(response.data.data);
        setReplyMessage("");
      } else {
        setSelectedData(null);
        toast.error("No details found for this contact");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to fetch contact details!"
      );
    } finally {
      setIsModalLoading(false);
    }
  };

  // Delete contact
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?"))
      return;
    try {
      setIsLoading(true);
      await axios.delete(
        `${BASE_URL_ADMIN}${DELETE_CONTACT.replace("id", id)}`,
        {
          headers: { Token: token },
        }
      );
      toast.success("Contact deleted successfully!");
      setShow(false);
      fetchContacts();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete contact!");
    } finally {
      setIsLoading(false);
    }
  };

  // Send reply
  const handleReply = async () => {
    if (!replyMessage.trim()) return toast.error("Reply cannot be empty!");

    try {
      setIsReplying(true);
      await axios.post(
        `${BASE_URL_ADMIN}${REPLY_MESSAGE.replace("id", selectedData._id)}`,
        { message: replyMessage },
        { headers: { Token: token } }
      );
      toast.success("Reply sent successfully!");
      setReplyMessage("");
      handleView(selectedData._id); // refresh contact details
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send reply!");
    } finally {
      setIsReplying(false);
    }
  };

  // Delete a specific reply
  const handleDeleteReply = async (replyId) => {
    if (!window.confirm("Are you sure you want to delete this reply?")) return;

    try {
      setIsModalLoading(true);
      const response = await axios.delete(
        `${BASE_URL_ADMIN}${DELETE_MESSAGE.replace(
          "id",
          selectedData._id
        ).replace("replyid", replyId)}`,
        { headers: { Token: token } }
      );
      toast.success("Reply deleted successfully!");
      setSelectedData(response.data.data); // update modal replies
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete reply!");
    } finally {
      setIsModalLoading(false);
    }
  };

  // Search Filter
  const filteredList = contacts.filter(
    (c) =>
      c.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.phone?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Loader isLoading={isLoading} />
      <div className="container-fluid">
        <Header />
        <div className="row">
          <Sidebar />
          <div className="col-9 main-dash-left">
            <section className="back-dashboard-sec comn-dashboard-page">
              <div className="main-notification-messege">
                <div className="notifi-list d-flex justify-content-between align-items-center">
                  <h6>Contact Forms</h6>
                  <div className="dropdowns-inner-list d-flex">
                    <div className="icon-search-main">
                      <Form.Control
                        type="text"
                        placeholder="Search Contact..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="notification-table pt-0">
                  <Table bordered hover responsive>
                    <thead>
                      <tr className="head-class-td">
                        <th>Sr. No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Message</th>

                        {/* ⭐ ADDED Course Column */}
                        <th>Course</th>

                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredList?.length > 0 ? (
                        filteredList.map((contact, index) => (
                          <tr key={contact._id}>
                            <td>{index + 1}</td>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td>
                              {contact.message?.length > 40
                                ? contact.message.substring(0, 40) + "..."
                                : contact.message}
                            </td>

                            {/* ⭐ SHOW COURSE NAME */}
                            <td>
                              {contact.courseName ||
                                contact.courseId?.title ||
                                "N/A"}
                            </td>

                            <td>
                              <div className="d-flex gap-2 flex-wrap">
                                <Button
                                  variant="info"
                                  size="sm"
                                  onClick={() => handleView(contact._id)}
                                >
                                  View
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={7} className="text-center">
                            No Contacts Found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* View Contact Modal */}
        <Modal
          show={show}
          onHide={() => {
            setShow(false);
            setSelectedData(null);
            setReplyMessage("");
          }}
          centered
          className="comm_modal cst_inner_wid_modal"
        >
          <Modal.Header
            closeButton
            style={{
              padding: "20px 25px",
              backgroundColor: "#f8f9fa",
              borderBottom: "2px solid #ddd",
            }}
          >
            <Modal.Title
              style={{
                fontSize: "28px",
                fontWeight: "700",
                letterSpacing: "0.5px",
              }}
            >
              Contact Details
            </Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ fontSize: "18px", lineHeight: "1.6" }}>
            {isModalLoading ? (
              <p>Loading...</p>
            ) : selectedData ? (
              <>
                <p>
                  <strong>Name:</strong> {selectedData.name}
                </p>
                <p>
                  <strong>Email:</strong> {selectedData.email}
                </p>
                <p>
                  <strong>Phone:</strong> {selectedData.phone}
                </p>
                <p>
                  <strong>Message:</strong> {selectedData.message}
                </p>

                {/* ⭐ SHOW COURSE IN MODAL */}
                <p>
                  <strong>Course:</strong>{" "}
                  {selectedData.courseName ||
                    selectedData.courseId?.title ||
                    "Not Selected"}
                </p>

                <p>
                  <strong>Created At:</strong>{" "}
                  {new Date(selectedData.createdAt).toLocaleString()}
                </p>

                {/* Admin Replies */}
                {selectedData.replies?.length > 0 && (
                  <div className="mt-3">
                    <h6 style={{ fontSize: "20px" }}>Admin Replies:</h6>
                    <ul className="list-group">
                      {selectedData.replies.map((reply) => (
                        <li
                          key={reply._id}
                          className="list-group-item d-flex justify-content-between align-items-start"
                        >
                          <div>
                            <p className="mb-1">{reply.message}</p>
                            <small className="text-muted">
                              {new Date(reply.createdAt).toLocaleString()}
                            </small>
                          </div>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleDeleteReply(reply._id)}
                          >
                            Delete
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Form.Group className="mt-3">
                  <Form.Label style={{ fontSize: "18px" }}>Reply</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Type your reply here..."
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                  />
                </Form.Group>

                <div className="d-flex gap-2 mt-2 flex-wrap">
                  <Button
                    variant="success"
                    onClick={handleReply}
                    disabled={isReplying || !replyMessage.trim()}
                  >
                    {isReplying ? "Sending..." : "Send Reply"}
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(selectedData._id)}
                  >
                    Delete Message
                  </Button>
                </div>
              </>
            ) : (
              <p>No data available.</p>
            )}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default ContactsList;
