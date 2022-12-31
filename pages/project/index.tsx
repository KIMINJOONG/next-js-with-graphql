import { gql } from '@apollo/client';
import { NameNode, OperationDefinitionNode } from 'graphql';
import axiosInstance from "assets/apis/axiosInstance";
import { GQL_DOMAIN } from "assets/utils/ENV";
import ProjectScreen from 'screens/proejct';

interface IType {
    idx: number
    name: string
}

interface IImage {
    idx: number
    key: string
    list_order: number
}
  
interface IProject {
    idx: number
    type_idx: number
    title: string
    sub_title: string
    when: string
    location: string
    organizer: string
    operate?: string
    support?: string
    created_at: Date
    images: Array<IImage>
}

interface IProjectData {
    types: Array<IType>
    projects: Array<IProject>
}
  
export const getServerSideProps = async ({ query = { idx: null }, params = {} }) => {
    const gquery = `
      query fetchAllProjects {
        fetchAllProjects {
          status
          data {
            types {
              idx
              name
            }
            projects {
              idx
              type_idx
              title
              sub_title
              when
              location
              organizer
              operate
              support
              created_at
              images {
                idx
                key
                list_order
              }
            }
          }
        }
      }
    `;
  
    const gqlQuery = gql`
      ${gquery}
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
          query: gquery,
        })
      const res = response.data.data[value]
      if(res.status === 200) {
          return {
            props: {
              query,
              params,
              data: response.data.data[value].data as IProjectData
            },
          };
      }
      return {
        props: {
            query,
            params,
        },
      };
    } catch (e) {
        // console.log(e)
      return {
            props: {
                query,
                params,
            },
        };
    }
  };

export default ProjectScreen;
