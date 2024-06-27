import React, { FC } from 'react';
import { StyledCompsWrapper, NormalPriceCard, ImgPhone, Star, NewStick, HeartContainer, ScalesContainer, ColorsContainer, Color1, Color2, Color3, Color4, ContainerMemory, MemoryStick, ProductTit, ProductNumber, StarsContainer, Reviews, PriceContainer, NewPrice, OldPrice, BuyBtn } from './StyledComps.styled.ts';

interface StyledCompsProps {}

const StyledComps: FC<StyledCompsProps> = () => (
  <StyledCompsWrapper>
    <NormalPriceCard>
     <Star></Star>
     <NewStick>Новинка</NewStick>
     <HeartContainer>
    <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 18.523L9.33593 17.8012L9.31519 17.7787L9.29311 17.7574C6.67759 15.2425 4.59054 13.2072 3.14763 11.299C1.71786 9.4082 1 7.74253 1 5.97826C1 3.08085 3.02915 1 5.5 1C6.86864 1 8.28584 1.70856 9.21091 2.89689L10 3.91054L10.7891 2.89689C11.7142 1.70856 13.1314 1 14.5 1C16.9709 1 19 3.08085 19 5.97826C19 7.74253 18.2821 9.4082 16.8524 11.299C15.4095 13.2072 13.3224 15.2425 10.7069 17.7574L10.6848 17.7787L10.6641 17.8012L10 18.523Z" stroke="#9d9d9d" stroke-width="2" stroke-linecap="round">
      </path>
    </svg>
  </HeartContainer>
  <ScalesContainer>
     <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.8636 5.63423L18.6907 8.66665L16.761 8.66665L17.8636 5.63423Z" fill="#2972CC" stroke="#9e9e9e" stroke-width="2" stroke-linecap="round"></path>
          <path d="M2.53039 12.9676L3.35742 16H1.4277L2.53039 12.9676Z" fill="#2972CC" stroke="#9e9e9e" stroke-width="2" stroke-linecap="round"></path>
          <path d="M1.33325 9.66669L17.9999 1.66669" stroke="#9e9e9e" stroke-width="2" stroke-linecap="round"></path>
          <path d="M10 4.33337V19.6667" stroke="#9e9e9e" stroke-width="2" stroke-linecap="round"></path>
          <path d="M4 19.6667H15.3333" stroke="#9e9e9e" stroke-width="2" stroke-linecap="round"></path>
     </svg>
     </ScalesContainer>
      <ImgPhone src="https://content1.rozetka.com.ua/goods/images/big/364827001.jpg" alt="Phone" />
      <ColorsContainer>
      <Color1></Color1>
      <Color2></Color2>
      <Color3></Color3>
      <Color4></Color4>
      </ColorsContainer>
      <ContainerMemory>
        <MemoryStick>128 ГБ</MemoryStick>
        <MemoryStick>256 ГБ</MemoryStick>
        <MemoryStick>512 ГБ</MemoryStick>
        <MemoryStick>1 ТБ</MemoryStick>
      </ContainerMemory>
      <ProductTit>
          Apple iPhone 15 Pro 128 ГБ Natural Titanium<ProductNumber>MTV03</ProductNumber>
      </ProductTit>
      <StarsContainer>
        <svg width="16" height="16" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 0L10.145 3.85942L14.6329 5.18237L11.7798 8.89058L11.9084 13.5676L7.5 12L3.09161 13.5676L3.22025 8.89058L0.367076 5.18237L4.85497 3.85942L7.5 0Z" fill="#FFC801"></path>
        </svg>
        <svg width="16" height="16" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 0L10.145 3.85942L14.6329 5.18237L11.7798 8.89058L11.9084 13.5676L7.5 12L3.09161 13.5676L3.22025 8.89058L0.367076 5.18237L4.85497 3.85942L7.5 0Z" fill="#FFC801"></path>
        </svg>
        <svg width="16" height="16" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 0L10.145 3.85942L14.6329 5.18237L11.7798 8.89058L11.9084 13.5676L7.5 12L3.09161 13.5676L3.22025 8.89058L0.367076 5.18237L4.85497 3.85942L7.5 0Z" fill="#FFC801"></path>
        </svg>
        <svg width="16" height="16" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 0L10.145 3.85942L14.6329 5.18237L11.7798 8.89058L11.9084 13.5676L7.5 12L3.09161 13.5676L3.22025 8.89058L0.367076 5.18237L4.85497 3.85942L7.5 0Z" fill="#FFC801"></path>
        </svg>
        <svg width="16" height="16" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 0L10.145 3.85942L14.6329 5.18237L11.7798 8.89058L11.9084 13.5676L7.5 12L3.09161 13.5676L3.22025 8.89058L0.367076 5.18237L4.85497 3.85942L7.5 0Z" fill="#FFC801"></path>
        </svg>
        <Reviews>Відгуки 16</Reviews>
      </StarsContainer>
      <PriceContainer><NewPrice>40 999 грн</NewPrice> <OldPrice>68 999 грн</OldPrice></PriceContainer>
      <BuyBtn>Купити</BuyBtn>
    </NormalPriceCard>
    
  </StyledCompsWrapper>
);

export default StyledComps;
