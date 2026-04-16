const BlogSearch = ({ onSearch }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const searchTerm = e.target.search.value;
        if (onSearch) {
            onSearch(searchTerm);
        }
    };

    return (
        <div className="widget-box sidebar-search">
            <form onSubmit={handleSubmit} className="sidebar__search-form">
                <input type="search" name="search" placeholder="Search..." required />
                <button type="submit">
                    <i className="bi bi-search"></i>
                </button>
            </form>
        </div>
    );
};

export default BlogSearch;