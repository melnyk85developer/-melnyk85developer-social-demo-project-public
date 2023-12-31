import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NewsList from "./NewsList";
import LSidebar from "../../components/LSidebar/index";
import RSidebar from "../../components/RSidebar/index";
import Preloader from "components/Priloader";
import WidgetFriends from "../../components/Widgets/WidgetFriends";
import WidgetPeople from "../../components/Widgets/WidgetsPeople";
import WidgetYofamiliar from "../../components/Widgets/WidgetYofamiliar";
import PaginatorM from "components/PaginatorM/PaginatorM";
import NewsSearchForm from "./NewsSearchForm/NerwsSearchForm";
import { FilterType, actions, follow, requestNews, unfollow } from "store/NewsReducer/newsReducer";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, 
         getFollowingInProgress, 
         getIsFetching, 
         getPageSize, 
         getTotalNewsCount, 
         getNews, 
         getNewsFilter, 
         scrollLength,
         setNewsList
        } from "store/NewsReducer/newsSelectors";
import { TypedDispatch } from "store/reduxStore";
import { NavLink } from 'react-router-dom';
import { routeMain as routeHome } from '../Home';
import { routeMain as routeNews } from '../News';
import { routeMain as routeContacts } from '../Contacts';
import routeMain from "./routes";
import { UserType } from "types/types";
import "./styles.scss";
import { Col } from "antd";

const News: React.FC = React.memo(() => {

    const dispatch = useDispatch<TypedDispatch>()
    const [searchParams, setSearchParams] = useSearchParams()

    const news = useSelector(getNews)
    // const newsList = useSelector(setNewsList)
    const scroll = useSelector(scrollLength)
    const isFetching = useSelector(getIsFetching)
    const totalNewsCount = useSelector(getTotalNewsCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getNewsFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const [newsList, setNewsList] = useState<Array<UserType>>([])

    // useEffect(() => {
    //     // setNewsList([...newsList, ...news])
    //     // dispatch(actions.setNewsList(arrNews))

    // }, [news])

    // const [scrolState, setScrolState] = useState(Number)

    let arrNews: Array<UserType> = newsList
    let scrollLengt = scroll
    let newsListId: Array<number> = []
    let mapIdNewsList = newsList.map(item => item.id)

    // const pushNews = () => {
        
    // }

    // for(let i = 0; i < mapIdNewsList.length; i++){
    //     newsListId.push(mapIdNewsList[i])
    // }

    // if(newsList.length === 0){
    //     dispatch(actions.setNewsList(news))
    //     setNewsList(news)
    // }else{
    //     for(let i = 0; news.length > i; i++){
    //         let resIfNews = newsListId.includes(news[i].id, 0)
    //         if(resIfNews === false){
    //             arrNews.push(news[i])
    //         }
    //     }
    //     if(arrNews.length > 0){
    //         dispatch(actions.setNewsList(arrNews))
    //         // setNewsList([...newsList, ...news])
    //     }
    // }

    console.log(news)

    useEffect(() => {
        const blockNews = document.getElementById('blockNews')

        blockNews?.addEventListener('scroll', () => {
            console.log(blockNews.scrollTop)
    
            if(blockNews.scrollHeight - (blockNews.scrollTop + window.innerHeight) < 3000){
                actualPage = actualPage + 1
                
                dispatch(requestNews(actualPage, pageSize, actualFilter))
                console.log('scroll')
            }
        })

        return function(){
            document.removeEventListener('scroll', () => {})
        }
    }, [news])

    // const setScrolling = (number: number) => {
    //     dispatch(actions.setScroll( + number))
    // }

    // if(blockNews.scrollTop === scroll){
    //     blockNews.scrollTop = scroll
    //     setScrolling(scrollLengt += 11981)
    //     actualPage = actualPage + 1
    //     // blockNews.scrollTop = 0
    //     dispatch(requestNews(actualPage, pageSize, actualFilter))
    // }

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
        dispatch(requestNews(actualPage, pageSize, actualFilter))
    }, [dispatch, actualFilter, actualPage, pageSize])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestNews(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestNews(1, pageSize, filter))
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
            <Col span={12} className="contentNews">
                {/* <GorizontalNawContent content={<></>} /> */}
                {/* <nav className="wrap_nav_video">
                    <div className="menu">
                        <ul>
                            <li><NavLink to={routeHome()}>Home</NavLink></li>
                            <li><NavLink to={routeNews()}>News</NavLink></li>
                            <li><NavLink to={routeContacts()}>Comtacts</NavLink></li>
                        </ul>
                    </div>
                </nav> */}
                <Col>
                    {isFetching ? <div>{"Hello Samuray"}</div> : <></>}
                    {isFetching 
                        ? <Preloader /> 
                        : null}
                    <Col className="wrapperNewsPagination">
                        <NewsSearchForm onFilterChanged={onFilterChanged}/>
                        <PaginatorM
                            pageSize={pageSize} 
                            totalItemsCount={totalNewsCount} 
                            onPageChanged={onPageChanged} 
                            currentPage={currentPage} 
                        /> 
                    </Col>

                    {news.length > 0 
                        &&  <NewsList 
                                follow={followed}
                                unfollow={unfollowed}
                                news={news}
                                followingInProgress={followingInProgress} 
                            />}
                </Col>
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
}) 
export {routeMain};
export default News;