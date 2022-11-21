import { gql } from "@apollo/client";
import { DocumentNode, NameNode, OperationDefinitionNode } from "graphql";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { color } from "styles/theme";
import client from "../assets/apis/apolloClient";
import axiosInstance from "../assets/apis/axiosInstance";
import { GQL_DOMAIN } from "../assets/utils/ENV";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

const year2022 = [
  '골목축제 ‘골목대장 히어로’ 기획 및 운영',
  '5~11월 꿈다락 토요문화학교 ‘애들아 역사탈출할래’ 기획 및 운영',
  '청소년 웹드라마 제작단 운영',
  '연극 봉사단 운영',
];
const year2021 = [
  '2월 협동조합 나빌레라 설립',
  '4~6월 홍성역사인물축제 온라인 콘텐츠 기획 및 운영',
  '5월 ‘이번 정류장은 홍성’ 웹드라마 기획 및 제작',
  '5~11월 꿈다락 토요문화학교 ‘애들아 역사탈출할래’ 기획 및 운영',
  '스토리형 미션 프로그램 ‘추억을 훔쳐간 범인을 찾아라’ 기획 및 운영',
  '이응노의 집 ‘시끌벅적 내 맘대로 군상’ 예술교육프로그램 연합 운영',
  '‘나도 영화감독’ 청소년영화교육프로그램 운영',
  '장소특정형 연극 ‘해어화 만향’ 제작',
  '지역설화로 만든 ‘별의 아이’ 아동극 제작'
];

const news = [
  {
    title: '[춘천사람들] [취재기자 현장 인터뷰] (사)강원살이 청년이 행복한 춘천을 꿈꾼다',
    date: '2022.11.10'
  },

  {
    title: '[춘천사람들] 춘천시 첫 명예청년청장 선출',
    date: '2022.11.10'
  },
  {
    title: '귀뚜라미 먹방 올린다고?...사경지원기관의 파격 변화',
    date: '2022.11.10'
  },
  {
    title: '[잡포스트] 춘천문화재단, 전국 문화예술계 종사자 대규모 비대면 온라인 라운드테이블 개최',
    date: '2022.11.10'
  },
  {
    title: '[춘천사람들] 지역 문화·예술계, 코로나19에 \'휘청\'',
    date: '2022.11.10'
  }

]

const MainSectionBottom = styled.section`
  height: 394px;
  background-image: url('images/main_bottom_background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 67%;
`;

