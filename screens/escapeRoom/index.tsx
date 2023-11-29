import {useMediaQuery} from '@mui/material';
import Footer from 'components/Footer';
import Header from 'components/Header';
import HeadMeta from 'components/Header/HeadMeta';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {color, size} from 'styles/theme';
import {
  EscapeRoomBodyFourthContainer,
  EscapeRoomBodySecondContainer,
  EscapeRoomBodyThirdThemeContainer,
  EscapeRoomBodyTopContainer,
} from './style';
import {useState} from 'react';
import {CLOUD_FRONT} from 'assets/utils/ENV';

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

const EscapeRoomScreen = ({data}: IProps) => {
  console.log('data :', data);
  const router = useRouter();
  const [list, setList] = useState<Array<IEscapeRoom>>(data?.list ?? []);

  const isMobile = useMediaQuery(`(max-width : ${size.mobile}px)`);

  return (
    <div>
      <HeadMeta title={`나빌레라 : 출장형 방탈출`} />
      <Header type={4} />
      <EscapeRoomBodyTopContainer>
        <p className="title">방안에 모든 단서가!! 지금 이 순간!!</p>
        <div className="titleImageWrap">
          <Image
            style={{width: '100%', height: 51}}
            src={require('../../assets/images/escape_room_title.png')}
            alt="escape_room_title"
          />
        </div>
      </EscapeRoomBodyTopContainer>
      <EscapeRoomBodySecondContainer>
        <div className="topWrap">
          <Image
            style={{width: 8, height: 8}}
            src={require('../../assets/images/escape_room_rhombus.svg')}
            alt="rhombus"
          />
          <p className="title">출장형 방탈출이란?</p>
          <Image
            style={{width: 8, height: 8}}
            src={require('../../assets/images/escape_room_rhombus.svg')}
            alt="rhombus"
          />
        </div>
        <p className="content">
          실제 상황을 방불케 하는 특별한 테마 룸에서, 60분 이내에 주어진 미션을
          해결하여 주어진 미션을 해결하여 탈출해야 하는 신개념 문화·여가 시설
          입니다. 방탈출에 주어진 시나리오에 따라 출입구는 봉쇄됩니다.
        </p>
      </EscapeRoomBodySecondContainer>
      <EscapeRoomBodyThirdThemeContainer>
        <p className="title">테마</p>
        <div className="contentWrap">
          {list.map(item => (
            <div key={item.idx} className="contentTitleWrap">
              <div className="contentItemWrap">
                <img
                  style={{width: '100%', height: 190}}
                  src={CLOUD_FRONT + item.key}
                />
              </div>
              <p className="contentItemTitle">{item.title}</p>
            </div>
          ))}
        </div>

        <div
          onClick={() => router.push('/escapeRoom/all')}
          style={{
            display: 'flex',
            marginTop: 74,
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}>
          <div
            style={{
              padding: '17px 51px',
              justifyContent: 'center',
              alignItems: 'center',
              border: `1px solid ${color.N0}`,
            }}>
            <span style={{color: color.N0, fontSize: 15, fontWeight: 500}}>
              모든 테마 보기
            </span>
          </div>
        </div>
      </EscapeRoomBodyThirdThemeContainer>
      <EscapeRoomBodyFourthContainer>
        <p
          style={{
            textAlign: 'center',
            fontSize: 30,
            color: color.brand,
            fontWeight: 700,
          }}>
          지역 축제 및 행사스토리에 맞춤제작
        </p>
        <p className="title">
          실제 상황을 방불케 하는 특별한 테마 룸에서, 60분 이내에 주어진 미션을
          해결하여 주어진 미션을 해결하여 탈출해야 하는 신개념 문화·여가 시설
          입니다. 방탈출에 주어진 시나리오에 따라 출입구는 봉쇄됩니다.
        </p>
        <div className="contentWrap">
          <div className="contentImageWrap">
            <Image
              src={require('../../assets/images/exmaple.png')}
              alt="example"
              style={{width: '100%', height: 'auto'}}
            />
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <div className="contentItemWrap">
              <p className="genre">#장르이름</p>
              <p className="contentTitle">찰리</p>
            </div>
            <div className="contentDifficultyPersonWrap">
              <div className="contentDifficultyWrap">
                <p className="contentDifficulty">난이도</p>
                <div className="contentDifficultyVerticalImageWrap">
                  <Image
                    style={{width: 2, height: 10}}
                    src={require('../../assets/images/vertical_icon.svg')}
                    alt="vertical"
                  />
                </div>
              </div>
              <div className="contentDifficultyWrap">
                <p className="contentDifficulty">인원</p>
                <div className="contentDifficultyVerticalImageWrap">
                  <Image
                    style={{width: 2, height: 10}}
                    src={require('../../assets/images/vertical_icon.svg')}
                    alt="vertical"
                  />
                </div>
                <div className="contentPersonCountWrap">
                  <span className="contentPersonCount">4~5명</span>
                </div>
              </div>
              <div className="contentDifficultyWrap">
                <p className="contentDifficulty">소개</p>
                <div className="contentDifficultyVerticalImageWrap">
                  <Image
                    style={{width: 2, height: 10}}
                    src={require('../../assets/images/vertical_icon.svg')}
                    alt="vertical"
                  />
                </div>
                <div className="contentPersonCountWrap">
                  <p className="contentPersonCount">
                    [이용금액 1인당 14,000원입니다.] 금일 오전 김씨는 안산
                    D빌딩에 폭탄 테러를 예고했다. 안산경찰서 특수수사부의 형사인
                    당신은 사실 테러범의 전여친. 과연 테러를 저지하여 안산시민을
                    구할 것인가?
                  </p>
                </div>
              </div>
            </div>
            <div className="contentExtraWrap">
              <div className="contentExtraItem"></div>
            </div>
          </div>
        </div>
      </EscapeRoomBodyFourthContainer>
      <Footer />
    </div>
  );
};

export default EscapeRoomScreen;
