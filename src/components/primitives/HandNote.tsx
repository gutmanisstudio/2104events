type HandNoteProps = {
  children: React.ReactNode;
  rotate?: number;
};

export default function HandNote({ children, rotate = -1.5 }: HandNoteProps) {
  return (
    <span
      className="serif"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontStyle: "italic",
        color: "var(--accent)",
        fontSize: 17,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden>
        <path
          d="M2,12 Q8,2 14,8 T20,4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      {children}
    </span>
  );
}
