import PropTypes from 'prop-types';

const Container = ({children}) => {
    return (
        <div className='max-w-[1200px] mx-auto px-4 lg:px-0'>
            { children }
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node
};

export default Container;