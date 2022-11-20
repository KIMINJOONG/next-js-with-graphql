import { gql } from "@apollo/client";
import { DocumentNode, NameNode, OperationDefinitionNode } from "graphql";
import Head from "next/head";
import Image from "next/image";
import { color } from "styles/theme";
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
      <div style={{ display: 'flex', flexDirection: 'column', overflow: 'scroll', paddingTop: 60, backgroundColor: 'white', }}>
        <section style={{ backgroundColor: '#F8F8F8', height: 699, }}>
          <div style={{ maxWidth: '1100px', margin: 'auto', position: 'relative' }}>
            <div style={{ paddingTop: 160, }}>
              <div>
                <p style={{ fontSize: 50, fontWeight: 600 }}>문화를 통해 공간을</p>
                <p style={{ fontSize: 50, fontWeight: 600 }}>재생하다.</p>
              </div>
              <div style={{ marginTop: 28 }}>
                <p>지역 역사와 문화의 고유한 가치를 콘텐츠로 개발하여</p>
                <p>지역사회의 가치를 상승시키고 시민들의 삶의 질을 높이고자 합니다.</p>

              </div>
            </div>

            <div style={{ marginTop: 66, }}>
              <Image src={require('../assets/images/main.png')} alt={'main'} style={{ width: '1100px', height: '438px' }} />
            </div>
            <div style={{ position: 'absolute', top: -60, right: 0, marginRight: '104px' }}>
              <Image className="img" src={require('../assets/images/main_text.png')} alt={'main_text'} width={254} height={259} />
            </div>

            <div style={{ position: 'absolute', top: 0, right: 0 }}>

              <div style={{ padding: '36px 13px 121px 14px', backgroundColor: '#F6C42D' }}>
                <span style={{ textOrientation: 'sideways', writingMode: 'vertical-lr', letterSpacing: 15 }}>NABILERA</span>
              </div>
            </div>
          </div>

        </section>
        <section style={{ height: 679 }}>
          <div style={{ maxWidth: '1100px', margin: 'auto', display: 'flex', flexDirection: 'row', position: 'relative', }}>
            <div style={{ marginTop: 288 }}>
              <Image src={require('../assets/images/main_news.png')} alt={'main'} style={{ width: '367px', height: '477px' }} />
            </div>
            <div style={{ marginLeft: 92, marginTop: 304, flex: 1 }}>
              <h2 style={{ fontSize: 50 }}>News</h2>
              <ul style={{ marginTop: 31 }}>
                <li style={{ display: 'flex', flexDirection: 'row', paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: 'black', borderBottomStyle: 'solid' }}>
                  <p style={{ flex: 1, fontSize: 15 }}>[춘천사람들] [취재기자 현장 인터뷰] (사)강원살이 청년이 행복한 춘천을 꿈꾼다</p>
                  <p style={{ fontSize: 14 }}>2022.11.10</p>
                </li>
              </ul>
            </div>
          </div>

        </section>
        <section style={{ backgroundColor: color.N40, }}>
          <div style={{ maxWidth: 1100, margin: 'auto', position: 'relative', height: 1152 }}>
            <div style={{ position: 'absolute', top: 132, right: 92, backgroundColor: '#FDFDFD', padding: '62px 0px 60px 33px' }}>
              <div style={{ padding: '62px 103px 0px 0px' }}>
                <Image src={require('../assets/images/mission.png')} alt={'main'} style={{ width: 131, height: 91 }} />
              </div>
              <div style={{ marginTop: 61 }}>
                <h3>미션</h3>
                <p style={{ marginTop: 20, maxWidth: 211 }}>
                  지역의 문화자원을 창의적 사고와 끝없는 도전을 통해 콘텐츠를 개발함으로써 지역의 문화를 바꾼다.
                </p>
              </div>
            </div>


            <div style={{ position: 'absolute', top: 313, left: 365.5, backgroundColor: '#FDFDFD', padding: '62px 0px 60px 33px' }}>
              <div style={{ padding: '62px 103px 0px 0px' }}>
                <Image src={require('../assets/images/vision.png')} alt={'main'} style={{ width: 131, height: 91 }} />
              </div>
              <div style={{ marginTop: 61 }}>
                <h3>비전</h3>
                <p style={{ marginTop: 20, maxWidth: 211 }}>
                  지역 역사와 문화를 통해 공간을 재생하여 국내 및 해외 관광객들에게 지역 문화 콘텐츠 제공
                </p>
              </div>
            </div>



            <div style={{ position: 'absolute', bottom: 146, right: 92, backgroundColor: '#FDFDFD', padding: '62px 0px 60px 33px' }}>
              <div style={{ padding: '62px 103px 0px 0px' }}>
                <Image src={require('../assets/images/value.png')} alt={'main'} style={{ width: 131, height: 91 }} />
              </div>
              <div style={{ marginTop: 61 }}>
                <h3>가치</h3>
                <p style={{ marginTop: 20, maxWidth: 211 }}>
                  #지역 #문화 #재생
                </p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ backgroundColor: 'white', paddingTop: 106, paddingBottom: 40 }}>
          <div style={{ maxWidth: 1100, margin: 'auto', }}>
            <div>
              <h2 style={{ fontSize: 50 }}>History</h2>
              <div style={{ display: 'flex', flexDirection: 'row', marginTop: 103, borderTop: '1px solid black', padding: '30px 0px 30px 0px' }}>
                <div>
                  <span style={{ fontSize: 35 }}>2022</span>
                </div>
                <div style={{ marginLeft: 182, flex: 1 }}>
                  <ul style={{ listStyleType: 'circle' }}>
                    <li>
                      <span>dasd</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>
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
