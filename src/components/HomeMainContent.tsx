import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import type { RootState } from "../stores/store";

function HomeMainContent() {
  interface Book {
    id: number;
    title: string;
    image: string;
    category: string;
  }

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
      id: 41204219,
      title: "Don't Make Me Think",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&h=300&fit=crop",
      category: "UX Design",
    },
    {
      id: 5,
      title: "Don't Make Me Think",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&h=300&fit=crop",
      category: "UX Design",
    },
    {
      id: 6,
      title: "Don't Make Me Think",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&h=300&fit=crop",
      category: "UX Design",
    },
  ];

  // ✅ Add these states and refs
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // ✅ Mouse down - start dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current!.offsetLeft);
    setScrollLeft(containerRef.current!.scrollLeft);
  };

  // ✅ Mouse move - drag cards
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const x = e.pageX - containerRef.current!.offsetLeft;
    const walk = (x - startX) * 2; // скорость движения
    containerRef.current!.scrollLeft = scrollLeft - walk;
  };

  // ✅ Mouse up - stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <StyleDiv>
      <div className="books-father">
        <p>Recommended for You</p>
        <div
          className={`books-grid ${isDragging ? "is-grabbing" : ""}`}
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} />
              <div className="book-info">
                <h4 className=" text-decoration-underline">{book.title}</h4>
                <span className="category">{book.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyleDiv>
  );
}

export default HomeMainContent;

const StyleDiv = styled.div`
  .books-grid {
    cursor: grab;

    overflow-x: auto;
    width: 100%;
    display: flex;
    margin-top: 10px;
    gap: 12px;
    padding-bottom: 8px;
    scrollbar-width: none;
    user-select: none;
  }

  .book-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: end;
  }

  .book-card {
    min-width: 150px;
    text-align: center;
    transition: transform 0.2s;
    background-color: rgb(248, 250, 252);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    font-weight: 600;

    img {
      height: 150px;
      width: 100%;
      border-radius: 0 15px 15px 0;
    }

    .category {
      font-weight: 500;
      color: #de8d1b;
      font-size: 13px;
    }

    &:hover {
      transform: translateY(-4px);
    }
  }

  .books-father {
    margin-top: 4rem;

    > p {
      color: black;
      font-weight: 600;
      font-size: 17px;
      padding: 0;
      margin: 0;
    }
  }
`;
