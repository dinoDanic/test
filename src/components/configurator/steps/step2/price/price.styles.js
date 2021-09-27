import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  margin-top: 40px;
  flex-direction: column;
`;

export const HoldInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Coupon = styled.div`
  margin-bottom: 10px;
`;

export const TotalPrice = styled.div`
  display: flex;
`;

export const Sum = styled.div`
  align-items: center;
  font-size: 1.2rem;
  margin-right: 10px;
`;

export const PriceValue = styled.div`
  font-weight: 800;
  font-size: 1.2rem;
`;

export const GotCoupon = styled.div`
  cursor: pointer;
  color: ${(props) => props.theme.colors.ui.primary};
  text-decoration: underline;
`;

export const CouponHolder = styled.div`
  display: flex;
  width: 250px;
  justify-content: flex-start;
  input {
    border-radius: ${(props) => props.theme.spacing.border.md} 0 0
      ${(props) => props.theme.spacing.border.md};
  }
  button {
    border-radius: 0 ${(props) => props.theme.spacing.border.md}
      ${(props) => props.theme.spacing.border.md} 0;
  }
`;

export const FullPriceHold = styled.div`
  display: flex;
  font-size: 0.9rem;
`;

export const FullPrice = styled.div`
  margin-bottom: 5px;
`;
export const Text = styled.div`
  font-size: 0.9rem;
  margin-right: 10px;
`;
export const Discount = styled.div`
  display: flex;
  margin-bottom: 5px;
`;
export const DiscountValue = styled.div`
  font-size: 0.9rem;
`;

export const CouponSuccess = styled.div`
  color: ${(props) => props.theme.colors.ui.success};
  margin-bottom: 10px;
`;
export const CouponFail1 = styled.div`
  color: ${(props) => props.theme.colors.ui.danger};
  margin-bottom: 10px;
`;
