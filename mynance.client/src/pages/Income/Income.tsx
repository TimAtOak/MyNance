import {
  Caption1,
  makeStyles,
  shorthands,
  Title3,
  tokens,
} from "@fluentui/react-components";
import { IncomeHeader } from "./IncomeHeader";

const useClasses = makeStyles({
  grid: {
    display: "grid",
    gap: tokens.spacingHorizontalL,
    marginTop: "1rem",
  },
  itemWrapper: {
    transition: "0.2s ease-in-out",
    borderBottom: "1px solid black",
    borderRadius: tokens.borderRadiusLarge,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: tokens.colorBrandBackground2Hover,
    },
  },
  itemContent: {
    display: "grid",
    gridTemplateColumns: "1fr max-content",
    ...shorthands.padding("15px"),
  },
  titleSize: {
    fontSize: "16px",
  },
});

export const Income = () => {
  const { grid, itemWrapper, itemContent, titleSize } = useClasses();

  return (
    <div>
      <IncomeHeader/>
      <div className={grid}>
        <div className={itemWrapper}>
          <div className={itemContent}>
            <Title3 className={titleSize}>Salary</Title3>
            <Caption1 style={{ alignSelf: "center" }}>from: Synprovis</Caption1>
            <div>5199 CHF per Month</div>
          </div>
        </div>
        <div className={itemWrapper}>
          <div className={itemContent}>
            <Title3 style={{ fontSize: 16 }}>Salary</Title3>
            <Caption1 style={{ alignSelf: "center" }}>from: Synprovis</Caption1>
            <div>5199 CHF per Month</div>
          </div>
        </div>
        <div className={itemWrapper}>
          <div className={itemContent}>
            <Title3 style={{ fontSize: 16 }}>Salary</Title3>
            <Caption1 style={{ alignSelf: "center" }}>from: Synprovis</Caption1>
            <div>5199 CHF per Month</div>
          </div>
        </div>
      </div>
    </div>
  );
};
