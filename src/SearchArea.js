import React from 'react';

const SearchArea = (props) => {
    return (
        <div className="search-area">
        <form onSubmit={props.searchBook} action="">
                <input onChange={props.handleSearch} type="text"/>
                <button type="submit">Search</button>
                <select>
                    <option value="Sort">Sort</option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                </select>
            </form>
        </div>
    )
}

export default SearchArea;