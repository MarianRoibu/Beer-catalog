import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  padding: 10px;
  text-align: left;
`;

const ImageWrapper = styled.div`
  width: 5vh;
  height: 5vh;
  overflow: hidden;
  border-radius: 10%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export {
    Table, 
    Th,
    Td,
    ImageWrapper
}