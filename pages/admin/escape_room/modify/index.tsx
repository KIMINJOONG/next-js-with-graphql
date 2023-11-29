import {gql} from '@apollo/client';
import {GQL_DOMAIN} from 'assets/utils/ENV';
import {NameNode, OperationDefinitionNode} from 'graphql';
import axiosInstance from 'assets/apis/axiosInstance';
import EscapeRoomModifyScreen from 'screens/admin/escape_room/modify';

export const getServerSideProps = async ({
  query = {idx: null},
  params = {},
}) => {
  const gquery = `
            query fetchEscapeRoomDetail($idx: Int) {
                fetchEscapeRoomDetail(idx: $idx) {
                    status
                    data {
                        escape_room {
                            idx
                            title
                            content
                            created_at
                            person_count
                            difficulty_score
                            mainImage {
                              key
                              list_order
                            }
                            images {
                                idx
                                key
                                list_order
                            }
                        }
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
        idx: Number(query.idx),
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
    // console.log(e)
    return {
      props: {
        query,
        params,
      },
    };
  }
};

export default EscapeRoomModifyScreen;
