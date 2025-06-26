"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [stars, setStars] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const repoUrl = "https://github.com/glucrypto/claude-code-extended"; // Update this with your actual repo URL

  const copyCommand = async () => {
    const command =
      "claude mcp add --transport sse claude_ext https://mcptools.sh/api/mcp";
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  useEffect(() => {
    // Extract owner and repo from URL
    const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (match) {
      const [, owner, repo] = match;
      fetch(`https://api.github.com/repos/${owner}/${repo}`)
        .then((res) => res.json())
        .then((data) => setStars(data.stargazers_count))
        .catch(() => setStars(null));
    }
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "monospace",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            marginBottom: "0.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          claude_ext
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            opacity: 0.7,
            marginBottom: "3rem",
            lineHeight: 1.5,
          }}
        >
          Common sense defaults to enhance terminal based AI coding with
          `sessions` and `docs`, realized as an MCP server.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                marginBottom: "1rem",
                opacity: 0.7,
              }}
            >
              Installation
            </h2>
            <div
              style={{
                background: "#1a1a1a",
                borderRadius: "8px",
                border: "1px solid #2a2a2a",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
              }}
              onClick={copyCommand}
              title="Click to copy command"
            >
              {/* Terminal header */}
              <div
                style={{
                  background: "#2a2a2a",
                  padding: "0.5rem 1rem",
                  borderBottom: "1px solid #3a3a3a",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <div style={{ display: "flex", gap: "0.25rem" }}>
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#ff5f56",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#ffbd2e",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#27ca3f",
                    }}
                  ></div>
                </div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    opacity: 0.7,
                    marginLeft: "0.5rem",
                  }}
                >
                  Terminal
                </span>
                <div
                  style={{
                    marginLeft: "auto",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {copied && (
                    <span style={{ fontSize: "0.75rem", color: "#10b981" }}>
                      Copied!
                    </span>
                  )}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ opacity: 0.7 }}
                  >
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </div>
              </div>
              {/* Terminal content */}
              <pre
                style={{
                  background: "transparent",
                  padding: "1rem 1.5rem",
                  margin: 0,
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  overflow: "auto",
                }}
              >
                <code>
                  <span style={{ color: "#6b7280" }}>$ </span>
                  <span style={{ color: "#10b981" }}>claude mcp add </span>
                  <span style={{ color: "#3b82f6" }}>--transport sse </span>
                  <span style={{ color: "#f59e0b" }}>claude_ext </span>
                  <span style={{ color: "#ef4444" }}>
                    https://mcptools.sh/api/mcp
                  </span>
                </code>
              </pre>
            </div>
          </div>

          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1rem",
              background: "#1a1a1a",
              border: "1px solid #2a2a2a",
              borderRadius: "6px",
              fontSize: "0.875rem",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#2a2a2a";
              e.currentTarget.style.borderColor = "#3a3a3a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#1a1a1a";
              e.currentTarget.style.borderColor = "#2a2a2a";
            }}
          >
            <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            Github
            {stars !== null && (
              <span
                style={{
                  background: "#2a2a2a",
                  padding: "0.125rem 0.375rem",
                  borderRadius: "4px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                }}
              >
                 {stars}
              </span>
            )}
          </a>
        </div>
      </div>
    </main>
  );
}
