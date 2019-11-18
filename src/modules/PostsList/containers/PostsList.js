import React from 'react';
import { connect } from 'react-redux';
import { PostsList } from 'components';
import PostsListActions from '../action';

class PostsListContainer extends React.Component {

    //better use constructor
    componentWillMount() {
        const { fetchItems } = this.props;
        fetchItems();
    }
    render() {
        const {fetchRemoveItem} = this.props; 
        return <PostsList items={this.props.items} onRemove={fetchRemoveItem}/>
    }
}

// const mapStateToProps = ({ posts }) => posts;

export default connect(
    ({ posts }) => posts,
    PostsListActions,
)(PostsListContainer)
