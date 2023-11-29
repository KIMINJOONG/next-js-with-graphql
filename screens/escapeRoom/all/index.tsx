import {Pagination, useMediaQuery} from '@mui/material';
import Footer from 'components/Footer';
import Header from 'components/Header';
import HeadMeta from 'components/Header/HeadMeta';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {color, size} from 'styles/theme';
import {EscapeRoomAllContainer} from './style';
import {useState} from 'react';
import {CLOUD_FRONT, GQL_DOMAIN} from 'assets/utils/ENV';
import {NPaginationContainer} from 'components/pagination';
import {gql} from '@apollo/client';
import {NameNode, OperationDefinitionNode} from 'graphql';
import axiosInstance from 'assets/apis/axiosInstance';

interface IEscapeRoom {
  idx: number;
  category: string;
  title: string;
  views: number;
  key: string;
  created_at: Date;
}

interface IEscapeRoomData {
  list: Array<IEscapeRoom>;
  total_count: number;
}

interface IProps {
  data: IEscapeRoomData | undefined;
}

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

const EscapeRoomAllScreen = ({data}: IProps) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(data?.total_count ?? 0);
  const [list, setList] = useState<Array<IEscapeRoom>>(data?.list ?? []);
  const [keyword, setKeyword] = useState('');
  const [existScroll, setExistScroll] = useState(false);

  const fetchEscapeRooms = async (newPage: number, init: boolean = false) => {
    if (loading || (page === newPage && !init)) {
      return;
    }
    setLoading(true);
    setPage(init ? 0 : newPage);
    try {
      const {data} = await axiosInstance(value).post(`${GQL_DOMAIN}`, {
        query: gquery,
        variables: {
          page: init ? 0 : newPage,
          keyword: keyword,
        },
      });
      setList(data.data[value].data.list);
      if (init) {
        setTotalCount(data.data[value].data.total_count);
      }
    } catch (e) {}
    setLoading(false);
  };

  const isMobile = useMediaQuery(`(max-width : ${size.mobile}px)`);

  return (
    <div>
      <HeadMeta title={`나빌레라 : 출장형 방탈출`} />
      <Header type={4} />
      <EscapeRoomAllContainer>
        <p className="title">모든 테마</p>
        <div className="contentWrap">
          {list.map((item, index) => (
            <div
              key={item.idx}
              style={{
                marginTop: isMobile ? (index === 0 ? 0 : 40) : 0,
                padding: isMobile ? '0px 80px' : 0,
                marginLeft: isMobile ? 0 : index % 4 === 0 ? 0 : 26,
                marginBottom: isMobile ? 0 : 60,
                width: isMobile ? '100%' : 'calc((100% - 26*3px) / 4)',
                height: 319,
              }}>
              <img
                src={CLOUD_FRONT + item.key}
                style={{width: '100%', height: '100%'}}
              />
              <p className="content">{item.title}</p>
            </div>
          ))}
        </div>
        <NPaginationContainer>
          <Pagination
            page={page + 1}
            count={totalCount}
            variant="outlined"
            shape="rounded"
            onChange={(e, page) => fetchEscapeRooms(page - 1)}
          />
        </NPaginationContainer>
      </EscapeRoomAllContainer>
      <Footer />
    </div>
  );
};

export default EscapeRoomAllScreen;
