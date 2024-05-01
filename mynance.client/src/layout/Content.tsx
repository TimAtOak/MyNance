import {
  Button,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  InlineDrawer,
  MenuItem,
  MenuList,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { ChevronDoubleRightFilled } from "@fluentui/react-icons";
import { useState } from "react";
const useClasses = makeStyles({
  mainContainer: {
    height: "calc(100% - 52px)",
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.padding(tokens.spacingHorizontalL),
    ...shorthands.transition("all", "4s", "ease-in-out", "1s"),
  },
  wrapper: {
    display: "grid",
    gridTemplateColumns: "max-content max-content 1fr",
    height: "calc(100vh - 52px)",
    position: "relative",
  },
  iconBar: {
    zIndex: "1",
    backgroundColor: tokens.colorBrandBackground2,
  },
  drawer: {
    backgroundColor: tokens.colorBrandBackground2,
    height: "100%",
  },
  drawerContent: {
    backgroundColor: tokens.colorBrandBackground2,
    ...shorthands.padding(0)
  },
});

export const Content = () => {
  const { mainContainer, wrapper, iconBar, drawer, drawerContent } =
    useClasses();
  const [open, setOpen] = useState(false);

  return (
    <div className={wrapper}>
      <div className={iconBar}>
        <Button
          appearance="transparent"
          style={{ height: "40px", width: "100px" }}
          icon={
            <ChevronDoubleRightFilled
              fontSize="30px"
              style={{
                color: tokens.colorBrandForeground1,
                transition: "all 0,4s ease-in",
                transform: open === true ? "rotate(45deg)" : "",
              }}
            />
          }
          onClick={() => setOpen(!open)}
        />
      </div>
      <nav>
        <InlineDrawer className={drawer} open={open}>
          <DrawerHeader>
            <DrawerHeaderTitle>Tim Ineichen</DrawerHeaderTitle>
          </DrawerHeader>

          <DrawerBody className={drawerContent}>
            <MenuList style={{marginTop: tokens.spacingVerticalM, padding: 0}}>
              <MenuItem style={{width:"100%"}}>Overview</MenuItem>
              <MenuItem>Goals</MenuItem>
              <MenuItem>Other</MenuItem>
            </MenuList>
          </DrawerBody>
        </InlineDrawer>
      </nav>
      <main className={mainContainer}>Main Content</main>
    </div>
  );
};
