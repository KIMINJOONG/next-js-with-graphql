import EscapeRoomScreen from 'screens/admin/escape_room';

export const getServerSideProps = async ({query = {}, params = {}}) => {
  return {
    props: {
      query,
      params,
    },
  };
};

export default EscapeRoomScreen;