const Home = ({ countries }: any) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>

      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', overflow: 'scroll', paddingTop: 60, backgroundColor: 'white', }}>
        <section style={{ backgroundColor: '#F8F8F8', height: 699, }}>
          <div style={{ maxWidth: '1100px', margin: 'auto', position: 'relative' }}>
            <div style={{ zIndex: 1 }}>
              <hr style={{ left: '0%', height: 'calc(100% - 4px)', border: '1px solid #F0F0F0', position: 'absolute' }} />
              <hr style={{ left: '33.6%', height: 'calc(100% - 4px)', border: '1px solid #F0F0F0', position: 'absolute' }} />
              <hr style={{ left: '70.2%', height: 'calc(100% - 4px)', border: '1px solid #F0F0F0', position: 'absolute' }} />
              <hr style={{ left: '100%', height: 'calc(100% - 4px)', border: '1px solid #F0F0F0', position: 'absolute' }} />
            </div>
            <div style={{ paddingTop: 160, zIndex: 2, position: 'relative', }}>
              <div>
                <p style={{ fontSize: 50, fontWeight: 600 }}>문화를 통해 공간을</p>
                <p style={{ fontSize: 50, fontWeight: 600 }}>재생하다.</p>
              </div>
              <div style={{ marginTop: 28 }}>
                <p style={{ fontWeight: 300, fontSize: 18 }}>지역 역사와 문화의 고유한 가치를 콘텐츠로 개발하여</p>
                <p style={{ fontWeight: 300, fontSize: 18 }}>지역사회의 가치를 상승시키고 시민들의 삶의 질을 높이고자 합니다.</p>

              </div>
            </div>

            <div style={{ marginTop: 66, zIndex: 2, position: 'relative', }}>
              <Image src={require('../assets/images/main.png')} alt={'main'} style={{ width: '1100px', height: '438px' }} />
            </div>
            <div style={{ position: 'absolute', top: -60, right: 0, marginRight: 104 }}>
              <Image className="img" src={require('../assets/images/main_text.png')} alt={'main_text'} width={254} height={259} />
            </div>

            <div style={{ position: 'absolute', top: 0, right: 0 }}>

              <div style={{ padding: '36px 13px 121px 14px', backgroundColor: color.brand }}>
                <span style={{ textOrientation: 'sideways', writingMode: 'vertical-lr', letterSpacing: 15 }}>NABILERA</span>
              </div>
            </div>
          </div>

        </section>
        <section style={{ height: 679 }}>
          <div style={{ maxWidth: '1100px', margin: 'auto', display: 'flex', flexDirection: 'row', position: 'relative', height: 679, zIndex: 0 }}>
            <div style={{ zIndex: 1 }}>
              <hr style={{ left: '0%', height: 'calc(100% - 4px)', border: '1px solid #F0F0F0', position: 'absolute' }} />
              <hr style={{ left: '33.6%', height: 'calc(100% - 4px)', border: '1px solid #F0F0F0', position: 'absolute' }} />
              <hr style={{ left: '70.2%', height: 'calc(100% - 4px)', border: '1px solid #F0F0F0', position: 'absolute' }} />
              <hr style={{ left: '100%', height: 'calc(100% - 4px)', border: '1px solid #F0F0F0', position: 'absolute' }} />
            </div>
            <div style={{ marginTop: 288, zIndex: 2, position: 'relative', }}>
              <Image src={require('../assets/images/main_news.png')} alt={'main'} style={{ width: '367px', height: '477px' }} />
            </div>
            <div style={{ marginLeft: 92, marginTop: 304, flex: 1, position: 'relative', zIndex: 0 }}>
              <i style={{ position: 'absolute', top: -5, left: -15, width: 45, height: 45, borderRadius: 25, backgroundColor: color.brand }} />
              <span style={{ fontSize: 50, zIndex: 1, position: 'relative' }}>News</span>
              <ul style={{ marginTop: 33 }}>
                {
                  news.map((item, index) => (
                    <li key={index} style={{ display: 'flex', flexDirection: 'row', paddingTop: index === 0 ? 0 : 15, paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: 'black', borderBottomStyle: 'solid' }}>

                      <p style={{ flex: 1, fontSize: 15 }}>{item.title}</p>
                      <p style={{ fontSize: 14 }}>{item.date}</p>
                    </li>
                  ))
                }

              </ul>
            </div>
          </div>

        </section>
        <section style={{ backgroundColor: color.N40, }}>
          <div style={{ maxWidth: 1100, margin: 'auto', position: 'relative', height: 1152 }}>
            <div>
              <hr style={{ left: '0%', height: 'calc(100% - 4px)', border: '1px solid #625E5C', position: 'absolute' }} />
              <hr style={{ left: '33.6%', height: 'calc(100% - 4px)', border: '1px solid #625E5C', position: 'absolute' }} />
              <hr style={{ left: '70.2%', height: 'calc(100% - 4px)', border: '1px solid #625E5C', position: 'absolute' }} />
              <hr style={{ left: '100%', height: 'calc(100% - 4px)', border: '1px solid #625E5C', position: 'absolute' }} />
            </div>
            <div style={{ position: 'absolute', top: 132, right: 60, backgroundColor: '#FDFDFD', padding: '62px 0px 60px 33px' }}>
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


            <div style={{ position: 'absolute', top: 313, left: 370, backgroundColor: '#FDFDFD', padding: '62px 0px 60px 33px' }}>
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



            <div style={{ position: 'absolute', bottom: 146, right: 60, backgroundColor: '#FDFDFD', padding: '62px 0px 60px 33px' }}>
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
        <section style={{ backgroundColor: color.N0, paddingTop: 106, paddingBottom: 40 }}>
          <div style={{ maxWidth: 1100, margin: 'auto', }}>
            <div style={{ marginLeft: 92, marginTop: 304, flex: 1, position: 'relative', zIndex: 0 }}>
              <i style={{ position: 'absolute', top: -5, left: -15, width: 45, height: 45, borderRadius: 25, backgroundColor: color.brand }} />
              <span style={{ fontSize: 50, position: 'relative', fontWeight: 500 }}>History</span>
              <div style={{ display: 'flex', flexDirection: 'row', marginTop: 103, borderTop: '1px solid black', padding: '30px 0px 30px 0px' }}>
                <div style={{ paddingLeft: 91 }}>
                  <span style={{ fontSize: 35, fontWeight: 700 }}>2022</span>
                </div>
                <div style={{ marginLeft: 182, flex: 1 }}>
                  <ul>
                    {
                      year2022.map((item, index) => (
                        <li key={index} style={{ marginTop: index === 0 ? 0 : 15, listStyle: 'initial', listStyleType: 'disc' }}>
                          <span style={{ fontWeight: 300, fontSize: 16 }}>{item}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', borderTop: '1px solid black', padding: '30px 0px 30px 0px' }}>
                <div style={{ paddingLeft: 91 }}>
                  <span style={{ fontSize: 35, fontWeight: 700 }}>2021</span>
                </div>
                <div style={{ marginLeft: 182, flex: 1 }}>
                  <ul>
                    {
                      year2021.map((item, index) => (
                        <li key={index} style={{ marginTop: index === 0 ? 0 : 15, listStyle: 'initial', listStyleType: 'disc' }}>
                          <span style={{ fontWeight: 300, fontSize: 16 }}>{item}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>
        <MainSectionBottom>
          <div style={{ display: 'flex', flexDirection: 'row', maxWidth: 1100, margin: 'auto', padding: '76px 0px 68px 0px' }}>
            <div>
              <span style={{ fontSize: 45, fontWeight: 700 }}>Contact us !</span>
            </div>
            <div style={{ marginLeft: 92, paddingTop: 114, display: 'flex', flexDirection: 'row', }}>
              <div>
                <span style={{ fontSize: 18, fontWeight: 600 }}>Address</span>
                <div style={{ marginTop: 14 }}>
                  <span style={{ fontSize: 13, fontWeight: 400 }}>Hongseong. Korea</span>
                </div>
              </div>
              <div style={{ marginLeft: 56 }}>
                <span style={{ fontSize: 18, fontWeight: 600 }}>Email</span>
                <div style={{ marginTop: 14 }}>
                  <span style={{ fontSize: 13, fontWeight: 400 }}>nabilera2020@naver.com</span>
                </div>
              </div>
              <div style={{ marginLeft: 56 }}>
                <span style={{ fontSize: 18, fontWeight: 600 }}>Tel</span>
                <div style={{ marginTop: 14 }}>
                  <span style={{ fontSize: 13, fontWeight: 400 }}>041-406-8998</span>
                </div>
              </div>
              <div style={{ marginLeft: 56 }}>
                <span style={{ fontSize: 18, fontWeight: 600 }}>SNS</span>
                <div style={{ marginTop: 14 }}>
                  <span style={{ fontSize: 13, fontWeight: 400 }}>Instagram</span>
                </div>
                <div style={{ marginTop: 12 }}>
                  <span style={{ fontSize: 13, fontWeight: 400 }}>Facebook</span>
                </div>
                <div style={{ marginTop: 12 }}>
                  <span style={{ fontSize: 13, fontWeight: 400 }}>Blog</span>
                </div>
                <div style={{ marginTop: 12 }}>
                  <span style={{ fontSize: 13, fontWeight: 400 }}>Youtube</span>
                </div>
              </div>
            </div>
          </div>

        </MainSectionBottom>
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
