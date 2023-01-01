import { gql } from '@apollo/client';
import { GQL_DOMAIN } from 'assets/utils/ENV';
import { NameNode, OperationDefinitionNode } from 'graphql';
import NewsModifyScreen from 'screens/admin/news/modify';
import axiosInstance from "assets/apis/axiosInstance";

export const getServerSideProps = async ({ query = { idx: null }, params = {} }) => {
    const gquery = `
            query fetchNewsDetail($idx: Int) {
                fetchNewsDetail(idx: $idx) {
                    status
                    data {
                        categories {
                            idx
                            title
                        }
                        news {
                            idx
                            category_idx
                            title
                            content
                            created_at
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
        `
    const innerQuery = gqlQuery.definitions[0] as OperationDefinitionNode;
    const { value } = innerQuery.name as NameNode;

    try {
        const { data } = await axiosInstance(value)
            .post(`${GQL_DOMAIN}`, {
                query: gquery,
                variables: {
                    idx: Number(query.idx)
                }
            })
        return {
            props: {
                query,
                params,
                data: data.data[value].data
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

export default NewsModifyScreen;
