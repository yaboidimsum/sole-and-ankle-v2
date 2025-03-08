import React from "react";
import styled from "styled-components";

import { COLORS, WEIGHTS } from "../../constants";
import { formatPrice, pluralize, isNewShoe } from "../../utils";
import Spacer from "../Spacer";

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  const VARIANT_STYLES = {
    "on-sale": {
      "--bg-color": COLORS.primary,
      "--color": COLORS.gray["700"],
      "--text-decoration": "line-through",
      labelText: "Sale",
    },
    "new-release": {
      "--bg-color": COLORS.secondary,
      "--color": COLORS.gray["900"],
      labelText: "Just Released",
    },
    default: {
      "--bg-color": "transparent",
      "--color": COLORS.gray["900"],
      labelText: null,
    },
  };

  const variantStyle = VARIANT_STYLES[variant];

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <SaleLabel style={variantStyle}>{variantStyle.labelText}</SaleLabel>
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price style={variantStyle}>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
          {salePrice !== null && (
            <SalePrice>{formatPrice(salePrice)}</SalePrice>
          )}
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  isolation: isolate;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
  color: var(--color);
  text-decoration: var(--text-decoration);
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SaleLabel = styled.span`
  font-weight: ${WEIGHTS.medium};
  background-color: var(--bg-color);
  color: white;
  width: fit-content;
  padding: 0 10px;
  border-radius: 4px;
  position: absolute;
  right: -4px;
  top: 10px;
  height: 32px;
  line-height: 32px;
  font-size: ${14 / 18} rem;
  font-weight: ${WEIGHTS.bold};
`;

const SalePrice = styled.span`
  color: ${COLORS.primary};
`;

export default ShoeCard;
