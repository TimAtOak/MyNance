import { Caption1, Title1, Title3, tokens } from "@fluentui/react-components";

export const Income = () => {
  return (
    <div>
      <Title1>Income</Title1>
      <div
        style={{ display: "grid", gap: tokens.spacingHorizontalL, gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr)" }}
      >
        <div style={{ border: "1px solid black", borderRadius: tokens.borderRadiusLarge }}>
          <Title3>Lohn</Title3>
          <Caption1>Synprovis</Caption1>
          <div>5199</div>
        </div>
        <div style={{ border: "1px solid black" }}>
          <div>Lohn</div>
          <div>Synprovis</div>
          <div>5199</div>
        </div>
      </div>
    </div>
  );
};
