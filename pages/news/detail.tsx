import NewsDetailScreen from 'screens/news/detail';

export const getServerSideProps = async ({ query = {}, params = {} }) => {
    return {
        props: {
            query,
            params,
        },
    };
};

export default NewsDetailScreen;
