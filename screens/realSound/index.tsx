import {useMediaQuery} from '@mui/material';
import Footer from 'components/Footer';
import Header from 'components/Header';
import HeadMeta from 'components/Header/HeadMeta';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {color, size} from 'styles/theme';
import {
  RealSoundBodyFirstContainer,
  RealSoundBodyForthContainer,
  RealSoundBodySecondContainer,
  RealSoundBodyThirdContainer,
  RealSoundContainer,
} from './style';

const RealSoundScreen = () => {
  const router = useRouter();

  const isMobile = useMediaQuery(`(max-width : ${size.mobile}px)`);

  return (
    <div>
      <HeadMeta title={`나빌레라 : 실감형 사운드`} />
      <Header type={2} />
      <RealSoundContainer>
        <RealSoundBodyFirstContainer>
          <div style={{flex: 1, border: '1px solid white'}}>
            <p className="title">실감형 사운드</p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <div
              style={{
                backgroundColor: '#F8F8F8',
                opacity: 0.5,
                width: 45,
                height: 45,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 45,
              }}>
              <Image
                style={{width: 20, height: 20}}
                src={require('assets/images/speaker_on.png')}
                alt="speaker_on"
              />
            </div>
          </div>
        </RealSoundBodyFirstContainer>
        <RealSoundBodySecondContainer>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '11px 14px',
              border: `1px solid #A8A691`,
              borderRadius: 23,
            }}>
            <p
              style={{
                textAlign: 'center',
                color: '#A8A691',
                fontSize: 10,
                fontWeight: 500,
              }}>
              REALISTIC SOUND
            </p>
          </div>
          <div style={{display: 'flex', alignItems: 'center', marginTop: 16}}>
            <Image
              style={{width: 8, height: 8}}
              src={require('../../assets/images/escape_room_rhombus.svg')}
              alt="rhombus"
            />
            <p className="title">실감형 사운드란?</p>
            <Image
              style={{width: 8, height: 8}}
              src={require('../../assets/images/escape_room_rhombus.svg')}
              alt="rhombus"
            />
          </div>
          <p
            style={{
              marginTop: 50,
              textAlign: 'center',
              color: color.N20,
              fontSize: 14,
              fontWeight: 300,
            }}>
            실제 상황을 방불케 하는 특별한 테마 룸에서, 60분 이내에 주어진
            미션을 해결하여 주어진 미션을 해결하여 탈출해야 하는 신개념
            문화·여가 시설 입니다. 방탈출에 주어진 시나리오에 따라 출입구는
            봉쇄됩니다.
          </p>
          <div></div>
        </RealSoundBodySecondContainer>
        <RealSoundBodyThirdContainer>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '11px 14px',
              border: `1px solid #A8A691`,
              borderRadius: 23,
            }}>
            <p
              style={{
                textAlign: 'center',
                color: '#A8A691',
                fontSize: 10,
                fontWeight: 500,
              }}>
              REALISTIC SOUND
            </p>
          </div>
          <p className="title" style={{marginTop: 16}}>
            테마
          </p>
          <div
            style={{
              marginTop: 40,
              width: '100%',
              height: 253,
              border: '1px solid red',
            }}></div>
        </RealSoundBodyThirdContainer>
        <RealSoundBodyForthContainer>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '11px 14px',
              border: `1px solid #A8A691`,
              borderRadius: 23,
            }}>
            <p
              style={{
                textAlign: 'center',
                color: '#A8A691',
                fontSize: 10,
                fontWeight: 500,
              }}>
              CUSTOM
            </p>
          </div>
          <p className="title">지역 관광지 맞춤제작</p>
          <p
            style={{
              marginTop: 36,
              textAlign: 'center',
              color: color.N20,
              fontSize: 14,
              fontWeight: 300,
            }}>
            실제 상황을 방불케 하는 특별한 테마 룸에서, 60분 이내에 주어진
            미션을 해결하여 주어진 미션을 해결하여 탈출해야 하는 신개념
            문화·여가 시설 입니다. 방탈출에 주어진 시나리오에 따라 출입구는
            봉쇄됩니다.
          </p>
          <div style={{marginTop: 34}}>
            <Image
              style={{height: 158, width: '100%'}}
              src={require('../../assets/images/real_sound_forth_image.png')}
              alt="real_sound_forth_image"
            />
          </div>
        </RealSoundBodyForthContainer>
      </RealSoundContainer>

      <Footer />
    </div>
  );
};

export default RealSoundScreen;
