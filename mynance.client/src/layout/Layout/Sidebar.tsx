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
import { Link } from "wouter";

const useClasses = makeStyles({
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
    ...shorthands.padding(0),
  },
  menu: {
    marginTop: tokens.spacingVerticalM,
    ...shorthands.padding(0),
  },
  link: {
    textDecorationLine: "none",
  },
});

export const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const { iconBar, drawer, drawerContent, menu, link } = useClasses();
  return (
    <>
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
            <MenuList className={menu}>
              <Link className={link} href="/">
                <MenuItem>Dashboard</MenuItem>
              </Link>
              <Link className={link} href="/income">
                <MenuItem>Income</MenuItem>
              </Link>
            </MenuList>
          </DrawerBody>
        </InlineDrawer>
      </nav>
    </>
  );
};
