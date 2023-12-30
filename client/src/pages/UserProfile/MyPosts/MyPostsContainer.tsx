import { connect } from 'react-redux';
import { actions } from "../../../store/MyProfileReducer/myProfileReducer";
import MyPosts, { DispatchPropsType, MapPropsType } from './MyPosts';
import { AppStateType } from '../../../store/reduxStore';

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.userProfilePage.posts
    }
}
const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addPost: actions.addPostActionCreator
})(MyPosts);
export default MyPostsContainer;