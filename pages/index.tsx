import { gql } from "@apollo/client";
import { DocumentNode, NameNode, OperationDefinitionNode } from "graphql";
import Head from "next/head";
import Image from "next/image";
import client from "../assets/apis/apolloClient";
import axiosInstance from "../assets/apis/axiosInstance";
import { GQL_DOMAIN } from "../assets/utils/ENV";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";


const Home = ({ countries }: any) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>

      <Header />
      <div style={{ flex: 1, }}></div>
      <Footer />
    </div>
  );
};

// getStaticProps 함수는, React 컴포넌트가 실행되기 전에 실행된다!
export const getStaticProps = async () => {
  const query = `
    query Countries {
      countries {
        code
        name
        emoji
      }
    }
  `;

  const gqlQuery = gql`
    ${query}
  `
  // apollo에 연결된 graphql쿼리문 사용하고, 데이터 불러오기
  const { data } = await client.query({
    query: gqlQuery,
  });

  // axois call
  // innerQuery 는 쿼리의 오브젝트 명을 추출하기 위함 해당 부분은 리프레쉬 토큰 처리를 위해 인터셉터에서 사용하기위해 추출했었음
  const innerQuery = gqlQuery.definitions[0] as OperationDefinitionNode;
  const { value } = innerQuery.name as NameNode;

  axiosInstance(value)
    .post(`${GQL_DOMAIN}`, {
      query: query,
      // variables: {
      //     idx
      // }
    })
    .then(res => {
      // console.log(res.data.data['countries'])
      // 추출한 쿼리의 오브젝트 이름을 value로 넣어 실질적 안에 있는 데이터를 가져옴
      // console.log(res.data.data[value])
    });

  // Home의 props로 data 보내주기
  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  };
};

export default Home;
