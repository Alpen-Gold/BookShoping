import type { ReactNode } from "react";
import styled from "styled-components";

export default function AuthPageFrame({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <Outer>
      <div className="bg" aria-hidden="true" />
      <div className="center">
        <div className="card">
          <div className="brand">
            <div className="title">{title}</div>
            {subtitle ? <div className="subtitle">{subtitle}</div> : null}
          </div>
          <div className="body">{children}</div>
        </div>
      </div>
    </Outer>
  );
}

const Outer = styled.div`
  min-height: calc(100vh - 20px);
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .center {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bg {
    position: fixed;
    inset: 0;
    background: linear-gradient(
        135deg,
        rgba(212, 69, 58, 0.18),
        rgba(0, 0, 0, 0) 55%
      ),
      radial-gradient(circle at 10% 10%, rgba(0, 0, 0, 0.08), transparent 55%),
      #f3f4f6;
    background-size: cover;
    background-position: center;
    filter: blur(0px);
    opacity: 1;
    z-index: -1;
  }

  .card {
    width: 100%;
    max-width: 440px;
    background: rgba(255, 255, 255, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.65);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 22px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
  }

  .brand {
    margin-bottom: 14px;
  }

  .title {
    margin: 0;
    font-size: 26px;
    line-height: 1.2;
    color: #0f172a;
    font-weight: 800;
  }

  .subtitle {
    margin: 8px 0 0;
    font-size: 13px;
    color: #64748b;
  }
  .body {
    margin-top: 10px;
  }
`;
