import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { HeaderBlock } from 'components';

const mapStateToProps = ({ posts }, { location: { pathname } }) => {
  const postId = pathname.split('/post/')[1];
  return !posts.items ? {} : posts.items.filter(post => post._id === postId)[0];
};

HeaderBlock.defaultProps = {
  title: 'Hi Rishat',
  description: 'Welcome to your den',
  imageUrl:
    'https://picsum.photos/1920/600 ',
};

export default withRouter(connect(mapStateToProps)(HeaderBlock));