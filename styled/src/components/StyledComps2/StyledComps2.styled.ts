import styled from 'styled-components';

export const StyledCompsWrapper = styled.div`
    display: flex;
`;

export const NormalPriceCard = styled.div`
    height: 490px;
    width: 320px;
    background: linear-gradient(white, #FFE28C);
    border-style:solid;
    border-color: orange;
    border-width:2px;
    border-radius:1px;
    margin: 20px;
    font-family: 'IBM', sans-serif;

`;

export const ImgPhone = styled.img`
    color: white;
    margin-top:40px;
    margin-left:85px;
    width:150px;
    height:auto;
    
`;


export const TopSale = styled.div`
    position:absolute;
    background-color:orange;
    color:white;
    font-weight:600;
    font-size: 14px;
`;

export const Star = styled.div`
    height: 45px;
    width: 45px;
    position: absolute;
    background-image: url("https://www.istore.ua/upload/iblock/374/xek8is9ql6g83jqo02r5s6ey2vwc9n27/50e50.png");
    z-index: 9999;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 50px;
    margin-left: 5px;
`;

export const NewStick = styled.div`
    max-height: 30px;
    max-width: 80px;
    position: absolute;
    z-index: 9999;
    margin-top: 120px;
    margin-left: 5px;
    background: #121212;
   color:white;
    border-radius: 8px;
    font-size:14px;
    padding:7px;
    font-weight:600;
    
`;

export const HeartContainer = styled.div`
  position: absolute;
  margin-left: 280px;
  margin-top: 20px;
`;


export const ScalesContainer = styled.div`
  position: absolute;
  margin-left: 280px;
  margin-top: 80px;
`;


export const ColorsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  text-align: center;
`;

export const Color1 = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  border-width: 3px;
  border-style: solid;
  background-color: #31515C;
  border-color: lightgrey;
  margin-left:10px;
`;


export const Color2 = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  border-width: 3px;
  border-style: solid;
  background-color: #565551;
  border-color: lightgrey;
  margin-left:10px;

`;

export const Color3 = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  border-width: 3px;
  border-style: solid;
  background-color: #FFECCE;
  border-color: lightgrey;
  margin-left:10px;

`;

export const Color4 = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  border-width: 3px;
  border-style: solid;
  background-color: #D9D9D9;
  border-color: lightgrey;
  margin-left:10px;

`;


export const ContainerMemory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  text-align: center;
`;

export const MemoryStick = styled.div`
  height: 15px;;
  width:45px;
  font-size:12px;
  border-style:solid;
  border-width:2px;
  border-color:lightsteelblue;
  padding-top:3px;
  padding-left:2px;
  padding-right:2px;
  border-radius:20px;
  margin-left:7px;
`;
export const ProductTit = styled.div`
  margin-top: 10px;
  display: flexbox;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  margin-left: 15px;
`;
export const ProductNumber = styled.span`
  font-style: italic;
  color: gray;
  margin-left: 5px; 
  font-size:14px;
  font-weight: 200;
  margin-left:10px;
`;

export const StarsContainer = styled.div`
  margin-left: 15px;
  display: flex;
  margin-top: 20px;
  gap: 5px; 
`;


export const Reviews = styled.div`
  color:blue;
  font-size:14px;
`;


export const PriceContainer = styled.div`
  margin-left: 15px;
  display: flex;
`;

export const NewPrice = styled.div`
  margin-top:10px;
  font-weight:600;
`;

export const OldPrice = styled.div`
  text-decoration:line-through;
  font-size:0.7em;
  color:gray;
  margin-top:15px;
  margin-left:20px;
`;



export const BuyBtn = styled.button`
  margin-top:20px;
  height:40px;
  width:80px;
  background-color:#2972CC;
  border-color:transparent;
  color:white;
  border-radius:10px;
  margin-left:15px;
  margin-right:15px;
  width:290px;
  font-size:18px;
  font-weight:600;
`;
