import NewsScreen from 'screens/admin/news';

export const getServerSideProps = async ({ query = {}, params = {} }) => {
    return {
        props: {
            query,
            params,
        },
    };
};

export default NewsScreen;
