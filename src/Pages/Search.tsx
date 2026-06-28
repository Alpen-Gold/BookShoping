import styled from "styled-components";

function Search() {
  return (
    <StyleDiv>
      <div className="search-header">
        <div className="title-block">
          <h1>Search</h1>
          <p>Find books by title, category, or author.</p>
        </div>

        <div className="filters">
          <div className="input-wrap">
            <span className="input-icon">🔎</span>
            <input className="search-input" placeholder="Search books..." />
          </div>

          <div className="select-wrap">
            <select className="search-select" defaultValue="all">
              <option value="all">All</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-Fiction</option>
            </select>
          </div>
        </div>
      </div>

      <div className="results-card">
        <div className="results-head">
          <h2>Results</h2>
          <span className="results-count">0 found</span>
        </div>

        <div className="empty-state">
          <div className="empty-icon">📚</div>
          <div>
            <p className="empty-title">No results yet</p>
            <p className="empty-subtitle">
              Type in the search bar to see matching books.
            </p>
          </div>
        </div>
      </div>
    </StyleDiv>
  );
}

export default Search;

const StyleDiv = styled.div`
  .search-header {
    background: #e9e9ed;
    border-radius: 12px;
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  h1 {
    margin: 0;
    font-size: 26px;
    color: #0f172a;
    letter-spacing: -0.02em;
  }

  .title-block p {
    margin: 6px 0 0;
    color: #64748b;
    font-size: 14px;
  }

  .filters {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    align-items: center;
  }

  .input-wrap {
    flex: 1;
    min-width: 220px;
    display: flex;
    align-items: center;
    gap: 10px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 10px 12px;
  }

  .input-icon {
    opacity: 0.8;
    font-size: 14px;
  }

  .search-input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 14px;
    background: transparent;
  }

  .select-wrap {
    min-width: 140px;
  }

  .search-select {
    width: 100%;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    padding: 10px 12px;
    font-size: 14px;
    background: #fff;
    outline: none;
  }

  .results-card {
    margin-top: 14px;
    background: #ffffff;
    border-radius: 12px;
    padding: 18px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.04);
  }

  .results-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 10px;
  }

  .results-head h2 {
    margin: 0;
    font-size: 18px;
    color: #0f172a;
  }

  .results-count {
    color: #64748b;
    font-size: 13px;
  }

  .empty-state {
    display: flex;
    align-items: center;
    gap: 14px;
    border: 1px dashed #e5e7eb;
    border-radius: 12px;
    padding: 18px;
    background: #fcfcfd;
  }

  .empty-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: #f8fafc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

  .empty-title {
    margin: 0;
    font-weight: 700;
    color: #0f172a;
  }

  .empty-subtitle {
    margin: 4px 0 0;
    color: #64748b;
    font-size: 13px;
  }

  @media (min-width: 900px) {
    .search-header {
      padding: 22px;
    }

    h1 {
      font-size: 30px;
    }

    .empty-state {
      padding: 22px;
    }
  }
`;
