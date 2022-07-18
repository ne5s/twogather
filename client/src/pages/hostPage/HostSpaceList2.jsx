import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "../../components/Pagination";
import ProductCard from "../../components/ProductCard";
import exImg1 from "../../assets/images/ex1.png";
import exImg2 from "../../assets/images/ex2.png";
import HostUpdateSpace from "../HostUpdateSpace";
import * as api from "../../api";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/register/UserForm";
ProductList.defaultProps = {
  host: {
    id: "host123",
    name: "김민수",
  },
};

// const ex1 = [
//   {
//     src: [exImg1, exImg2],
//     tag: [
//       "#강남모임공간",
//       "#강남파티룸",
//       "#강남럭셔리파티룸",
//       "#강남럭셔리모임공간",
//       "#앤틱공간대여",
//     ],
//     title: "강남최대 앤틱모임공간 공유먼트청담",
//     address: "서울 강남구 청담동 88-1 하늘빌딩 지하1층",
//     price: "150,000",
//     review: "12",
//   },
// ];
// const ex2 = [
//   {
//     src: [exImg1, exImg2],
//     tag: [
//       "#강남모임공간",
//       "#강남파티룸",
//       "#강남럭셔리파티룸",
//       "#강남럭셔리모임공간",
//       "#앤틱공간대여",
//     ],
//     title: "강남최대 앤틱모임공간 공유먼트청담",
//     address: "서울 강남구 청담동 88-1 하늘빌딩 지하1층",
//     price: "150,000",
//     review: "12",
//   },
// ];

// let exData = [];
// for (let i = 0; i < 4; i++) {
//   exData = exData.concat(ex1);
// }
// for (let i = 4; i < 8; i++) {
//   exData = exData.concat(ex2);
// }

export default function ProductList({ host }) {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [datas, setDatas] = useState(false);
  const limit = 4;
  const offset = (page - 1) * limit;

  useEffect(() => {
    async function getData() {
      try {
        const res = await api.get("api/spaces/host");
        const data = res.data.data;
        setDatas(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  const renderData = (offset, limit, data) => {
    return data.slice(offset, offset + limit).map((data, i) => (
      <>
        <ProductCard
          key={i}
          src={[exImg1, exImg2]} //아직없음
          hashtags={["#강남모임공간", "#블라블라"]}
          name={data.name}
          address={data.address}
          price={15000}
          review={13} //아직없음
          link={`/host/updateSpace/${data.id}`}
        ></ProductCard>
        <SubMenuBar>
          <Menu onClick={() => navigate(`/host/updateSpace/${data.id}`)}>
            1.공간수정
          </Menu>
          <Menu>2.공간삭제</Menu>
          {/* 공간삭제 */}
          <Menu onClick={() => navigate(`/host/addRoom/${data.id}`)}>
            3.룸추가
          </Menu>
          <Menu onClick={() => navigate(`/host/updateRoom/${data.id}`)}>
            4.룸수정
          </Menu>
          {/* 룸수정에서 삭제하기? */}
          <Menu>5.룸삭제</Menu>
          {/* {// 룸삭제 구현?//} */}
        </SubMenuBar>
      </>
    ));
  };

  function clickToModSpace() {
    return <HostUpdateSpace></HostUpdateSpace>;
  }

  return (
    datas && (
      <BottomWrap>
        <TitleContanier>
          <MainTitle>{host.name}님 </MainTitle>
          <Title>공간내역</Title>
        </TitleContanier>
        <div onClick={clickToModSpace}>
          <ProductWrap>{renderData(offset, limit, datas)}</ProductWrap>
          <div>
            <Pagination
              total={datas.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </div>
        </div>
      </BottomWrap>
    )
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SubMenuBar = styled.div`
  paddin: 3%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Menu = styled.div`
  cursor: pointer;
  :hover {
    color: blue;
  }
`;
const BottomWrap = styled.div`
  margin: 0 15%;
`;

const TitleContanier = styled.div`
  border-bottom: 2px solid #8daef2;
  display: flex;
  justify-content: center;
  margin: 10%;
`;

const MainTitle = styled.span`
  font-size: 25px;
  font-weight: 700;
  color: #8daef2;
`;

const Title = styled.span`
  font-size: 18px;
  margin: 5px;
`;

const ProductWrap = styled.div`
  display: grid;
  margin: 0 auto;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2%;
`;
