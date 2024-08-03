import styled from "styled-components";
import { Product } from "../../apis/getProducts";
import { useNavigate } from "react-router-dom";
import heartInActiveIcon from "../../assets/images/ic_heart_inactive.png";

interface ProductCardProps {
  product: Product;
}

const StyledProductCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledProductImg = styled.img`
  border-radius: 16px;
  width: 100%;
  aspect-ratio: 1 / 1;
  cursor: pointer;
`;

const StyledDetailsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const StyledName = styled.h3`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`;

const StyledPrice = styled.p`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
`;

const StyledFavoriteArea = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StyledHeartImg = styled.img`
  display: block;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const StyledFavoriteCount = styled.div`
  color: ${({ theme }) => theme.colors.gray600};
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
`;

function ProductCard({ product }: ProductCardProps) {
  const { favoriteCount, images, name, price, id } = product;
  const itemDetailPath = `/items/${id}`;

  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(itemDetailPath);
  };

  return (
    <StyledProductCard>
      <StyledProductImg onClick={handleCardClick} src={images[0]} alt="상품 이미지" />
      <StyledDetailsArea>
        <StyledName>{name}</StyledName>
        <StyledPrice>{price}</StyledPrice>
        <StyledFavoriteArea>
          <StyledHeartImg src={heartInActiveIcon} alt="관심 이미지" />
          <StyledFavoriteCount>{favoriteCount}</StyledFavoriteCount>
        </StyledFavoriteArea>
      </StyledDetailsArea>
    </StyledProductCard>
  );
}

export default ProductCard;
