import { styled } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "../../store/basket/basketSlice";
import { uiActions } from "../../store/ui/uiSlice";
import Button from "../UI/Button";
import { BasketButton } from "./BasketButton";

const Header = ({ onShowBasket }) => {
  const items = useSelector((state) => state.basket.items);
  const [animationClass, setAnimationClass] = useState("");
  const themeMode = useSelector((state) => state.ui.themeMode);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasket());  
  }, [dispatch]);

  const calculateTotalAmount = () => {
    const sum = items.reduce((s, item) => {
      return s + item.amount;
    }, 0);

    return sum;
  };

  useEffect(() => {
    setAnimationClass("bump");

    const id = setTimeout(() => {
      setAnimationClass("");
    }, 300);

    return () => {
      clearTimeout(id);
    };
  }, [items]);

  const themeChangeHandler = () => {
    const theme = themeMode === "light" ? "dark" : "light";

    dispatch(uiActions.changeTheme(theme));
  };

  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BasketButton
        className={animationClass}
        onClick={onShowBasket}
        count={calculateTotalAmount()}
      />
      <Button onClick={themeChangeHandler}>
        {themeMode === "light" ? "Turn Dark mode" : "Turn light mode"}
      </Button>
    </Container>
  );
};

export default Header;

const Container = styled("header")(({ theme }) => ({
  position: "fixed",
  top: 0,
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  height: "6.3125rem",
  backgroundColor: theme.palette.primary.light,
  padding: "0 7.5rem",
  alignItems: "center",
  zIndex: 1,
}));

const Logo = styled("p")(() => ({
  fontWeight: 600,
  fontSize: "2.375rem",
  lineHeight: "3.5625rem",
  color: "#ffffff",
  margin: 0,
}));
