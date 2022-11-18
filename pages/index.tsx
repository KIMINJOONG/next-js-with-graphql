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
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'scroll' }}>
        <div style={{ backgroundColor: '#F8F8F8', display: 'flex', flexDirection: 'row', height: 699 }}>
          <div style={{ flex: 1, border: '1px solid black' }}></div>
          <div style={{ paddingTop: 160, border: '1px solid black' }}>
            <div>
              <p style={{ fontSize: 50, fontWeight: 600 }}>문화를 통해 공간을</p>
              <p style={{ fontSize: 50, fontWeight: 600 }}>재생하다.</p>
            </div>
            {/* <div style={{ marginTop: 28 }}>
              <p style={{ fontSize: 18, fontWeight: 300 }}>지역 역사와 문화의 고유한 가치를 콘텐츠로 개발하여</p>
              <p style={{ fontSize: 18, fontWeight: 300 }}>지역사회의 가치를 상승시키고 시민들의 삶의 질을 높이고자 합니다.</p>
            </div> */}
            <div style={{ marginTop: 66 }}>
              <Image src={require('../assets/images/main.png')} alt={'main'} width={900} height={438} />
            </div>
          </div>
          <div style={{ flex: 1, border: '1px solid black', position: 'relative' }}>
            <div style={{ position: 'absolute', top: -55, left: -40 }}>
              <Image className="img" src={require('../assets/images/main_text.png')} alt={'main_text'} width={254} height={259} />
            </div>
          </div>
          <div style={{ flex: 1, border: '1px solid black', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 92, right: -93, padding: '13px 121px 14px 36px', backgroundColor: '#F6C42D', transform: 'rotate(90deg)' }}>
              <span>NABILERA</span>
            </div>
          </div>
          <div style={{ flex: 1, border: '1px solid black' }}>
          </div>

        </div>

      </div>
      <Footer />
    </div >
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
