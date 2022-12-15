import { gql } from '@apollo/client';
import { NameNode, OperationDefinitionNode } from 'graphql';
import Home from 'screens/home';
import axiosInstance from "../assets/apis/axiosInstance";
import { GQL_DOMAIN } from "../assets/utils/ENV";

interface INews {
  title: string
  created_at: Date
}

interface IHistoryTitle {
  title: string
  histories: Array<IHistory>
}

interface IHistory {
  content: string
}

interface IHomeData {
  news: Array<INews>
  histories: Array<IHistoryTitle>
}

export const getStaticProps = async () => {
  const query = `
    query fetchHomeInfos {
      fetchHomeInfos {
        status
        data {
          news {
            title
            created_at
          }
          histories {
            title
            histories {
              content
            }
          }
        }
      }
    }
  `;

  const gqlQuery = gql`
    ${query}
  `
  // apollo에 연결된 graphql쿼리문 사용하고, 데이터 불러오기
  // const { data } = await client.query({
  //   query: gqlQuery,
  // });

  // axois call
  // innerQuery 는 쿼리의 오브젝트 명을 추출하기 위함 해당 부분은 리프레쉬 토큰 처리를 위해 인터셉터에서 사용하기위해 추출했었음
  const innerQuery = gqlQuery.definitions[0] as OperationDefinitionNode;
  const { value } = innerQuery.name as NameNode;

  try {
    const response = await axiosInstance(value)
      .post(`${GQL_DOMAIN}`, {
        query: query,
      })
    return {
      props: {
        data: response.data.data[value].data as IHomeData
      },
    };
  } catch (e) {
    return {
      props: {
      },
    };
  }
};

export default Home;
