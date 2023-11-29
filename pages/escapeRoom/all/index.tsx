import {gql} from '@apollo/client';
import {GQL_DOMAIN} from 'assets/utils/ENV';
import {NameNode, OperationDefinitionNode} from 'graphql';
import axiosInstance from 'assets/apis/axiosInstance';
import EscapeRoomAllScreen from 'screens/escapeRoom/all';

export const getServerSideProps = async ({query = {}, params = {}}) => {
  const gquery = `
            query fetchEscapeRooms($page: Int) {
                fetchEscapeRooms(page: $page) {
                    status
                    data {
                        list {
                            idx
                            title
                            content
                            person_count
                            difficulty_score
                            key
                        },
                        total_count
                    }
                    token
                    error {
                        remark
                        code
                        text
                    }
                }
            }
        `;

  const gqlQuery = gql`
    ${gquery}
  `;
  const innerQuery = gqlQuery.definitions[0] as OperationDefinitionNode;
  const {value} = innerQuery.name as NameNode;

  try {
    const {data} = await axiosInstance(value).post(`${GQL_DOMAIN}`, {
      query: gquery,
      variables: {
        page: 0,
      },
    });
    return {
      props: {
        query,
        params,
        data: data.data[value].data,
      },
    };
  } catch (e) {
    return {
      props: {
        query,
        params,
      },
    };
  }
};

export default EscapeRoomAllScreen;
