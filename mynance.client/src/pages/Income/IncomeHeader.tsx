import { Title1, Toolbar, ToolbarButton } from "@fluentui/react-components";

export const IncomeHeader = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr max-content" }}>
      <Title1>Income</Title1>
      <Toolbar>
        <ToolbarButton appearance="primary">Add Income Source</ToolbarButton>
      </Toolbar>
    </div>
  );
};
