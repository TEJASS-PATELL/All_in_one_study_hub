import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./Google.css";

export default function GoogleSearch() {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (!query.trim()) return;
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(googleSearchUrl, "_blank", "noopener,noreferrer");
        setQuery("")
    };

    return (
        <form className="top-search-wrapper" onSubmit={handleSearch}>
            <FontAwesomeIcon icon={faSearch} className="top-search-icon" />
            <input
                id="search"
                type="search"
                placeholder="Search for exams, categories, or qualifications..."
                className="top-search-input"
                value={query}
                required
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="top-search-button">
                <FontAwesomeIcon icon={faGoogle} style={{ marginRight: "8px" }} />
            </button>
        </form>
    );
}
