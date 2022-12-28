import { gql } from '@apollo/client';
import { GQL_DOMAIN } from 'assets/utils/ENV';
import { NameNode, OperationDefinitionNode } from 'graphql';
import ProjectModifyScreen from 'screens/admin/project/modify';
import axiosInstance from "assets/apis/axiosInstance";

export const getServerSideProps = async ({ query = { idx: null }, params = {} }) => {
    const gquery = `
            query fetchProjectDetail($idx: Int) {
                fetchProjectDetail(idx: $idx) {
                    status
                    data {
                        types {
                            idx
                            name
                        }
                        project {
                            idx
                            type_idx
                            title
                            sub_title
                            when
                            location
                            organizer
                            operate
                            support
                            images {
                                idx
                                bucket
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
        return {
            props: {
                query,
                params,
            },
        };
    }
};

export default ProjectModifyScreen;
