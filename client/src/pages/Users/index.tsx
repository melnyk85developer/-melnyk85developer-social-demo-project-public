import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import UsersList from "./UsersList";
import LSidebar from "../../components/LSidebar/index";
import RSidebar from "../../components/RSidebar/index";
import Preloader from "components/Priloader";
import WidgetFriends from "../../components/Widgets/WidgetFriends";
import WidgetPeople from "../../components/Widgets/WidgetsPeople";
import WidgetYofamiliar from "../../components/Widgets/WidgetYofamiliar";
import Paginator from "components/Paginator/Paginator";
import UsersSearchForm from "./UsersSearchForm/UsersSearchForm";
import { FilterType, follow, requestUsers, unfollow } from "store/UsersReducer/usersReducer";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, 
         getFollowingInProgress, 
         getIsFetching, 
         getPageSize, 
         getTotalUsersCount, 
         getUsers, 
         getUsersFilter 
        } from "store/UsersReducer/usersSelectors";
import routeMain from "./routes";
import { TypedDispatch } from "store/reduxStore";
import "./styles.scss";
import { Col } from "antd";

const Users: React.FC = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const [searchParams, setSearchParams] = useSearchParams()

    const users = useSelector(getUsers)
    const isFetching = useSelector(getIsFetching)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const query: { term?: string; friend?: string; page?: string } = {}

    if (!!filter.term) query.term = filter.term
    if (filter.friend !== undefined) query.friend = String(filter.friend)
    if (currentPage !== 1) query.page = String(currentPage)

    const queryToString = new URLSearchParams(query)

    const params = new URLSearchParams(searchParams)
    const parsedTerm = params.get('term')
    const parsedPage = params.get('page')
    const parsedFriend = params.get('friend')

    let actualPage = currentPage
    let actualFilter = filter

    if (parsedPage !== null) {
      actualPage = Number(parsedPage)
    }
    if (parsedTerm !== null) {
      actualFilter = { ...actualFilter, term: parsedTerm }
    }
    switch (parsedFriend) {
      case 'undefined':
        actualFilter = { ...actualFilter, friend: undefined }
        break
      case 'true':
        actualFilter = { ...actualFilter, friend: true }
        break
      case 'false':
        actualFilter = { ...actualFilter, friend: false }
        break
    }
    useEffect(() => {
        setSearchParams(queryToString.toString())
    },[filter, currentPage])

    useEffect(() => {
        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [dispatch])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }

    const followed = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollowed = (userId: number) => {
        dispatch(unfollow(userId))
    }
    return (
        <>
            <LSidebar 
                content={
                    <>
                        <div className="wrapWidgetFriendsProfile">
                            <WidgetFriends />
                        </div>
                        <div className="wrapWidgetPeopleProfile">
                            <WidgetPeople />
                        </div>
                    </>
                }
            />
            <Col span={12}>
                {isFetching ? <div>{"Hello Samuray"}</div> : <></>}
                {isFetching 
                    ? <Preloader /> 
                    : null}
                <Col className="wrapperUsersPagination">
                    <UsersSearchForm onFilterChanged={onFilterChanged}/>
                    <Paginator 
                        pageSize={pageSize} 
                        totalItemsCount={totalUsersCount} 
                        onPageChanged={onPageChanged} 
                        currentPage={currentPage} 
                    /> 
                </Col>
                {users.length > 0 
                    && <UsersList 
                            follow={followed}
                            unfollow={unfollowed}
                            users={users}
                            followingInProgress={followingInProgress} 
                        />}
            </Col>
            <RSidebar 
                content={
                    <>
                        <WidgetYofamiliar />
                    </>
                }
            />
        </>
    )
}
export {routeMain};
export default Users;