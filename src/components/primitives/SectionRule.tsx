type SectionRuleProps = {
  label?: string;
};

export default function SectionRule({ label }: SectionRuleProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        paddingBlock: 24,
      }}
    >
      <div style={{ height: 1, flex: 1, background: "var(--line-c)" }} />
      {label && (
        <span className="mono" style={{ color: "var(--fg-mute)" }}>
          {label}
        </span>
      )}
      <div style={{ height: 1, flex: 1, background: "var(--line-c)" }} />
    </div>
  );
}
