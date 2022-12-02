import Project from 'screens/admin/project';

export const getServerSideProps = async ({ query = {}, params = {} }) => {
    return {
        props: {
            query,
            params,
        },
    };
};

export default Project;
