import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ViewBlogModal({ show, onHide, blog, loading }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
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
          Blog Details
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {loading ? (
          <p>Loading...</p>
        ) : blog ? (
          <div style={{ fontSize: 16, lineHeight: 1.6 }}>
            <p>
              <strong>Title:</strong> {blog.title}
            </p>
            {blog.subTitle && (
              <p>
                <strong>Sub Title:</strong> {blog.subTitle}
              </p>
            )}
            <p>
              <strong>Short Description:</strong> {blog.shortDescription}
            </p>
            <p>
              <strong>Author:</strong> {blog.author || "-"}
            </p>
            <p>
              <strong>Category:</strong> {blog.category || "-"}
            </p>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: blog.description || "" }} />
          </div>
        ) : (
          <p>No data available.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewBlogModal;
