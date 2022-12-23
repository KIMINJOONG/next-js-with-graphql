import { gql } from '@apollo/client';
import { NameNode, OperationDefinitionNode } from 'graphql';
import NewsDetailScreen from 'screens/news/detail';
import axiosInstance from "assets/apis/axiosInstance";
import { GQL_DOMAIN } from 'assets/utils/ENV';

export const getServerSideProps = async ({ query = { idx: null }, params = {} }) => {
    const gquery = `
            query fetchNewsDetailInView($idx: Int!) {
                fetchNewsDetailInView(idx: $idx) {
                    status
                    data {
                        idx
                        category_idx
                        title
                        content
                        created_at
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

export default NewsDetailScreen;
