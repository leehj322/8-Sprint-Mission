import styled from "styled-components";
import { useState, useEffect } from "react";
import useCurrentDevice from "hooks/useCurrentDevice";
import getProducts, { GetProductsProps, Product } from "apis/getProducts";
import ProductCard from "./ProductCard";

const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  margin-bottom: 16px;
`;

const StyledBestProductsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 24px;

  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function BestProductsList() {
  const handleProductsLoad = async ({ orderBy, page, pageSize }: GetProductsProps) => {
    const { list }: { list: Product[] } = await getProducts({ orderBy, page, pageSize });
    setProducts(list);
  };

  const currentDevice = useCurrentDevice();

  let pageSize: 1 | 2 | 4;
  if (currentDevice === "desktop") {
    pageSize = 4;
  } else if (currentDevice === "tablet") {
    pageSize = 2;
  } else {
    pageSize = 1;
  }

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    handleProductsLoad({ pageSize });
  }, [pageSize]);

  return (
    <section>
      <StyledTitle>베스트 상품</StyledTitle>
      <StyledBestProductsGrid>
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </StyledBestProductsGrid>
    </section>
  );
}

export default BestProductsList;
