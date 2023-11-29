import {gql} from '@apollo/client';
import {GQL_DOMAIN} from 'assets/utils/ENV';
import {NameNode, OperationDefinitionNode} from 'graphql';
import axiosInstance from 'assets/apis/axiosInstance';
import NewsScreen from 'screens/news';
import EscapeRoomScreen from 'screens/escapeRoom';
import RealSoundScreen from 'screens/realSound';

// export const getServerSideProps = async ({ query = {}, params = {} }) => {
//     const gquery = `
//             query fetchNews($page: Int) {
//                 fetchNews(page: $page) {
//                     status
//                     data {
//                         list {
//                             idx
//                             category
//                             title
//                             views
//                             created_at
//                         },
//                         total_count
//                     }
//                     token
//                     error {
//                         remark
//                         code
//                         text
//                     }
//                 }
//             }
//         `;

//     const gqlQuery = gql`
//           ${gquery}
//         `
//     const innerQuery = gqlQuery.definitions[0] as OperationDefinitionNode;
//     const { value } = innerQuery.name as NameNode;

//     try {
//         const { data } = await axiosInstance(value)
//             .post(`${GQL_DOMAIN}`, {
//                 query: gquery,
//                 variables: {
//                     page: 0
//                 }
//             })
//         return {
//             props: {
//                 query,
//                 params,
//                 data: data.data[value].data
//             },
//         };
//     } catch (e) {
//         return {
//             props: {
//                 query,
//                 params,
//             },
//         };
//     }
// };

export default RealSoundScreen;
