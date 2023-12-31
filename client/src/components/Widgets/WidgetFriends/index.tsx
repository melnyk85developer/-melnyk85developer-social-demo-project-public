import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, 
         getFriends, 
         getFriendsFilter,
         getPageSize} from "store/FriendsReducer/friendsSelectors";
import { TypedDispatch } from "store/reduxStore";
import { requestFriends } from "store/FriendsReducer/friendsReducer";
import WidgetFriendsList from "./WidgetFriendsList"
import { UserType } from "types/types";
import Preloader from "components/Priloader";
import "./styles.scss";

const WidgetFriends: React.FC = () => {
    const friends = useSelector(getFriends)
    const [localStateMyFriends, setLocalStateMyFriends] = useState<UserType[]>([])
    let resultRendomFriends: UserType[] = []

    // useEffect(() => {
    //     // setTimeout(function run() {
    //     //     setLocalStateMyFriends(resultRendomFriends)
    //     // setTimeout(run, 10000);
    //     // }, 10000);
    // }, [resultRendomFriends])

    // for(let i = 0; i < 6; i++){resultRendomFriends.push(myFriends[Math.floor(Math.random() * myFriends.length)])}

    const randomFriends = (min: number, max: number, num: number, friends: UserType[]) => {
        let myFriends: UserType[] = friends
        resultRendomFriends = []

        let i, arr = [], res = [];
        for (i = min; i <= max; i++ ) arr.push(i);
    
        // for (i = 0; i < num; i++) res.push(arr.splice(Math.floor(Math.random() * (arr.length -1)), 1)[0])

        for (i = min; i < num; i++) {
            res.push(arr.splice(Math.ceil(Math.random() * (arr.length)), 1)[0])
            let a = res[i]

            if(myFriends[a] !== undefined){
                resultRendomFriends.push(myFriends[a])
            }
        }
        // setLocalStateMyFriends(resultRendomFriends)
        return resultRendomFriends
    }

    // setLocalStateMyFriends(randomFriends(0, friends.length -1, 10, friends))
    resultRendomFriends = randomFriends(0, friends.length -1, 10, friends)

    // const resultRendom = () => {
    //     return resultRendomFriends = randomFriends(0, localStateMyFriends.length, 10, friends)
    // }

    // =====

    // useEffect(() => {
    //     setInterval( () => {
    //         setLocalStateMyFriends(resultRendomFriends = randomFriends(0, friends.length -1, 10, friends))
    //     }, 4000);
    
    // }, [localStateMyFriends])

    // const resultRendom = () => {
    //     return resultRendomFriends = randomFriends(0, localStateMyFriends.length, 10)
    // }

    // setInterval(resultRendom, 4000);
    // randomFriends(0, localStateMyFriends.length, 10)
        
    // console.log(resultRendomFriends)
    
    // setTimeout(function run() {
    //     resultRendomFriends = randomFriends(0, localStateMyFriends.length, 10)
    // setTimeout(run, 10000);
    // }, 10000);

    return (
        <div className="borderWidgets">
            <div className="wrapH4Widgets">
                <h4>Друзья</h4>
            </div>
            <div className="widgetFriends">
                {
                    resultRendomFriends
                    ? <WidgetFriendsList friends={resultRendomFriends.slice(0,6)}/>
                    : <Preloader />
                }
            </div>
        </div>
    )
    // friends={friends.slice(0,6)}
    // setInterval(setResult, 4000);
}
export default WidgetFriends;