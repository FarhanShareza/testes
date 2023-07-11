import { BsCalendar2Date, BsClock } from "react-icons/bs";
import moment from 'moment';

const Comment= (props) => {
    const {fullName, description, create} = props;
    const convertedDate = moment(create).format("DD/MM/YYYY");

    return (
        <div className='content-box-ucapan-m'>
            <p className='f-name'>{fullName}</p>
            <p className='f-name-t'>{description}</p>
            <p className='f-date'><BsCalendar2Date className='icon-size'/>{convertedDate}</p>
        </div>
    )
}

export default Comment;