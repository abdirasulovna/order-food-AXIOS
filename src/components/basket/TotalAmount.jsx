import React from "react";
import { memo } from "react";
import styled from "styled-components";
import MuiButton from "../UI/Button";

const TotalAmount = ({ price, onCLose, onOrder }) => {
  const orderButton =
    price > 0 ? <MuiButton onClick={onOrder}>Order</MuiButton> : null;

  const fixedPrice = price.toFixed(2);

  return (
    <Container>
      <InfoContainer>
        <Label>Total amount</Label>
        <Price>${fixedPrice}</Price>
      </InfoContainer>

      <ActionButtonsContainer>
        <MuiButton variant="outlines" onClick={onCLose}>
          close
        </MuiButton>
        {orderButton}
      </ActionButtonsContainer>
    </Container>
  );
};

export default memo(TotalAmount);

const Label = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin: 0;
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #8a2b06;
  margin: 0;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionButtonsContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Container = styled.div`
  margin: 30px 0 0 0;
`;
