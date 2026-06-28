import { Badge, Carousel } from "antd";
import styled from "styled-components";
import HomeMainContent from "../components/HomeMainContent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getHomeQuestions } from "../api";

interface Quote {
  text: string;
  author: string;
}

interface Book {
  id: number;
  title: string;
  image: string;
  category: string;
}

const quotes: Quote[] = [
  {
    text: "There is more treasure in books than in all the pirate's loot on Treasure Island.",
    author: "Walt Disney",
  },
  {
    text: "A reader lives a thousand lives before he dies.",
    author: "George R.R. Martin",
  },
  {
    text: "Books are a uniquely portable magic.",
    author: "Stephen King",
  },
];

const books: Book[] = [
  {
    id: 1,
    title: "KJV HOLY BIBLE",
    image:
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=200&h=300&fit=crop",
    category: "Religion",
  },

  {
    id: 2,
    title: "KJV HOLY BIBLE",
    image:
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=200&h=300&fit=crop",
    category: "Religion",
  },

  {
    id: 12,
    title: "KJV HOLY BIBLE",
    image:
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=200&h=300&fit=crop",
    category: "Religion",
  },

  {
    id: 3435,
    title: "KJV HOLY BIBLE",
    image:
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=200&h=300&fit=crop",
    category: "Religion",
  },

  {
    id: 3,
    title: "Lean UX",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&h=300&fit=crop",
    category: "Design",
  },
  {
    id: 4,
    title: "Don't Make Me Think",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&h=300&fit=crop",
    category: "UX Design",
  },

  {
    id: 213013,
    title: "Don't Make Me Think",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&h=300&fit=crop",
    category: "UX Design",
  },

  {
    id: 212141,
    title: "Don't Make Me Think",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&h=300&fit=crop",
    category: "UX Design",
  },
];

function Home() {
  const { error, loading } = useSelector((store: any) => store.allFunctions);

  const dispatch = useDispatch();
  const [homeData, setHomeData] = useState<any>(null);

  useEffect(() => {
    getHomeQuestions(dispatch).then((data: any) => setHomeData(data));
  }, []);

  if (loading)
    return (
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  if (error)
    return (
      <div className=" d-flex mt-4 justify-center text-red-600">
        You have problem or your connection is not working!
      </div>
    );

  const apiBooks: Book[] = (() => {
    if (!homeData) return [];
    if (Array.isArray(homeData)) return homeData;
    if (Array.isArray(homeData.books)) return homeData.books;
    if (Array.isArray(homeData.data)) return homeData.data;
    return [];
  })();

  const visibleBooks = apiBooks.length ? apiBooks : books;

  return (
    <>
      <StyledDiv>
        <div className="container">
          <div className="carousel-wrapper">
            <Carousel autoplay autoplaySpeed={5000}>
              {quotes.map((item: Quote, index) => (
                <div key={index} className="content-caruseal">
                  <p>{item.text}</p>
                  <p className="author">{item.author}</p>
                </div>
              ))}
            </Carousel>
          </div>

          <div className="side-panel">
            <Badge.Ribbon
              text="New Arrivals"
              color="volcano"
              className="newArrivals"
            >
              <div className="books-grid">
                {visibleBooks.map((book) => (
                  <div key={book.id} className="book-card">
                    <img src={book.image} alt={book.title} />
                    <div className="book-info">
                      <h4>{book.title}</h4>
                      <span className="category">{book.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Badge.Ribbon>
          </div>
        </div>
      </StyledDiv>

      <StyledDivMainContent>
        <HomeMainContent />
      </StyledDivMainContent>
    </>
  );
}

const StyledDivMainContent = styled.div``;

const StyledDiv = styled.div`
  .container {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    max-height: 200px;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 12px;
      max-height: none;
    }

    .carousel-wrapper {
      width: 100%;
    }

    .content-caruseal {
      height: 170px;
      padding: 16px;
    }

    .side-panel {
      width: 100%;
      max-height: none;
      overflow: hidden;
      padding: 10px;
    }

    .book-card {
      min-width: 130px;
    }

    .book-card img {
      height: 130px;
    }
  }

  .carousel-wrapper {
    flex: 1;
    min-width: 0;
  }

  .content-caruseal {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
    background: linear-gradient(145deg, #b31717 0%, #de8d1b 100%);
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    color: white;
    height: 200px;
  }

  .content-caruseal p {
    margin: 6px 0;
    font-size: 15px;
  }

  .author {
    font-style: italic;
    opacity: 0.9;
  }

  .side-panel {
    flex: 2;
    background-color: #f8fafc;
    border-radius: 12px;
    padding: 12px;
    overflow: auto;
    max-height: 300px;
  }

  .books-grid {
    display: flex;
    gap: 12px;
    overflow-x: auto;
    padding-bottom: 8px;
    scrollbar-width: auto;
  }

  .book-card {
    min-width: 110px;
    text-align: center;
    transition: transform 0.2s;

    img {
      height: 100px;
    }

    &:hover {
      transform: translateY(-4px);
    }
  }

  @media (max-width: 480px) {
    .book-card {
      min-width: 120px;
      padding: 0;
    }

    .book-info h4 {
      font-size: 12px;
    }

    .category {
      font-size: 10px;
    }
  }

  .newArrivals {
    font-size: 15px;
    padding: 5px;
  }

  .book-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .book-info {
    margin-top: 8px;
  }

  .book-info h4 {
    font-size: 13px;
    margin: 4px 0;
    font-weight: 600;
    color: #1e2937;
    line-height: 1.3;
  }

  .category {
    font-size: 11px;
    color: #64748b;
    font-weight: 500;
  }

  /* Scrollbar styling */
  .books-grid::-webkit-scrollbar {
    height: 6px;
  }

  .books-grid::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }
`;

export default Home;
