import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createDM } from '../../../../actions/dm_actions'
import MessageForm from '../../channels/message_form'


const NewDMMessage = ({ members, setFocused }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const name = Object.values(members)
        .sort((a, b) => a.order > b.order ? 1 : -1)
        .map( ({username}) => username).join(", ") || "someone new"
    const userId = useSelector( ({ session: { currentUserId } }) => currentUserId )
    
    // for duck-typing purposes
    const sub = {
        speak: ({ message: { body } }) => {
            dispatch(createDM({
                ids: [userId, ...Object.keys(members)],
                body
            })).then(({ id }) => { navigate(`/d/${ id.slice(1) }`)})
        }
    }
    return (
        <div className="show">
            <MessageForm 
                setFocused={ setFocused }
                type="DM"
                edit={ false }
                id="new"
                sub={ sub }
                name={ name }
                user={ userId }
                />    
        </div>
    )
}

export default NewDMMessage