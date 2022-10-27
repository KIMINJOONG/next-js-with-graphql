import { gql } from "@apollo/client";
import { DocumentNode, NameNode, OperationDefinitionNode } from "graphql";
import Head from "next/head";
import Image from "next/image";
import client from "../assets/apis/apolloClient";
import axiosInstance from "../assets/apis/axiosInstance";
import { GQL_DOMAIN } from "../assets/utils/ENV";
import styles from "../styles/Home.module.css";

const Home = ({ countries }: any) => {
  return (
    <div className={styles.grid}>
      {countries.map((country: any) => (
        <div key={country.code} className={styles.card}>
          <h3>
            <a
              href="#country-name"
              aria-hidden="true"
              className="aal_anchor"
              id="country-name"
            >
              <svg
                aria-hidden="true"
                className="aal_svg"
                height="16"
                version="1.1"
                viewBox="0 0 16 16"
                width="16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                ></path>
              </svg>
            </a>
            {country.name}
          </h3>
          <p>
            {country.code} - {country.emoji}
          </p>
        </div>
      ))}
    </div>
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
